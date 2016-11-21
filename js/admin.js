$(function(){
var nWindowWidth = document.body.clientWidth;
      var subWidth = (nWindowWidth - 86);
      $(".main_right").css('width',subWidth - 9 +'px');
	  //点击菜单切换图片效果start
	  $(".list_wwwzzjsnet > li").each(function () {
                                $(this).bind("click", function () {
									var _CurrentClss = $(this).attr("class");
									_CurrentClss = _CurrentClss.substr(0,_CurrentClss.indexOf('_'));
									$(this).children("a").css("background-Image","url(image/rygl/"+_CurrentClss+"_1.png)");
									$(this).children('.main_right').css('display','block')
									$(".list_wwwzzjsnet > li").not(this).each(function () {
										var _CurrentClss=$(this).attr("class");
									_CurrentClss=_CurrentClss.substr(0,_CurrentClss.indexOf('_'));
										$(this).children("a").css("background-Image","url(image/rygl/"+_CurrentClss+".png)");
										$(this).children('.main_right').css('display','none')
									});
                                });
                            });
	//菜单切换效果end  
})
//当页面改变的时候 设置主体右侧部分的宽度
$(window).resize(function(){
      var nWindowWidth = document.body.clientWidth;
      var subWidth = (nWindowWidth - 86);
      $(".main_right").css('width',subWidth - 9 + 'px');
});

var status = 1;

var Menus = new DvMenuCls;

document.onclick = Menus.Clear;

function switchSysBar(){
	var switchPoint = document.getElementById("switchPoint");
	var frmTitle = document.getElementById("frmTitle");
     if (1 == window.status){
		 var nWindowWidth = document.body.clientWidth;
         $(".main_right").css('width',nWindowWidth - 9 + 'px');
		  window.status = 0;;
		 //alert(switchPoint);
         
          switchPoint.style.backgroundImage = 'url(images/left.png)';
          frmTitle.style.display = "none";
     }
     else{
		 var nWindowWidth = document.body.clientWidth;
         var subWidth = (nWindowWidth - 86);
         $(".main_right").css('width',subWidth - 9 + 'px');
		  window.status = 1;
          switchPoint.style.backgroundImage = 'url(images/right.png)'; 
          frmTitle.style.display = "";
     }
}

function DvMenuCls(){
	var MenuHides = new Array();
	this.Show = function(obj,depth){
		var childNode = this.GetChildNode(obj);
		if (!childNode){return ;}
		if (typeof(MenuHides[depth]) == "object"){
			this.closediv(MenuHides[depth]);
			MenuHides[depth] = '';
		};
		if (depth > 0){
			if (childNode.parentNode.offsetWidth > 0){
				childNode.style.left = childNode.parentNode.offsetWidth + 'px';
			}else{
				childNode.style.left = '100px';
			};
			childNode.style.top = '-2px';
		};
		childNode.style.display = 'none';
		MenuHides[depth] = childNode;
	};
	this.closediv = function(obj){
		if (typeof(obj) == "object"){
			if (obj.style.display != 'none'){
			obj.style.display = 'none';
			}
		}
	}
	this.Hide = function(depth){
		var i = 0;
		if (depth > 0){
			i = depth
		};
		while(MenuHides[i] != null && MenuHides[i] != ''){
			this.closediv(MenuHides[i]);
			MenuHides[i] = '';
			i++;
		};
	};
	this.Clear = function(){
		for(var i = 0;i < MenuHides.length;i++){
			if (MenuHides[i] != null && MenuHides[i] != ''){
				MenuHides[i].style.display = 'none';
				MenuHides[i] = '';
			}
		}
	}

	this.GetChildNode = function(submenu){ //获取指定元素下的div元素
		for(var i = 0;i < submenu.childNodes.length;i++){
			if(submenu.childNodes[i].nodeName.toLowerCase() == "div"){
				var obj = submenu.childNodes[i];
				break;
			}
		}
		return obj;
	}
}

function getleftbar(obj){
	var leftobj;
	var titleobj = obj.getElementsByTagName("a");
	leftobj = document.all ? frames["frmleft"] : document.getElementById("frmleft").contentWindow;
	if (!leftobj){return;}
	var menubar = leftobj.document.getElementById("menubar")
	if (menubar){
			if (titleobj[0]){
				document.getElementById("leftmenu_title").innerHTML = titleobj[0].innerHTML;
			}
			var a = obj.getElementsByTagName("ul");
			for(var i = 0;i < a.length;i++){
				menubar.innerHTML = a[i].innerHTML;
				//alert(a[i].innerHTML);
			}
	}
}
