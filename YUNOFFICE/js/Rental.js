/*
* @Author: Marte Chen
* @Date:   2017-11-25 15:42:09
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-26 23:28:59
*/
    //遍历房源



  var oJson = [{"a":"光谷大厦 大阳台 东南向 精装修","b":"5300元/月","c":"2017.11.24更新","d":"image/home_icon.png","e":"光谷大厦 | 3室2厅 | 120平方米 | 东南 | 精装","f":"image/pointer_icon.png","h":"A6栋 | 12层 | 洪山区","i":"购物","j":"地铁","k":"免押金","l":"学区","m":"中心","n":"image/pic_1.jpg"},
    {"a":"金融大厦 大阳台 西北向 精装修","b":"4200元/月","c":"2016.08.08更新","d":"image/home_icon.png","e":"金融大厦 | 2室2厅 | 100平方米 | 西北 | 精装","f":"image/pointer_icon.png","h":"B5栋 | 23层 | 宝安区","i":"学区","j":"地铁","k":"拎包住","l":"购物","m":"公园","n":"image/pci_1.png"},
    {"a":"京基一百 小阳台 南北向 简装修","b":"8300元/月","c":"2017.05.05更新","d":"image/home_icon.png","e":"京基大厦 | 3室3厅 | 150平方米 | 南北 | 精装","f":"image/pointer_icon.png","h":"A3栋 | 18层 | 福田区","i":"地铁","j":"购物","k":"免押金","l":"学区","m":"特区","n":"image/icp_1.png"},
    {"a":"创意大厦 无阳台 西南向 精装修","b":"2300元/月","c":"2016.10.24更新","d":"image/home_icon.png","e":"创意大厦 | 2室1厅 | 80平方米 | 西南 | 精装","f":"image/pointer_icon.png","h":"C5栋 | 15层 | 东西区","i":"学区","j":"地铁","k":"免押金","l":"购物","m":"便民","n":"image/ipc_1.png"}];


setTimeout(function(){HousePage(oJson)},1000);

     function HousePage(oJson){

 for(var i = 0 ; i < 4;i++)
            {
                var divleftid = "divleft"+i;
                $("#dBody1center").append('<div class = "houseview">'+'</div>');
                $(".houseview").eq(i).append('<hr class = "hrtop">');
                $(".houseview").eq(i).append('<div class = "divbottom">'+'</div>');
                $(".divbottom").eq(i).append('<div class = "divleft">'+'</div>');
                $(".divleft").eq(i).attr('id',divleftid);
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

 $("#OldHouse").click(function(){
        setTimeout(function(){
            window.location.href="OldHouse.html";
        },1000);
    });

$("#rental").click(function(){
            window.location.href="Rental.html";
    });

$("#page2").css({"background-color":"#e9dddd!important","color":"#7a7676!important"});

$(".changepage").click(function(){

$(".changepage").css({"background-color":"#e9dddd","color":"#7a7676"});
$(this).css({"background-color":"orange","color":"white"});
$("#dBody1center").html("");
setTimeout(function(){HousePage(oJson)},500);
}
    );

setTimeout(function(){

PicMove($(".divleft").eq(0),4,"image/pic_",".jpg",2000);
PicMove($(".divleft").eq(1),4,"image/pci_",".png",3000);
PicMove($(".divleft").eq(2),4,"image/icp_",".png",4000);
PicMove($(".divleft").eq(3),4,"image/ipc_",".png",5000);

},1001);





