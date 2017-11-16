/*
* @Author: chenzhen
* @Date:   2017-11-15 13:35:23
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-15 13:36:05
*/
//定义文字
var xLabel = "Copyright © 深圳奶爸科技有限公司 粤ICP备14091639号";
$("#ilabel").html(xLabel);

var xImage = "image/Erweima.jpg"
$("#img1").attr('src',xImage);
var xP1 = "家有所依 心有所依";
$("#ph1").html(xP1);
var xP2 = "该公司的存货主要包括原材料，库存商品，在产品，而存货的增加是源于原材料和库存商品的增加，其中库存商品增加与公司经营规模扩张有关";
$("#ph2").html(xP2);
//遍历房源
var oJson = [{"a":"image/pic_1.jpg","b":"375","c":"富豪山庄第一街","d":"3室2厅","e":"134.5"},
            {"a":"image/pic_2.jpg","b":"370","c":"花镜新城6期","d":"2室2厅","e":"130.5"},
            {"a":"image/pic_3.jpg","b":"238","c":"阳光小区","d":"3室2厅","e":"190.5"},
            {"a":"image/pic_4.jpg","b":"395","c":"武汉皇家植树","d":"3室1厅","e":"222.5"}];

 for(var i = 0 ; i < oJson.length;i++)
            {   $("#tp1").append('<a href="http://www.baidu.com" target="blank" class = "Toa">'+'</a>');
                $(".Toa").eq(i).append('<div class = "inDivs">'+'</div>');
                $(".inDivs").eq(i).append('<div class = "inDivs1">'+'</div>');
                $(".inDivs").eq(i).append('<div class = "inDivs2">'+'</div>');
                $(".inDivs1").eq(i).append('<div class = "divRadius">'+oJson[i]["b"]+"万"+'</div>')
                $(".inDivs1").eq(i).css("background-image","url("+oJson[i]["a"]+")");
                $(".inDivs2").eq(i).append('<p class = "pp1">'+oJson[i]["c"]+'</p>');
                $(".inDivs2").eq(i).append('<p class = "pp2">'+oJson[i]["d"]+' '+oJson[i]["e"]+"平米"+'</p>');
            }

$("#loginbtn").click(function(){
    alert("网页还没做！！！");
    })
$("li").eq(0).click(function(){
    window.location.href="YunOffice.html";
    })
$("li").not(0).click(function(){
    alert("网页还没做！！！");
    })


for (var i = 0;i<($("li").length);i++)
{
      (function(i){
        $("li").eq(i).mouseover(function(){
        $("li").css({"color":"white","border-bottom":"none"});
        $("li").eq(i).css({"color":"#16baf0","border-bottom":"3px solid #16baf0","cursor":"pointer"});
        })
      })(i);//i为实参(把i传进去，使事件内部立即执行,闭包问题)

}
$("li").mouseout(function()
    {
    $("li").css({"color":"white","border-bottom":"none"});
    $("li").eq(0).css({"color":"white","border-bottom":"3px solid white"});

    });