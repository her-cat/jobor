(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25861bd2"],{"1db2":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-button",{staticStyle:{color:"#e6a23c"},attrs:{type:"text",size:t.size},on:{click:t.handleClick}},[t._v(t._s(t.title))])},i=[],l={name:"delete",props:{size:{default:"mini"},title:{default:"编辑"}},methods:{handleClick:function(t){this.$emit("click",t)}}},r=l,s=a("2877"),o=Object(s["a"])(r,n,i,!1,null,"493c67f8",null);e["a"]=o.exports},"26e4":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"100%"}},[a("el-pagination",{staticStyle:{margin:"5px 0"},attrs:{small:t.small,"page-size":t.pageSize,"current-page":t.currentPage,"pager-count":t.pagerCount,"page-sizes":t.pageSizes,layout:t.layout,total:t.total},on:{"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"size-change":t.handleSizeChange,"current-change":t.handleIndexChange}})],1)},i=[],l={name:"Pagination",props:{small:{default:function(){return!1}},pageSizes:{require:!0,default:function(){return[5,10,25,50,100,200]}},limit:{default:10},page:{default:function(){return 1}},pagerCount:{default:7},total:{default:0},layout:{type:String,default:"prev, pager, next, jumper,sizes,total"},background:{type:Boolean,default:!0}},data:function(){return{}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},created:function(){},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t})},handleIndexChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize})}}},r=l,s=a("2877"),o=Object(s["a"])(r,n,i,!1,null,"91b9180e",null);e["a"]=o.exports},"5bed":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{margin:"5px 0"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.searchForm,size:"small"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{attrs:{label:""}},[a("el-input",{attrs:{placeholder:"名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getData(e)}},model:{value:t.searchForm.name,callback:function(e){t.$set(t.searchForm,"name",e)},expression:"searchForm.name"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.getData}},[t._v("查询")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},on:{click:t.getData}},[t._v("刷新")])],1)],1)],1),t._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{border:"",data:t.data_list,size:"small"}},[a("el-table-column",{attrs:{label:"",type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("label",[t._v("执行内容:")]),t._v(" "),a("pre",{staticStyle:{"white-space":"pre-wrap","word-wrap":"break-word"}},[t._v(t._s(e.row.data.data))])]),t._v(" "),a("div",[a("label",[t._v("返回结果:")]),t._v(" "),a("pre",{staticStyle:{"white-space":"pre-wrap","word-wrap":"break-word"}},[t._v(t._s(e.row.resp))])]),t._v(" "),a("div",[a("label",[t._v("err_code:")]),t._v(" "),a("div",["success"!==e.row.result?a("span",[t._v(t._s(e.row.err_code))]):t._e()])]),t._v(" "),a("div",[a("label",[t._v("错误信息:")]),t._v(" "),a("pre",{staticStyle:{"white-space":"pre-wrap","word-wrap":"break-word"}},[t._v(t._s(e.row.err_msg))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"ID",prop:"id",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{label:"名称",prop:"name",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{label:"类型",prop:"lang",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{label:"触发方式",prop:"trigger_method",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return["auto"===e.row.trigger_method?a("span",[t._v("自动")]):"manual"===e.row.trigger_method?a("span",[t._v("手动")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"表达式",prop:"expr",width:""}}),t._v(" "),a("el-table-column",{attrs:{label:"耗时",prop:"cost_time",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.cost_time)+"s")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"结果",prop:"",width:"100",align:""},scopedSlots:t._u([{key:"default",fn:function(t){return["success"===t.row.result?a("div",{staticStyle:{"vertical-align":"middle",display:"flex","flex-direction":"row","align-items":"center"}},[a("Badge",{attrs:{status:"success",text:"成功"}})],1):"failed"===t.row.result?a("div",[a("Badge",{attrs:{status:"error",text:"失败"}})],1):a("div",[a("Badge",{attrs:{status:"default",text:t.row.result}})],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"更新时间",prop:"mtime",width:"140"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("detail_button",{attrs:{title:"详细"}})]}}])})],1),t._v(" "),a("div",{staticStyle:{"margin-top":"5px"}},[a("div",{staticStyle:{display:"inline"}}),t._v(" "),a("div",{staticClass:"block",staticStyle:{float:"right",display:"inline"}},[a("pagination",{attrs:{total:t.total,page:t.page,limit:t.limit},on:{"update:page":function(e){t.page=e},"update:limit":function(e){t.limit=e},pagination:function(e){return t.getData()}}})],1)])],1)])},i=[],l=(a("7f7f"),a("26e4")),r=a("5d46"),s=a("1db2"),o=a("d329"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-button",{attrs:{type:"text",size:t.size},on:{click:t.handleClick}},[t._v(t._s(t.title))])},u=[],d={name:"delete",props:{size:{default:"mini"},title:{default:"详细"}},methods:{handleClick:function(t){this.$emit("click",t)}}},p=d,m=a("2877"),f=Object(m["a"])(p,c,u,!1,null,"14939b4e",null),h=f.exports,g=a("aa11"),_=a("fe8c"),v={name:"jobor_task_log",mixins:[_["a"]],data:function(){return{url:this.$store.state.urls.jobor_log_url}},methods:{changeStatus:function(t,e){var a=this,n="<span style='color: #00c752'>运行</span>";"stop"===e&&(n="停止"),this.$confirm("确认任务名为["+t.name+"]执行"+n+"动作吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n=a.url+"/"+t.id+"/"+e;a.$store.dispatch("common/CreateUpdate",{url:n,method:"PUT",data:{}}).then((function(t){a.$message.success(t.data.message),a.getData()})).catch((function(t){}))})).catch((function(){a.$message({type:"info",message:"已取消"})}))}},mounted:function(){this.getData()},components:{pagination:l["a"],delete_button:r["a"],edit_button:s["a"],user_select:g["a"],green_button:o["a"],detail_button:h}},b=v,w=Object(m["a"])(b,n,i,!1,null,"79145794",null);e["default"]=w.exports},"5d46":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-button",{staticStyle:{color:"#f56c6c"},attrs:{type:"text",size:t.size},on:{click:t.handleClick}},[t._v(t._s(t.title))])},i=[],l={name:"delete",props:{size:{default:"mini"},title:{default:"删除"}},methods:{handleClick:function(t){this.$emit("click",t)}}},r=l,s=a("2877"),o=Object(s["a"])(r,n,i,!1,null,"11ee4167",null);e["a"]=o.exports},aa11:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("el-select",{attrs:{value:t.selectValue,filterable:"",placeholder:"请选择","collapse-tags":t.collapse_tags,clearable:t.clearable,multiple:!t.single_selection,"allow-create":t.allowCreate},on:{change:t.handleChange}},t._l(t.data_list,(function(t,e){return a("el-option",{key:e,attrs:{label:t.nickname+"<"+t.username+">",value:t.id}})})),1)],1)},i=[],l={name:"user_select",props:{single_selection:{default:!0},clearable:{default:!0},allowCreate:{default:!1},collapse_tags:{default:!0},use_code:{default:!1},selectValue:{required:!1}},data:function(){return{url:this.$store.state.urls.user_url,data_list:[],total:0}},watch:{},methods:{getData:function(){var t=this,e={};this.loading=!0,this.$store.dispatch("common/Query",{url:this.url+"s",data:e}).then((function(e){t.data_list=e.data.data.list,t.total=e.data.data.total})).catch((function(t){}))},handleChange:function(t){this.$emit("update:selectValue",t)}},mounted:function(){this.getData()}},r=l,s=a("2877"),o=Object(s["a"])(r,n,i,!1,null,"7948f68d",null);e["a"]=o.exports},d329:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-button",{staticStyle:{color:"#00c752"},attrs:{type:"text",size:t.size},on:{click:t.handleClick}},[t._v(t._s(t.title))])},i=[],l={name:"green",props:{size:{default:"mini"},title:{default:"title"}},methods:{handleClick:function(t){this.$emit("click",t)}}},r=l,s=a("2877"),o=Object(s["a"])(r,n,i,!1,null,"3a26370b",null);e["a"]=o.exports},fe8c:function(t,e,a){"use strict";a("96cf");var n,i,l=a("3b8d"),r={name:"common_mixin",props:{},data:function(){return{searchForm:{name:""},extraParam:{},search:"",data_list:[],total:0,page:1,limit:10,loading:!1,url:"",action_loading:!1,title:"新增",newOrUpdate:!1,rowData:{}}},computed:{},watch:{},methods:{clickTo:function(t){},getData:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={pageSize:this.limit,pageNumber:this.page},a=Object.assign(e,this.searchForm,this.extraParam),this.loading=!0,t.prev=3,t.next=6,this.$store.dispatch("common/Query",{url:this.url,data:a});case 6:n=t.sent,this.data_list=n.data.data.list,this.total=n.data.data.total,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](3),this.$message.error(t.t0);case 14:return t.prev=14,this.loading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[3,11,14,17]])})));function e(){return t.apply(this,arguments)}return e}(),createOrUpdate:function(t,e,a){var n=this;this.$refs.rowData.validate((function(i){if(i){var l=JSON.parse(JSON.stringify(n.rowData));"POST"===t&&delete l.id;var r=n.url;a&&(r=r+"/"+a),n.action_loading=!0,n.$store.dispatch("common/CreateUpdate",{url:r,method:t,data:l}).then((function(t){n.$message.success(t.data.message),!1===e&&(n.newOrUpdate=!1),n.getData(),n.action_loading=!1})).catch((function(t){n.action_loading=!1}))}else n.$message.warning("请输入完整数据")}))},showEdit:function(t){this.newOrUpdate=!0,this.title="编辑",this.rowData.id=t.id},newRow:function(){this.newOrUpdate=!0,this.title="添加",this.rowData.id=""},confirmDelRows:function(t,e,a){var n=this;this.$confirm("确认删除数据ID为["+t.id+"]："+e+" 吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n.action_loading=!0;var e=n.url;a&&(e=e+"/"+t.id),n.$store.dispatch("common/Delete",{url:e,data:{rows:[t.id]}}).then((function(t){n.$message.success(t.data.message),n.getData(),n.action_loading=!1})).catch((function(t){n.action_loading=!1}))})).catch((function(){n.$message({type:"info",message:"已取消删除"})}))}}},s=r,o=a("2877"),c=Object(o["a"])(s,n,i,!1,null,null,null);e["a"]=c.exports}}]);