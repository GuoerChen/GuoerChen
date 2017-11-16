/*
* @Author: Marte Chen
* @Date:   2017-11-15 16:03:59
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-15 17:02:06
*/
var OHtmlWidth ="";
var OHtmlHeight ="";
var ODivHeight ="";
var OChildWidth ="";
if(/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)) {
   OHtmlWidth = document.documentElement.clientWidth;//获取屏幕分辨率宽
   OHtmlHeight = document.documentElement.clientHeight;//获取屏幕分辨率高
   ODivHeight = parseInt(OHtmlWidth/3);//获得高度
   OChildWidth = parseInt(OHtmlWidth/2);//获得父标签宽度
} else {
    OHtmlWidth = screen.width; //获取屏幕分辨率
    OHtmlHeight = screen.height;//获取屏幕分辨率高
    ODivHeight = parseInt(OHtmlWidth/3);//获得高度
    OChildWidth = parseInt(OHtmlWidth/2);//获得父标签宽度
}

    /*设置主要宽度*/
    $("#dHead").css("width",OHtmlWidth);
    $("#Dbar").css("width",OHtmlWidth);
    $("#Dsearch").css("width",OHtmlWidth);
    $("#dBody").css("width",OHtmlWidth);
    $("#inBody1").css("width",OHtmlWidth);
    $("#inBody2").css("width",OHtmlWidth);
    $("#dFoot").css("width",OHtmlWidth);
    $("#dEnd").css("width",OHtmlWidth);
    /*设置主要高度*/
    $("#dEnd").css("height",parseInt(OHtmlWidth/12.5));
    $("#ilabel").css("line-height",parseInt(OHtmlWidth/12.5)+"px");

    /*设置子宽度*/
    $("#dleft").css("width",OChildWidth);
    $("#dright").css("width",OChildWidth);
    $("#dform").css("width",OChildWidth);
    $("#phead").css("width",OChildWidth);
    $("#bform").css("width",OChildWidth);
    $("#ih1").css("width",OChildWidth);

    /*导航样式*/
    $("#logo").css("margin-left",parseInt((OChildWidth-200)/2));
    $("#Navigater").css("margin-left",parseInt((OChildWidth-350)/2));

    /*身体文本样式*/
    $("#sp1").css("width",parseInt(OHtmlWidth/1.5));
    $("#sp2").css("width",parseInt(OHtmlWidth/1.5));
    $("#tp1").css("width",parseInt(OHtmlWidth/1.5)+200);

    /*房源样式*/
    $(".inDivs").css("width",parseInt(OHtmlWidth/7));
    if (OHtmlWidth>OHtmlHeight){
    $(".inDivs").css("height",parseInt($(".inDivs").css("width"))*1.2);
    }
    else
    {
        $(".inDivs").css("height",parseInt($(".inDivs").css("width"))+106);
    };
    $(".inDivs1").css({"width":""+parseInt(OHtmlWidth/7)+""});
    $(".inDivs2").css({"width":""+parseInt(OHtmlWidth/7)+""});
    /*Foot*/
    $("#inFoot").css("margin-left",parseInt(OHtmlWidth/4.5));
