$(function(){
    //点击设置显示盒子
    $('#wrap').on('mouseenter',function(){
         $('#seting_box').fadeToggle(300)
    });
    $('#wrap').on('mouseleave',function(){
        $('#seting_box').fadeToggle(300)
    });
    //设置页面中点击显示二级菜单
    $('#dropdownMenu1').on('click',function(){
        $(this).parent().find('ul').slideToggle(300).end()
            .siblings('div').find('ul').slideUp(200);
    });
    $(document).on('click',function(){
        $('#dropdownMenu1').parent().find('ul').slideUp(300)
    });
    $('#dropdownMenu2').on('click',function(){
        $(this).parent().find('ul').slideToggle(300).end()
            .siblings('div').find('ul').slideUp(200);
    });
    $(document).on('click',function(){
        $('#dropdownMenu2').parent().find('ul').slideUp(300);
        $('#dropdownMenu1').parent().find('ul').slideUp(300)
    });
    tab('#base_info','#base_info_box','#look_info_box');
    tab('#look_info','#look_info_box','#base_info_box');
    tab('#work_detail','#work_detail_content','#maintain_detail_content');
    tab('#maintain_detail','#maintain_detail_content','#work_detail_content');
    showJstree();
});
//tab栏切换
function tab(id,showId,hideId){
    $(id).on('click',function(){
        $(this).css({'color':'#F49903','border-bottom':'5px solid #F49903','fontWeight': '700'}).siblings().css({
            'color':'#666','border-bottom':'3px solid #c6c7c8','fontWeight': '400'
        })
        $(showId).css('display','block').siblings(hideId).css('display','none')
    })
}

//点击显示jstree
function showJstree(){
    var showTree = $('.showjstree');
   for(var i = 0;i < showTree.length;i++){
       showTree[i].onclick = function(){
           $(this).parent().siblings('tr').toggle()
           $(this).parent().siblings('.main_req_jstree_dis').hide()
       }
   }
}