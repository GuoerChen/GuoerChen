/*
* @Author: Marte Chen
* @Date:   2017-11-26 14:33:01
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-26 15:36:10
*/
//objt       要操作的对象
//pic_lenght 要播放的图片长度
//pic_name   图片路径名称 如 image/pic_i i 为变量不写
//pic_format 图片格式 如 .jpg
//secendsms  图片停留毫秒 如 3000 = 3s
function PicMove(objt,pic_lenght,pic_name,pic_format,secendsms){
    if(objt instanceof HTMLElement){
        alert(1);
    }
    else
    {
        objt = objt[0];
    };

    var startPic = 2 ;
    setTimeout(function(){
         chagephoto(objt);
    },2000);

function chagephoto(objts){
    var i = 100;
    var timer = setInterval(function(){
             var o = i/100;
             objts.style.opacity = o;
             i--;
    if(i<0)
     {
        clearInterval(timer);
        var  URL = pic_name+startPic+pic_format;
         objts.style.backgroundImage = "url("+URL+")";
         startPic = startPic + 1;
         if(startPic>pic_lenght)
            {
                startPic = 1;
            }
         var timer1 = setInterval(function(){
             var o = i/100;
             objts.style.opacity = o;
             i++;
        if(i>100){
            clearInterval(timer1);
            setTimeout(function(){chagephoto(objt)},secendsms);
         }
         },20);
     }
    },20)
}
}

