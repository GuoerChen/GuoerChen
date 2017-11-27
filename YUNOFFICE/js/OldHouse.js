/*
* @Author: Marte chen
* @Date:   2017-11-25 15:39:47
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-27 16:38:51
*/
  //遍历房源

  var oJson2 = [
    {"a":"京基一百 小阳台 南北向 简装修","b":"1000万元","c":"60000/平方米","d":"image/home_icon.png","e":"京基大厦 | 3室3厅 | 150平方米 | 南北 | 精装","f":"image/pointer_icon.png","h":"A3栋 | 18层 | 福田区","i":"地铁","j":"购物","k":"免押金","l":"学区","m":"特区","n":"image/pic_3.jpg"},
    {"a":"金融大厦 大阳台 西北向 精装修","b":"180万元","c":"18000/平方米","d":"image/home_icon.png","e":"金融大厦 | 2室2厅 | 100平方米 | 西北 | 精装","f":"image/pointer_icon.png","h":"B5栋 | 23层 | 宝安区","i":"学区","j":"地铁","k":"拎包住","l":"购物","m":"公园","n":"image/pic_2.jpg"},
    {"a":"创意大厦 无阳台 西南向 精装修","b":"150万元","c":"20000/平方米","d":"image/home_icon.png","e":"创意大厦 | 2室1厅 | 80平方米 | 西南 | 精装","f":"image/pointer_icon.png","h":"C5栋 | 15层 | 东西区","i":"学区","j":"地铁","k":"免押金","l":"购物","m":"便民","n":"image/pic_4.jpg"},
    {"a":"光谷大厦 大阳台 东南向 精装修","b":"300万元","c":"25000/平方米","d":"image/home_icon.png","e":"光谷大厦 | 3室2厅 | 120平方米 | 东南 | 精装","f":"image/pointer_icon.png","h":"A6栋 | 12层 | 洪山区","i":"购物","j":"地铁","k":"免押金","l":"学区","m":"中心","n":"image/pic_1.jpg"}];


setTimeout(function(){HousePage(oJson2)},1000);

     function HousePage(oJson){

 for(var i = 0 ; i < 4;i++)
            {   $("#dBody1center").append('<div class = "houseview">'+'</div>');
                $(".houseview").eq(i).append('<hr class = "hrtop">');
                $(".houseview").eq(i).append('<div class = "divbottom">'+'</div>');
                $(".divbottom").eq(i).append('<div class = "divleft">'+'</div>');
                $(".divleft").eq(i).css("background-image","url("+oJson[i]['n']+")");
                $(".divleft").eq(i).click(function(){
                    setTimeout(function(){
                             window.location.href="RentalDetail.html";
                    },1000);
                });
                $(".divbottom").eq(i).append('<div class = "divright">'+'</div>');
                $(".divright").eq(i).append('<p class = "p1">'+oJson[i]["a"]+'</p>');
                $(".p1").eq(i).append('<span class = "p1s1">'+oJson[i]["b"]+'</span>');
                $(".divright").eq(i).append('<p class = "p2">'+oJson[i]["c"]+'</p>');
                $(".divright").eq(i).append('<p class = "p3">'+'</p>');
                $(".p3").eq(i).append('<img class = "homeicon" src = "'+oJson[i]['d']+'">');
                $(".p3").eq(i).append('<span class = "p3s3">'+oJson[i]["e"]+'</span>');
                $(".divright").eq(i).append('<p class = "p4">'+'</p>');
                $(".p4").eq(i).append('<img class = "homeicon" src = "'+oJson[i]['f']+'">');
                $(".p4").eq(i).append('<span class = "p3s3">'+oJson[i]["h"]+'</span>');
                $(".divright").eq(i).append('<p class = "p5">'+'</p>');
                $(".p5").eq(i).append('<span class = "p5s5">'+oJson[i]["i"]+'</span>');
                $(".p5").eq(i).append('<span class = "p5s5">'+oJson[i]["j"]+'</span>');
                $(".p5").eq(i).append('<span class = "p5s5">'+oJson[i]["k"]+'</span>');
                $(".p5").eq(i).append('<span class = "p5s5">'+oJson[i]["l"]+'</span>');
                $(".p5").eq(i).append('<span class = "p5s5">'+oJson[i]["m"]+'</span>');
            };
}


    var xLabel = "Copyright © 深圳奶爸科技有限公司 粤ICP备14091639号";
    $("#ilabel").html(xLabel);



 $("#mainpage").click(function(){

        setTimeout(function(){
            window.location.href="YunOffice.html";
        },1000);
    });
$("#rental").click(function(){

    setTimeout(function(){
             window.location.href="Rental.html";
        },1000);

    });

$("#OldHouse").click(function(){

             window.location.href="OldHouse.html";

    });

$("#page2").css({"background-color":"#e9dddd!important","color":"#7a7676!important"});

$(".changepage").click(function(){

$(".changepage").css({"background-color":"#e9dddd","color":"#7a7676"});
$(this).css({"background-color":"orange","color":"white"});
$("#dBody1center").html("");
setTimeout(function(){HousePage(oJson2)},500);
}
    );