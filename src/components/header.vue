<template>
   <el-row class="header">
       <el-col class="headerGutter" :xs="0" :span="1">
       </el-col>
       <el-col :xs="24" :span="22">
          <el-row class="headCenter">
               <el-col :xs="6" :span="2">
                   <el-row>
                       <el-col :xs="24" :span="0">
                           h5导航
                       </el-col>
                       <el-col :xs="0" :span="24">
                           公司log
                       </el-col>
                   </el-row>

               </el-col>
              <el-col  :xs="12" :span="20">
                  <el-row>
                      <el-col :xs="24" :span="0">
                          后台管理系统
                      </el-col>
                      <el-col :xs="0" :span="24">
                          <el-menu
                                  :default-active="activeIndex2"
                                  class="el-menu-demo"
                                  mode="horizontal"
                                  @select="handleSelect"
                                  background-color="#545c64"
                                  text-color="#fff"
                                  active-text-color="#ffd04b">
                              <el-submenu  :key="index" v-for="(items,index) in moduleList" :index="`${index.toString()}`">
                                  <template slot="title"><i class="el-icon-tickets"></i>{{items.title}}</template>
                                  <div v-for="(item,indexIn) in items.data" :key="indexIn" :index="`${index}-${indexIn}`">
                                      <el-menu-item v-if="!item.data" :index="`${index}-${indexIn}`">
                                          <router-link :to="item.link" v-html="item.text">
                                          </router-link>
                                      </el-menu-item>
                                      <el-submenu v-if="item.data" :index="`${index}-${indexIn}`">
                                          <template slot="title">{{item.text}}</template>
                                          <el-menu-item v-for="(it,ind) in item.data" :key="ind" :index="`${index}-${indexIn}-${ind}`">
                                              <router-link :to="it.link" v-html="item.text">
                                              </router-link>
                                          </el-menu-item>
                                      </el-submenu>
                                  </div>
                              </el-submenu>
                          </el-menu>
                      </el-col>
                  </el-row>
              </el-col>
              <el-col :xs="6" :span="2">
                  <el-menu
                          class="el-menu-demo"
                          mode="horizontal"
                          @select="handleSelect"
                          background-color="#545c64"
                          text-color="#fff"
                          active-text-color="#ffd04b">
                      <el-submenu index="100">
                          <template slot="title"><i class="el-icon-tickets"></i>admin</template>
                          <el-menu-item v-for="(item,index) in adminData" :key="index" :index="`${index}`">
                              <router-link :to="item.link" v-html="item.text"></router-link>
                          </el-menu-item>
                      </el-submenu>
                  </el-menu>
              </el-col>
          </el-row>
       </el-col>
       <el-col class="headerGutter" :xs="0" :span="1">
       </el-col>
   </el-row>
</template>

<script>
    export default {
        name: "v-header",
        data(){
          return{
              activeIndex: '',
              activeIndex2: '0-0',
              moduleList:[
                  {
                      title:"控制面板",
                      data:[
                          {
                              link:"/moving",
                              text:"仪表盘"
                          },
                          {
                              link:"/moving",
                              text:"访问首页"
                          },
                          {
                              link:"/moving",
                              text:"权限管理",
                              data:[
                                  {
                                      link:"/moving",
                                      text:"管理员列表"
                                  },
                                  {
                                      link:"/moving",
                                      text:"角色管理"
                                  },
                                  {
                                      link:"/moving",
                                      text:"管理员日志"
                                  }
                              ]
                          },
                          {
                              link:"/moving",
                              text:"授权证书"
                          },
                          {
                              link:"/moving",
                              text:"应用管理"
                          },
                      ]
                  },
                  {
                      title:"应用",
                      data:[
                          {
                              link:"/moving",
                              text:"仪表盘"
                          },
                          {
                              link:"/moving",
                              text:"访问首页"
                          },
                          {
                              link:"/moving",
                              text:"权限管理",
                              data:[
                                  {
                                      link:"/moving",
                                      text:"管理员列表"
                                  },
                                  {
                                      link:"/moving",
                                      text:"角色管理"
                                  },
                                  {
                                      link:"/moving",
                                      text:"管理员日志"
                                  }
                              ]
                          },
                          {
                              link:"/moving",
                              text:"授权证书"
                          },
                          {
                              link:"/moving",
                              text:"应用管理"
                          }
                      ]
                  },
                  {
                      title:"工具",
                      data:[
                          {
                              link:"/moving",
                              text:"仪表盘"
                          },
                          {
                              link:"/moving",
                              text:"访问首页"
                          },
                          {
                              link:"/moving",
                              text:"权限管理",
                              data:[
                                  {
                                      link:"/moving",
                                      text:"管理员列表"
                                  },
                                  {
                                      link:"/moving",
                                      text:"角色管理"
                                  },
                                  {
                                      link:"/moving",
                                      text:"管理员日志"
                                  }
                              ]
                          },
                          {
                              link:"/moving",
                              text:"授权证书"
                          },
                          {
                              link:"/moving",
                              text:"应用管理"
                          }
                      ]
                  },
                  {
                      title:"设置",
                      data:[
                          {
                              link:"/moving",
                              text:"仪表盘"
                          },
                          {
                              link:"/moving",
                              text:"访问首页"
                          },
                          {
                              link:"/moving",
                              text:"权限管理",
                              data:[
                                  {
                                      link:"/moving",
                                      text:"管理员列表"
                                  },
                                  {
                                      link:"/moving",
                                      text:"角色管理"
                                  },
                                  {
                                      link:"/moving",
                                      text:"管理员日志"
                                  }
                              ]
                          },
                          {
                              link:"/moving",
                              text:"授权证书"
                          },
                          {
                              link:"/moving",
                              text:"应用管理"
                          }
                      ]
                  },
                  {
                      title:"服务",
                      data:[
                          {
                              link:"/moving",
                              text:"仪表盘"
                          },
                          {
                              link:"/moving",
                              text:"访问首页"
                          },
                          {
                              link:"/moving",
                              text:"权限管理",
                              data:[
                                  {
                                      link:"/moving",
                                      text:"管理员列表"
                                  },
                                  {
                                      link:"/moving",
                                      text:"角色管理"
                                  },
                                  {
                                      link:"/moving",
                                      text:"管理员日志"
                                  }
                              ]
                          },
                          {
                              link:"/moving",
                              text:"授权证书"
                          },
                          {
                              link:"/moving",
                              text:"应用管理"
                          },
                          {
                              link:"/moving",
                              text:"访问首页"
                          }
                      ]
                  },
                  {
                      title:"外观",
                      data:[
                          {
                              link:"/moving",
                              text:"仪表盘"
                          },
                          {
                              link:"/moving",
                              text:"访问首页"
                          },
                          {
                              link:"/moving",
                              text:"权限管理",
                              data:[
                                  {
                                      link:"/moving",
                                      text:"管理员列表"
                                  },
                                  {
                                      link:"/moving",
                                      text:"角色管理"
                                  },
                                  {
                                      link:"/moving",
                                      text:"管理员日志"
                                  }
                              ]
                          },
                          {
                              link:"/moving",
                              text:"授权证书"
                          },
                          {
                              link:"/moving",
                              text:"应用管理"
                          }
                      ]
                  },
                  {
                      title:"快捷导航",
                      data:[
                          {
                              link:"/moving",
                              text:"仪表盘"
                          },
                          {
                              link:"/moving",
                              text:"访问首页"
                          },
                          {
                              link:"/moving",
                              text:"权限管理",
                              data:[
                                  {
                                      link:"/moving",
                                      text:"管理员列表"
                                  },
                                  {
                                      link:"/moving",
                                      text:"角色管理"
                                  },
                                  {
                                      link:"/moving",
                                      text:"管理员日志"
                                  }
                              ]
                          },
                          {
                              link:"/moving",
                              text:"授权证书"
                          },
                          {
                              link:"/moving",
                              text:"应用管理"
                          }
                      ]
                  }
              ],
              adminData:[
                  {
                      link:"/moving",
                      text:"个人设置"
                  },
                  {
                      link:"/moving",
                      text:"管理员留言"
                  },
                  {
                      link:"/moving",
                      text:"退出"
                  }
              ]
          }
        },
        methods:{
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 .header
    background:#545c64;
    overflow: hidden;
    color:#fff;
    line-height: 40px;
    width: 100%;
    max-height: 40px;
    .headerGutter
       min-height:40px;
    i
      font-size:13px !important;
 .headCenter
    text-align:center;
 .el-dropdown-link
    color:#fff;
</style>