(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f565d924"],{1451:function(t,e,a){"use strict";a("7306")},"5d36":function(t,e,a){},7306:function(t,e,a){},"803b":function(t,e,a){"use strict";a("5d36")},8338:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{margin:"5px 0"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.searchForm,size:"small"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{attrs:{label:""}},[a("el-input",{attrs:{placeholder:"名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getData(e)}},model:{value:t.searchForm.name,callback:function(e){t.$set(t.searchForm,"name",e)},expression:"searchForm.name"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.getData}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.newRow}},[t._v("新增")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},on:{click:t.getData}},[t._v("刷新")])],1)],1)],1),t._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],key:"jobor_task",attrs:{border:"",data:t.data_list,size:"small"}},[a("el-table-column",{attrs:{label:"ID",prop:"id",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{label:"名称",prop:"name",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.name))]),t._v(" "),a("el-tooltip",{staticClass:"item",staticStyle:{"margin-left":"3px"},attrs:{effect:"dark",placement:"top-start"}},[a("div",{attrs:{slot:"content"},domProps:{innerHTML:t._s("<pre style='margin: 1px'>描述:\n"+e.row.description+"</pre>")},slot:"content"}),t._v(" "),e.row.description?a("i",{staticClass:"el-icon-info"}):t._e()])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"类型",prop:"lang",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{label:"表达式",prop:"expr",width:""}}),t._v(" "),a("el-table-column",{attrs:{label:"routingKey",prop:"routing_key"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态",prop:"",width:"70",align:""},scopedSlots:t._u([{key:"default",fn:function(e){return["running"===e.row.status?a("el-popconfirm",{attrs:{"icon-color":"red",icon:"el-icon-info",title:"确认停止任务吗？"},on:{onConfirm:function(a){return t.changeStatus(e.row)}}},[a("el-switch",{attrs:{slot:"reference"},slot:"reference",model:{value:"running"===e.row.status,callback:function(a){t.$set(e.row,"status==='running'",a)},expression:"scope.row.status==='running'"}})],1):a("el-popconfirm",{attrs:{icon:"el-icon-info",title:"确认开始运行任务吗？"},on:{onConfirm:function(a){return t.changeStatus(e.row)}}},[a("el-switch",{attrs:{slot:"reference"},slot:"reference",model:{value:"running"===e.row.status,callback:function(a){t.$set(e.row,"status==='running'",a)},expression:"scope.row.status==='running'"}})],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"上次执行时间",prop:"prev",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popconfirm",{attrs:{icon:"el-icon-info",title:"确认开始手动执行任务吗？"},on:{onConfirm:function(a){return t.runTask(e.row)}}},[a("green_button",{attrs:{slot:"reference",title:"运行"},slot:"reference"})],1),t._v(" "),a("edit_button",{staticStyle:{"margin-left":"10px"},on:{click:function(a){return t.showEdit(e.row)}}}),t._v(" "),a("delete_button",{on:{click:function(a){return t.confirmDelRows(e.row,e.row.name,!0)}}})]}}])})],1),t._v(" "),a("div",{staticStyle:{"margin-top":"5px"}},[a("div",{staticStyle:{display:"inline"}}),t._v(" "),a("div",{staticClass:"block",staticStyle:{float:"right",display:"inline"}},[a("pagination",{attrs:{total:t.total,page:t.page,limit:t.limit},on:{"update:page":function(e){t.page=e},"update:limit":function(e){t.limit=e},pagination:function(e){return t.getData()}}})],1)])],1),t._v(" "),a("el-dialog",{attrs:{title:t.title,visible:t.newOrUpdate,"close-on-click-modal":!1,width:"80%"},on:{"update:visible":function(e){t.newOrUpdate=e}}},[a("el-form",{ref:"rowData",attrs:{"label-width":"120px",model:t.rowData,size:"small",rules:t.taskRules}},[a("el-form-item",{attrs:{label:"名称",prop:"name",rules:[{required:!0,message:"请输入名称",trigger:"blur"}]}},[a("el-input",{attrs:{"aria-valuemax":"60"},model:{value:t.rowData.name,callback:function(e){t.$set(t.rowData,"name",e)},expression:"rowData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入描述内容"},model:{value:t.rowData.description,callback:function(e){t.$set(t.rowData,"description",e)},expression:"rowData.description"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"表达式",prop:"expr"}},[a("el-input",{model:{value:t.rowData.expr,callback:function(e){t.$set(t.rowData,"expr",e)},expression:"rowData.expr"}}),t._v(" "),a("span",{staticStyle:{"font-size":"smaller",color:"#c3c4c9"}},[t._v("注：秒、分、时、天、月、周")])],1),t._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"lang",rules:[{required:!0,message:"请输入代号",trigger:"blur"}]}},[a("el-select",{on:{change:t.changeLang},model:{value:t.rowData.lang,callback:function(e){t.$set(t.rowData,"lang",e)},expression:"rowData.lang"}},[a("el-option",{attrs:{value:"shell",label:"Shell"}}),t._v(" "),a("el-option",{attrs:{value:"api",label:"Api"}}),t._v(" "),a("el-option",{attrs:{value:"python3",label:"Python3"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"执行内容",prop:"data",rules:[{required:!1,message:"请输入执行内容",trigger:"blur"}]}},["api"===t.rowData.lang?a("div",[a("ul",[a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{size:"mini",data:[{}],"empty-text":"please press add new"}},[a("el-table-column",{attrs:{label:"Method","min-width":"30px;"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-select",{attrs:{disabled:!1,size:"mini",placeholder:"请选择"},model:{value:t.rowData.data.api.method,callback:function(e){t.$set(t.rowData.data.api,"method",e)},expression:"rowData.data.api.method"}},t._l(t.methodOption,(function(t){return a("el-option",{key:t.label,attrs:{label:t.label,value:t.value}})})),1)]}}],null,!1,4062923349)}),t._v(" "),a("el-table-column",{attrs:{label:"URL","min-width":"100px;"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!1,size:"mini"},model:{value:t.rowData.data.api.url,callback:function(e){t.$set(t.rowData.data.api,"url",e)},expression:"rowData.data.api.url"}})]}}],null,!1,3878513001)})],1)],1),t._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{size:"mini",data:t.rowData.data.api.header,"empty-text":" "}},[a("el-table-column",{attrs:{prop:"name",label:"Header头列表","min-width":"100px;"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!1,size:"mini"},model:{value:t.rowData.data.api.header[e.$index].key,callback:function(a){t.$set(t.rowData.data.api.header[e.$index],"key",a)},expression:"rowData.data.api.header[scope.$index].key"}})]}}],null,!1,2082958460)}),t._v(" "),a("el-table-column",{attrs:{prop:"age","min-width":"100px;"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!1,size:"mini"},model:{value:t.rowData.data.api.header[e.$index].value,callback:function(a){t.$set(t.rowData.data.api.header[e.$index],"value",a)},expression:"rowData.data.api.header[scope.$index].value"}})]}}],null,!1,173246144)}),t._v(" "),a("el-table-column",{attrs:{width:"70px;"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{disabled:!1,size:"mini",icon:"el-icon-delete",type:"danger",circle:""},on:{click:function(a){return t.rowData.data.api.header.splice(e.$index,1)}}})]}}],null,!1,2866644252)})],1),t._v(" "),a("div",{staticStyle:{"margin-left":"11px"}},[a("el-button",{attrs:{disabled:!1,type:"text",size:"mini"},on:{click:function(e){return t.rowData.data.api.header.push({})}}},[t._v("添加")])],1)],1),t._v(" "),!1===["GET","HEAD"].includes(t.rowData.data.api.method)?a("div",[a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{size:"mini",data:[{}],"empty-text":" "}},[a("el-table-column",{attrs:{prop:"name",label:"Content Type","min-width":"100px;"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-select",{staticStyle:{width:"100%"},attrs:{disabled:!1,size:"mini",filterable:""},model:{value:t.rowData.data.api.content_type,callback:function(e){t.$set(t.rowData.data.api,"content_type",e)},expression:"rowData.data.api.content_type"}},t._l(t.contentTypeOption,(function(t){return a("el-option",{key:t.label,attrs:{label:t.label,value:t.value}})})),1)]}}],null,!1,1440398723)})],1)],1),t._v(" "),"application/x-www-form-urlencoded"===t.rowData.data.api.content_type?a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{size:"mini",data:t.rowData.data.api.forms,"empty-text":" "}},[a("el-table-column",{attrs:{prop:"name",label:"Form List","min-width":"100px;"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!1,size:"mini"},model:{value:t.rowData.data.api.forms[e.$index].key,callback:function(a){t.$set(t.rowData.data.api.forms[e.$index],"key",a)},expression:"rowData.data.api.forms[scope.$index].key"}})]}}],null,!1,1267081766)}),t._v(" "),a("el-table-column",{attrs:{prop:"age","min-width":"100px;"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!1,size:"mini"},model:{value:t.rowData.data.api.forms[e.$index].value,callback:function(a){t.$set(t.rowData.data.api.forms[e.$index],"value",a)},expression:"rowData.data.api.forms[scope.$index].value"}})]}}],null,!1,3136122522)}),t._v(" "),a("el-table-column",{attrs:{width:"70px;"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{disabled:!1,size:"mini",icon:"el-icon-delete",type:"danger",circle:""},on:{click:function(a){return t.rowData.data.api.forms.splice(e.$index,1)}}})]}}],null,!1,2521517510)})],1),t._v(" "),a("div",{staticStyle:{"margin-left":"11px"}},[a("el-button",{attrs:{disabled:!1,type:"text",size:"mini"},on:{click:function(e){return t.rowData.data.api.forms.push({})}}},[t._v("添加")])],1)],1):t._e(),t._v(" "),"application/json"===t.rowData.data.api.content_type?a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{size:"mini",data:[{}],"empty-text":" "}},[a("el-table-column",{attrs:{prop:"name",label:"Raw Requesy Body","min-width":"100px;"}},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("editor",{attrs:{theme:"solarized_dark",lang:"json",height:"300",options:{wrap:"free",indentedSoftWrap:!1}},on:{init:t.rowReqBodyInitEditor},model:{value:t.rowData.data.api.payload,callback:function(e){t.$set(t.rowData.data.api,"payload",e)},expression:"rowData.data.api.payload"}})],1)],1)],1)],1):t._e()]):t._e()])]):a("div",{staticStyle:{"margin-top":"5px"}},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("editor",{attrs:{theme:"solarized_dark",lang:t.lang[t.rowData.lang],height:"300",options:{wrap:"free",indentedSoftWrap:!1,enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!1}},on:{init:t.codeInitEditor},model:{value:t.rowData.data.data,callback:function(e){t.$set(t.rowData.data,"data",e)},expression:"rowData.data.data"}})],1),t._v(" "),a("br")],1)]),t._v(" "),a("el-form-item",{attrs:{label:"告警策略",prop:"alarm_policy",rules:[{required:!0,message:"请输入",trigger:"blur"}]}},[a("el-select",{model:{value:t.rowData.alarm_policy,callback:function(e){t.$set(t.rowData,"alarm_policy",e)},expression:"rowData.alarm_policy"}},t._l(t.alarmMap,(function(e,n,o){return a("el-option",{key:o,attrs:{value:e,label:t.alarmMapZH[e]}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"超时时间",prop:"timeout",rules:[{required:!0,message:"请输入",trigger:"blur"}]}},[a("el-input-number",{staticStyle:{width:"auto"},attrs:{"controls-position":"right",min:-1,max:86400},model:{value:t.rowData.timeout,callback:function(e){t.$set(t.rowData,"timeout",e)},expression:"rowData.timeout"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"期望返回码",prop:"expect_code",rules:[{required:!0,message:"请输入期望返回码",trigger:"blur"}]}},[a("el-input-number",{staticStyle:{width:"auto"},attrs:{"controls-position":"right"},model:{value:t.rowData.expect_code,callback:function(e){t.$set(t.rowData,"expect_code",e)},expression:"rowData.expect_code"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"期望返回内容"}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入期望返回内容"},model:{value:t.rowData.expect_context,callback:function(e){t.$set(t.rowData,"expect_context",e)},expression:"rowData.expect_context"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"告警通知",prop:"notify"}},[a("notify",{attrs:{notify:t.rowData.notify},on:{"update:notify":function(e){return t.$set(t.rowData,"notify",e)}}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.newOrUpdate=!1}}},[t._v("取 消")]),t._v(" "),t.rowData.id?a("el-button",{attrs:{plain:!0,type:"warning",loading:t.action_loading},on:{click:function(e){return t.createOrUpdate("PUT",!1,t.rowData.id)}}},[t._v("更新")]):t._e(),t._v(" "),t.rowData.id?t._e():a("el-button",{attrs:{plain:!0,type:"warning",loading:t.action_loading},on:{click:function(e){return t.createOrUpdate("POST",!0)}}},[t._v("保存并继续")]),t._v(" "),t.rowData.id?t._e():a("el-button",{attrs:{plain:!0,type:"primary",loading:t.action_loading},on:{click:function(e){return t.createOrUpdate("POST",!1)}}},[t._v("保 存")])],1)],1)],1)},o=[],i=(a("96cf"),a("3b8d")),l=(a("c5f6"),a("7f7f"),a("26e4")),r=a("5d46"),s=a("1db2"),c=a("d329"),d=a("aa11"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticStyle:{"list-style-type":"none"}},[a("li",[a("el-checkbox",{model:{value:t.Notify.webhook["enable"],callback:function(e){t.$set(t.Notify.webhook,"enable",e)},expression:"Notify.webhook['enable']"}},[t._v("Webhook")]),t._v(" "),a("el-button",{staticClass:"add-btn",attrs:{size:"mini",type:"text"},on:{click:function(e){return t.Notify.webhook.urls.push("")}}},[t._v("添加")]),t._v(" "),t._l(t.Notify.webhook.urls,(function(e,n){return a("div",{key:n,staticStyle:{margin:"3px 0"}},[a("el-input",{staticStyle:{"max-width":"360px"},attrs:{"aria-valuemax":"512",placeholder:"请输入api地址"},model:{value:t.Notify.webhook.urls[n],callback:function(e){t.$set(t.Notify.webhook.urls,n,e)},expression:"Notify.webhook.urls[index]"}},[a("template",{slot:"prepend"},[t._v("api地址")])],2),t._v(" "),a("el-button",{staticClass:"add-btn",attrs:{disabled:!1,size:"mini",icon:"el-icon-delete",type:"danger",circle:""},on:{click:function(e){return t.Notify.webhook.urls.splice(n,1)}}})],1)}))],2),t._v(" "),a("li",[a("el-checkbox",{model:{value:t.Notify.email.enable,callback:function(e){t.$set(t.Notify.email,"enable",e)},expression:"Notify.email.enable"}},[t._v("邮件")]),t._v(" "),a("el-button",{staticClass:"add-btn",attrs:{size:"mini",type:"text"},on:{click:function(e){return t.Notify.email.receivers.push("")}}},[t._v("添加")]),t._v(" "),t._l(t.Notify.email.receivers,(function(e,n){return a("div",{key:n,staticStyle:{margin:"3px 0"}},[a("el-input",{staticStyle:{"max-width":"360px"},attrs:{"aria-valuemax":"256",placeholder:"请输入邮箱地址"},model:{value:t.Notify.email.receivers[n],callback:function(e){t.$set(t.Notify.email.receivers,n,e)},expression:"Notify.email.receivers[index]"}},[a("template",{slot:"prepend"},[t._v("邮箱地址")])],2),t._v(" "),a("el-button",{staticClass:"add-btn",attrs:{disabled:!1,size:"mini",icon:"el-icon-delete",type:"danger",circle:""},on:{click:function(e){return t.Notify.webhook.receivers.splice(n,1)}}})],1)}))],2),t._v(" "),a("li",[a("el-checkbox",{model:{value:t.Notify.lark.enable,callback:function(e){t.$set(t.Notify.lark,"enable",e)},expression:"Notify.lark.enable"}},[t._v("飞书")]),t._v(" "),a("el-button",{staticClass:"add-btn",attrs:{size:"mini",type:"text"},on:{click:function(e){return t.Notify.lark.webhooks.push({})}}},[t._v("添加")]),t._v(" "),t._l(t.Notify.lark.webhooks,(function(e,n){return a("div",{key:n,staticStyle:{margin:"3px 0"}},[a("el-input",{staticStyle:{"max-width":"360px"},attrs:{"aria-valuemax":"256",placeholder:"请输入飞书webhook url"},model:{value:e.webhook_url,callback:function(a){t.$set(e,"webhook_url",a)},expression:"item.webhook_url"}},[a("template",{slot:"prepend"},[t._v("webhook url")])],2),t._v(" "),a("el-input",{staticStyle:{"max-width":"240px","margin-left":"3px"},attrs:{"aria-valuemax":"256",type:"password",placeholder:"请输入飞书webhook Secret"},model:{value:e.secret,callback:function(a){t.$set(e,"secret",a)},expression:"item.secret"}},[a("template",{slot:"prepend"},[t._v("Secret")])],2),t._v(" "),a("el-button",{staticClass:"add-btn",attrs:{disabled:!1,size:"mini",icon:"el-icon-delete",type:"danger",circle:""},on:{click:function(e){return t.Notify.lark.webhooks.splice(n,1)}}})],1)}))],2),t._v(" "),a("li",[a("el-checkbox",{model:{value:t.Notify.dingding.enable,callback:function(e){t.$set(t.Notify.dingding,"enable",e)},expression:"Notify.dingding.enable"}},[t._v("钉钉")]),t._v(" "),a("el-button",{staticClass:"add-btn",attrs:{size:"mini",type:"text"},on:{click:function(e){return t.Notify.dingding.webhooks.push({})}}},[t._v("添加")]),t._v(" "),t._l(t.Notify.dingding.webhooks,(function(e,n){return a("div",{key:n,staticStyle:{margin:"3px 0"}},[a("el-input",{staticStyle:{"max-width":"360px"},attrs:{"aria-valuemax":"256",placeholder:"请输入钉钉webhook url"},model:{value:e.webhook_url,callback:function(a){t.$set(e,"webhook_url",a)},expression:"item.webhook_url"}},[a("template",{slot:"prepend"},[t._v("webhook url")])],2),t._v(" "),a("el-input",{staticStyle:{"max-width":"240px","margin-left":"3px"},attrs:{"aria-valuemax":"256",type:"password",placeholder:"请输入钉钉webhook Secret"},model:{value:e.secret,callback:function(a){t.$set(e,"secret",a)},expression:"item.secret"}},[a("template",{slot:"prepend"},[t._v("Secret")])],2),t._v(" "),a("el-button",{staticClass:"add-btn",attrs:{disabled:!1,size:"mini",icon:"el-icon-delete",type:"danger",circle:""},on:{click:function(e){return t.Notify.dingding.webhooks.splice(n,1)}}})],1)}))],2)])},p=[],m={name:"notify",props:{notify:{email:{enable:!1,receivers:[]},webhook:{enable:!1,urls:[]},lark:{enable:!1,webhooks:[]},dingding:{enable:!1,webhooks:[]}}},watch:{notify:function(){this.Notify=this.notify},Notify:function(){this.$emit("update:notify",this.Notify)}},data:function(){return{Notify:this.notify}},components:{delete_button:r["a"],edit_button:s["a"],green_button:c["a"]}},f=m,b=(a("1451"),a("2877")),w=Object(b["a"])(f,u,p,!1,null,"50239029",null),h=w.exports,v=a("fe8c"),y=a("cf45"),_=a("01a8"),g={name:"jobor_task",mixins:[v["a"]],data:function(){var t=function(t,e,a){Object(_["isValidCron"])(e,{seconds:!0})?a():a(new Error("cron表达式不正确, 例：* * * * * *"))},e=function(t,e,a){if(e.webhook&&e.webhook.urls)for(var n=0;n<e.webhook.urls.length;n++)Object(y["d"])(e.webhook.urls[n])||a(new Error("webhook url格式不正确, 例：http://api.xx.com/ping"));if(e.email&&e.email.receivers)for(var o=0;o<e.email.receivers.length;o++)Object(y["a"])(e.email.receivers[o])||a(new Error("邮箱格式不正确, 例：zhangsan@email.com"));if(e.lark&&e.lark.webhooks)for(var i=0;i<e.lark.webhooks.length;i++)Object(y["d"])(e.lark.webhooks[i].webhook_url)||a(new Error("飞书 webhook url格式不正确, 例：http://lark.xx.com/ping"));if(e.lark&&e.dingding.webhooks)for(var l=0;l<e.dingding.webhooks.length;l++)Object(y["d"])(e.dingding.webhooks[l].webhook_url)||a(new Error("钉钉 webhook url格式不正确, 例：http://dingding.xx.com/ping"));a()};return{taskRules:{expr:[{required:!0,trigger:"blur",validator:t}],notify:[{required:!1,trigger:"blur",validator:e}]},notify:{email:{enable:!1,receivers:[]},webhook:{enable:!1,urls:[]},lark:{enable:!1,webhooks:[]},dingding:{enable:!1,webhooks:[]}},rowData:{name:"",lang:"shell",id:"",expr:"* * * * * *",timeout:-1,retry:0,expect_code:0,expect_context:"",alarm_policy:2,description:"",data:{data:"",api:{url:"",method:"GET",content_type:"",payload:"",header:[],forms:[]}},notify:{email:{enable:!1,receivers:[]},webhook:{enable:!1,urls:[]},lark:{enable:!1,webhooks:[]},dingding:{enable:!1,webhooks:[]}}},url:this.$store.state.urls.jobor_task_url,alarmMap:{never:0,always:1,failed:2,success:3},alarmMapZH:{0:"从不",1:"总是",2:"失败",3:"成功"},lang:{shell:"sh",python3:"python",golang:"golang",api:"sh"},apiRow:{url:"",method:"GET",content_type:"",payload:"",header:{},forms:[{}]},headerList:[{}],method:"",methodOption:[{value:"GET",label:"GET"},{value:"HEAD",label:"HEAD"},{value:"POST",label:"POST"},{value:"PUT",label:"PUT"},{value:"PATCH",label:"PATCH"},{value:"DELETE",label:"DELETE"}],content_type:"",contentTypeOption:[{value:"application/json",label:"application/json"},{value:"application/x-www-form-urlencoded",label:"application/x-www-form-urlencoded"}],langExample:{shell:'#!/usr/bin/env sh\nfunction main() {\n    echo "run shell"\n}\n\nmain\n        ',python3:"#!/usr/bin/env python3\ndef main():\n    print(\"run python3\")\n\nif __name__ == '__main__':\n    main()",python:"#!/usr/bin/env python\ndef main():\n    print(\"run python\")\n\nif __name__ == '__main__':\n    main()",golang:'package main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("run golang")\n}',nodejs:'#!/usr/bin/env node\nconsole.log("run nodejs")',windowsbat:"tasklist",api:""}}},methods:{showEdit:function(t){this.newOrUpdate=!0,this.title="编辑",this.rowData.id=t.id,this.rowData.name=t.name,this.rowData.data=t.data,this.rowData.notify=t.notify,this.rowData.lang=t.lang,this.rowData.timeout=Number(t.timeout),this.rowData.expr=t.expr,this.rowData.expect_code=t.expect_code,this.rowData.expect_context=t.expect_context,this.rowData.alarm_policy=t.alarm_policy,this.rowData.description=t.description,this.rowData.notify.email.receivers||(this.rowData.notify.email.receivers=[]),this.rowData.notify.webhook.urls||(this.rowData.notify.webhook.urls=[]),this.rowData.notify.lark.webhooks||(this.rowData.notify.lark.webhooks=[]),this.rowData.notify.dingding.webhooks||(this.rowData.notify.dingding.webhooks=[])},newRow:function(){this.newOrUpdate=!0,this.title="添加",this.rowData.id="",this.rowData.name="",this.rowData.lang="shell",this.rowData.timeout=-1,this.rowData.expr="* * * * * *",this.rowData.retry=0,this.rowData.expect_code=0,this.rowData.expect_context="",this.rowData.alarm_policy=2,this.rowData.description="",this.rowData.data={data:this.langExample[this.rowData.lang],api:{url:"",method:"GET",content_type:"",payload:"",header:[],forms:[]}},this.rowData.notify=JSON.parse(JSON.stringify(this.notify))},changeStatus:function(t){var e=this,a="stop";"running"!==t.status&&(a="running");var n=this.url+"/"+t.id+"/"+a;this.$store.dispatch("common/CreateUpdate",{url:n,method:"PUT",data:{}}).then((function(t){e.$message.success(t.data.message),e.getData()})).catch((function(t){e.getData()}))},changeLang:function(){this.rowData.data.data=this.langExample[this.rowData.lang]||""},codeInitEditor:function(t){t.setAutoScrollEditorIntoView(!0),t.setShowPrintMargin(!1),a("2099"),a("446e"),a("8882"),a("32ff"),a("4e93"),a("4c5b"),a("6c73")},realLogInitEditor:function(t){t.setAutoScrollEditorIntoView(!0),t.setShowPrintMargin(!1),t.on("change",(function(){t.renderer.scrollToLine(Number.POSITIVE_INFINITY)})),a("8a2a"),a("6c73")},rowReqBodyInitEditor:function(t){t.setAutoScrollEditorIntoView(!0),t.setShowPrintMargin(!1),a("818b"),a("6c73")},runTask:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a="".concat(this.url,"/").concat(e.id,"/run"),t.next=4,this.$store.dispatch("common/Request",{url:a,method:"POST",data:{}});case 4:return n=t.sent,this.$message({message:n.data.message,type:"success"}),t.next=8,this.getData();case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),this.$message({message:String(t.t0),type:"error"});case 13:return t.prev=13,t.finish(13);case 15:case"end":return t.stop()}}),t,this,[[0,10,13,15]])})));function e(e){return t.apply(this,arguments)}return e}()},mounted:function(){this.getData()},components:{pagination:l["a"],notify:h,delete_button:r["a"],edit_button:s["a"],user_select:d["a"],green_button:c["a"],editor:a("7c9e")}},k=g,x=(a("803b"),Object(b["a"])(k,n,o,!1,null,"6da1462d",null));e["default"]=x.exports}}]);