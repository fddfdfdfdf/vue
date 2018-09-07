<template>
    <el-col ref="leftContain" class="leftAslide" :span="2">
        <div class="leftAslideCt" ref="leftAslideCt">
            <el-row class="tac">
                <el-col ref="leftCont">
                    <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">

                        <el-submenu :key="index"  v-for="(item ,index) in leftData" :index="`${index}`">
                            <template slot="title">
                                <i class="el-icon-document"></i>
                                <span v-html="item.title"></span>
                            </template>
                            <el-menu-item-group  v-for="(items ,indexs) in item.data" :key="indexs">
                                <el-menu-item :index="`${index}-${indexs}`" >{{items}}</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <div class="leftScroll" ref="leftAllHeight" style="display: none;">
            <div ref="leftAslideScroll">

            </div>
        </div>
        <div class="overScroll">
        </div>
    </el-col>
</template>

<script>
    export default {
        name: "main-left",
        data(){
            return {
               leftData:[
                   {
                       title:"商品管理",
                       data:[
                           "商品列表",
                           "添加新商品",
                           "商品分类",
                           "用户评论",
                           "商品品牌",
                           "商品类型",
                           "商品回收站",
                           "图片批量处理",
                           "商品批量上传",
                           "商品批量导出",
                           "商品批量修改",
                           "生成商品代码",
                           "标签管理",
                           "虚拟商品列表",
                           "添加虚拟商品",
                           "更改加密串",
                           "商品自动上下架"
                     ]
                   },
                   {
                       title:"促销管理",
                       data:[
                           "红包类型",
                           "商品包装",
                           "祝福贺卡",
                           "团购活动",
                           "专题管理",
                           "拍卖活动",
                           "优惠活动",
                           "批发管理",
                           "超值礼包",
                           "积分商城商品"
                       ]
                   },
                   {
                       title:"订单管理",
                       data:[
                           "订单列表",
                           "订单查询",
                           "合并订单",
                           "订单打印",
                           "缺货登记",
                           "添加订单",
                           "发货单列表",
                           "退货单列表"
                       ]
                   },
                   {
                       title:"广告管理",
                       data:[
                           "广告列表",
                           "广告位置"
                       ]
                   },
                   {
                       title:"报表统计",
                       data:[
                           "流量分析",
                           "客户统计",
                           "订单统计",
                           "销售概况",
                           "会员排行",
                           "销售明细",
                           "搜索引擎",
                           "销售排行",
                           "访问购买率",
                           "站外投放JS"
                       ]
                   }
               ]
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        mounted(){
             let _this = this;
             let leftContain =  this.$refs.leftAslideCt;
             let leftAslideScroll =  this.$refs.leftAslideScroll;


            function ScollPostion(dom) {
                return dom.scrollTop;
            }
            function addEvent(element,e,fn) {
                //firefox使用addEventListener，来添加事件
                if(element.addEventListener) {
                    element.addEventListener(e,fn,false);
                }
                //ie使用attachEvent，来添加事件
                else {
                    element.attachEvent("on"+e,fn);
                }
            }
            addEvent(leftContain,'mouseover',function fun(){

                let leftHeight =  _this.$refs.leftCont.$el.offsetHeight;
                let leftAslideCt =  _this.$refs.leftAslideCt.offsetHeight;
                let leftAllHeight =  _this.$refs.leftAllHeight.offsetHeight;
                if(leftHeight < leftAslideCt)return false;
                _this.$refs.leftAllHeight.style.display =  "block"
                let dist = leftHeight - leftAslideCt;
                leftAslideScroll.style.height = Math.abs(leftAslideCt -  dist)+"px"
            })
            addEvent(leftContain,'mouseout',function fun(){
                _this.$refs.leftAllHeight.style.display =  "none"
            })
            addEvent(leftContain,'scroll',function fun(){
                leftAslideScroll.style.marginTop =  ScollPostion(leftContain)+"px"
            })
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.leftAslideCt
    .el-menu-item-group__title
        display:none;
    .el-menu-item
         padding-right:0 !important;
         height:initial !important;
         line-height:initial !important;
.overScroll
    position: absolute;
    right: 0;
    top: 0;
    width: 13%;
    height: 100%;
    background: #545c64;
.leftAslideCt
    overflow-y: scroll;
    height: 100%;
    width: 100%;
.leftScroll
    position:absolute;
    left: 4px;
    top:0;
    width: 8px;
    height: 100%;
    &>div
       width: 8px;
       height: 30px;
       border-radius: 4px;
       background: #c2c2c2;
</style>