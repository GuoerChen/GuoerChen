/*
* @Author: Marte Chen
* @Date:   2017-12-15 14:27:21
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-15 15:45:55
*/


var x = 0 ;
var y = 0 ;

$(window).load(
    function(){

            Timer = setInterval(function(){
            TDTrans()
        },7000);
    }

);



function TDTrans(){

        x = x + 90;
        RoTaY = 'rotateY('+x+'deg)';
        $('#fi .wrap').css('transition','transform 2s ease');
        $('#er .wrap').css('transition','transform 3s ease');
        $('#san .wrap').css('transition','transform 4s ease');
        $('#si .wrap').css('transition','transform 5s ease');
        $('#wu .wrap').css('transition','transform 6s ease');
        $('.wrap').css('transform',RoTaY);
        if(x==360){
            clearInterval(Timer);
            setTimeout(function(){

            RoTaX = 'rotateX('+90+'deg)';
            $('#fi .wrap').css('transition','transform 6s ease');
            $('#er .wrap').css('transition','transform 5s ease');
            $('#san .wrap').css('transition','transform 4s ease');
            $('#si .wrap').css('transition','transform 3s ease');
            $('#wu .wrap').css('transition','transform 2s ease');
            $('.wrap').css('transform',RoTaX);

            setTimeout(function(){
            RoTaX = 'rotateX('+270+'deg)';
            $('#fi .wrap').css('transition','transform 2s ease');
            $('#er .wrap').css('transition','transform 3s ease');
            $('#san .wrap').css('transition','transform 4s ease');
            $('#si .wrap').css('transition','transform 5s ease');
            $('#wu .wrap').css('transition','transform 6s ease');
            $('.wrap').css('transform',RoTaX);

            setTimeout(function(){
            RoTaX = 'rotateX('+360+'deg)';
            $('#fi .wrap').css('transition','transform 2s ease');
            $('#er .wrap').css('transition','transform 3s ease');
            $('#san .wrap').css('transition','transform 4s ease');
            $('#si .wrap').css('transition','transform 5s ease');
            $('#wu .wrap').css('transition','transform 6s ease');
            $('.wrap').css('transform',RoTaX);


            setTimeout(function(){
            if(y==2){
                y = 0;
            }
            else{
                y = y + 1;
            };

            //change photo
            Fimage = './image/front'+y+'.jpg';
            Bimage = './image/back'+y+'.jpg';
            Timage = './image/top'+y+'.jpg';
            Boimage = './image/bottom'+y+'.jpg';
            Limage = './image/left'+y+'.jpg';
            Rimage = './image/right'+y+'.jpg';

            $('.wrap div').css('transition','background-image 2s ease');

            $('.front').css('background-image','url('+Fimage+')');
            $('.back').css('background-image','url('+Bimage+')');
            $('.top').css('background-image','url('+Timage+')');
            $('.bottom').css('background-image','url('+Boimage+')');
            $('.left').css('background-image','url('+Limage+')');
            $('.right').css('background-image','url('+Rimage+')');


            //重新旋转
            RoTaX = 'rotateX('+0+'deg)';
            x = 0;
            RoTaY = 'rotateY('+0+'deg)';
            $('#fi .wrap').css('transition','transform 2s ease');
            $('#er .wrap').css('transition','transform 3s ease');
            $('#san .wrap').css('transition','transform 4s ease');
            $('#si .wrap').css('transition','transform 5s ease');
            $('#wu .wrap').css('transition','transform 6s ease');

            $('.wrap').css('transform',RoTaX);

            $('.wrap').css('transform',RoTaY);

            setTimeout(function(){
                    Timer = setInterval(
                function(){
                    TDTrans()
                },7000);
            },7000);

            },8000);

            },7000);

            },7000);

            },8000);

        }
}

var tdstatus = 99;
$('#content').click(
    function(){
        if(tdstatus==99)
        {
        $('#content').css('transform-style','preserve-3d');
        $('#content').css('transition','transform 2s ease');
        $('#content').css('transform','rotateX(15deg) rotateY(30deg)');
        $('#content').css('box-shadow','unset');
        tdstatus = 100;
        }
        else if(tdstatus==100){
        $('#content').css('transform-style','unset');
        $('#content').css('transition','transform 2s ease');
        $('#content').css('transform','rotateX(0) rotateY(0deg)');
        $('#content').css('box-shadow','3px 3px 3px black');
        tdstatus = 99;
        }

    }
    );
