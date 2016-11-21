/**
 * Created by Administrator on 2016/11/18.
 */
$(function(){
    hide()
   changeImage('#icon_event','image/rygl/left_arr-3.fw.png','image/rygl/down-3.png')
   changeImage('#main_req_fade','image/rygl/right_arr.png','image/rygl/down-3.png')
   changeImage('#handle_down','image/rygl/down-3.png','image/rygl/up_arr2.png')
})
function hide(){
    $('#main_req_fade').on('click',function(){
        $(this).parent().parent().parent().parent().parent().css('border','none')
        if($(this).parent().attr('class')){
            $(this).parent().parent().parent().parent().parent().css('border-left','1px solid #1cc2fa')
        }
    })
}
//µã»÷ÇÐ»»¼ýÍ·
function changeImage(domId,oldUrl,newUrl){
    $(domId).on('click',function(){
        var imgUrl = $(domId).attr('src');
        if(imgUrl === oldUrl){
            $(domId).attr('src',newUrl)
        } else{
            $(domId).attr('src',oldUrl)
        }
    })
}
