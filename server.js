const fs = require('fs')
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const compression = require('compression')
const resolve = file => path.resolve(__dirname, file)
const proxy = require('http-proxy-middleware');//引入代理中间件

const isProd = process.env.NODE_ENV === 'production'
const serverInfo =
  `express/${require('express/package.json').version} ` +
  `vue-server-renderer/${require('vue-server-renderer/package.json').version}`

const app = express()

let renderer,ff
if (isProd) {
  // In production: create server renderer using server bundle and index HTML
  // template from real fs.
  // The server bundle is generated by vue-ssr-webpack-plugin.
  const bundle = require('./dist/vue-ssr-bundle.json')
  // src/index.template.html is processed by html-webpack-plugin to inject
  // build assets and output as dist/index.html.
  const template = fs.readFileSync(resolve('./dist/index.html'), 'utf-8')
  renderer = createRenderer(bundle, template)
} else {
  // In development: setup the dev server with watch and hot-reload,
  // and create a new renderer on bundle / index template update.
  require('./build/setup-dev-server')(app, (bundle, template, dd) => {
    ff = dd;
    renderer = createRenderer(bundle, template)
  })
}

function createRenderer (bundle, template) {
  // https://github.com/vuejs/vue/blob/dev/packages/vue-server-renderer/README.md#why-use-bundlerenderer
  return require('vue-server-renderer').createBundleRenderer(bundle, {
    template,
    cache: require('lru-cache')({
      max: 1000,
      maxAge: 1000 * 60 * 15
    })
  })
}

const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0
})

app.use(compression({ threshold: 0 }))
app.use(favicon('./public/logo-48.png'))
app.use('/dist', serve('./dist', true))
app.use('/public', serve('./public', true))
app.use('/manifest.json', serve('./manifest.json', true))
app.use('/service-worker.js', serve('./dist/service-worker.js'))


/**
 * proxy middleware options
 * 代理跨域配置
 * @type {{target: string, changeOrigin: boolean, pathRewrite: {^/api: string}}}
 */
var options = {
  target: 'http://api.douban.com/v2', // target host
  changeOrigin: true,                // needed for virtual hosted sites
  pathRewrite: {
    '^/api': ''
  }
};
const clientConfig = require('./build/webpack.client.config')
var exampleProxy = proxy(options);

app.use('/api', exampleProxy);

app.get('*', (req, res) => {
  if (!renderer) {
    return res.end('waiting for compilation... refresh in a moment.')
  }

  const s = Date.now()

  res.setHeader("Content-Type", "text/html")
  res.setHeader("Server", serverInfo)

  const errorHandler = err => {
    if (err && err.code === 404) {
      res.status(404).end('404 | Page Not Found')
    } else {
      // Render Error Page or Redirect
      res.status(500).end('500 | Internal Server Error')
      console.error(`error during render : ${req.url}`)
      console.error(err)
    }
  }
  var title = ''
  switch (req.url) {
    case '/moving':
      title = '正在热映'
      break;
    case '/upcoming':
      title = '即将上映'
      break;
    case '/top250':
      title = 'Top250'
      break;
    case '/login':
      title = '登录'
      break;
    default:
      title = '404'
  }
  renderer.renderToStream({ title, url: req.url })
    .on('error', errorHandler)
    .on('end', () => console.log(`whole request: ${Date.now() - s}ms`))
    .pipe(res)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
