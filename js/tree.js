// JavaScript Document  
 var addvcd_data = [
     {
	"id":1,
	"text":"广西壮族自治区",
	"children":[{
		"id":11,
		"text":"Photos",
		"state":"closed",
		"children":[
          {
			"id":111,
			"text":"Friend"
		  },
          {
			"id":112,
			"text":"Wife"
		  },
          {
			"id":113,
			"text":"Company"
		  },
          {
                "id":114,
                "text":"13213"
          }]
	  }]
     },
     {
     "id":2,
     "text":"黑龙江水文局",
     "children":[{
         "id":12,
         "text":"Photos",
         "state":"closed",
         "children":[
             {
                 "id":121,
                 "text":"Friend"
             },
             {
                 "id":122,
                 "text":"Wife"
             },
             {
                 "id":123,
                 "text":"Company"
             },
             {
                 "id":124,
                 "text":"13213"
             }]
     }]
 }
 ];
    $(function(){
		 //文本框点击事件
		$("#jstree_demo_div").show(); 
         showTree(addvcd_data,'jstree_demo_div');
        $("#jstree_demo_div1").show();
        showTree(addvcd_data,'jstree_demo_div1')
});
		//鼠标离开tree作用域时，树隐藏
	$(document).bind("click",function(e){
		var target = $(e.target);
        });
	  //呈现树菜单
    function showTree(data,id){
        $("#"+id).bind("loaded.jstree",function(e,data){
            jQuery("#"+id).jstree("open_all");
        }).jstree({
            "core" : {
	  		     "multiple": true,
                 "data":data,
	  	  /*
	  	  动态生成树形菜单
	  	  */
            /*{
                "url":url,
                "dataType":"json",
                "cache":false
            },*/
            "attr":{
                "class":"jstree-checked"
             }
        },
             ui:{
                 theme_name : "classic" //设置皮肤样式
             },
             "types" : {
                  "default" : {
                     "valid_children" : ["default","file"]
                   },
                  "file" : {
                  "icon" : "",
                   "valid_children" : []
            }
             },
             "checkbox" : {
                  "keep_selected_style" : false,
                  "real_checkboxes" : false
             },
              "plugins" : [
                  "contextmenu", "dnd", "search",
                   "types", "wholerow","checkbox"
              ]
      }).on("changed.jstree", function(e, data) {
	   var hidObj = document.getElementById('hidBox');
	    var inboxObj = document.getElementById('InputBox');
             hidObj.value = "";
		     inboxObj.value="";
       if (data.selected.length) {
		  for(var i = 0;i < data.selected.length;i++){
		      var _CurrentObj = data.instance.get_node(data.selected[i]);
		           hidObj.value += _CurrentObj.id + ",";
				   inboxObj.value += _CurrentObj.text + ",";
           }
       }
    });
  }


