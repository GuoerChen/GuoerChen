/*
* @Author: Marte Chen
* @Date:   2017-12-06 15:11:51
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-06 18:38:18
*/



var liststutas = 99;

//第2个按钮
$("#to2").click(

    function(){

        if(liststutas == 99){
          $.ajax({
  type: "get",
  async: true,
  url: "https://music.qq.com/musicbox/shop/v3/data/hit/hit_newsong.js",
  dataType: "jsonp",
  jsonp: "callback",
  jsonpCallback: "JsonCallback",
  scriptCharset: 'GBK',//设置编码，否则会乱码
  success: function(data) {
    liststutas = 100;
    var Length = data.songlist.length; //json 长度
    var listnum = 10;           //每页条数
    var Pages =  Math.floor(Length/listnum) + 1; //页数
    FenPages(Pages,listnum,data.songlist);
    NextPage(Pages);
    var oTd = document.getElementsByClassName("songplay");
    var oTr = document.getElementsByClassName("startpaly");
    for(var x = 0;x<oTd.length;x++)
    {
        oTr[x].onclick = (function(x){
            return function(){
            var Oid = oTd[x].innerHTML;
            var tUrl = "http://ws.stream.qqmusic.qq.com/"+Oid+".m4a?fromtag=46";
            $("#Imp3").attr('src',"");
            $("#Imp3").attr('src',tUrl);
            $("#btn").css("background-color","white");
            $("#btn").html("P");
            BtStutas = 99;
            };
        })(x);

    }

  },
  error: function() {
    liststutas = 99;
    alert('获取歌单失败');
  }
});


        }
        if(liststutas == 100){
            liststutas == 100;
        }
        else{
            liststutas == 100;
        }


    }


    );


//分页
function FenPages(Pages,listnum,oJson){
    for(var j = 0;j < Pages;j++)
    {
        var tid = 'tb' + (j+1);
        $("#db").append('<table class = "tables"></table>')
        $(".tables").eq(j).attr('id',tid);
        for(var i = 0;i < listnum;i++){
            if( oJson.length < listnum){
                   var Shengyu = oJson.length;
                   for(var nn = 0;nn<Shengyu;nn++)
                   {
                    var stime = oJson[nn]["playtime"];
                    var smin  = parseInt(stime/60);
                    var ssend = stime%60;
                    if (ssend<10)
                    {
                        ssend = "0"+ssend;
                    }
                    var songtime = "0"+smin+":"+ssend;
                    $(".tables").eq(j).append('<tr class = "startpaly"><td class = "songplay">'+oJson[nn]["id"]+'</td><td>'+oJson[nn]["songName"]+'</td><td>'+oJson[nn]["singerName"]+'</td><td>'+songtime+'</td></tr>')
                   }
                   break;
            }
            else{
                var stime = oJson[i]["playtime"];
                var smin  = parseInt(stime/60);
                var ssend = stime%60;
                if (ssend<10)
                    {
                        ssend = "0"+ssend;
                    }
                var songtime = "0"+smin+":"+ssend;
                 $(".tables").eq(j).append('<tr class = "startpaly"><td class = "songplay">'+oJson[i]["id"]+'</td><td>'+oJson[i]["songName"]+'</td><td>'+oJson[i]["singerName"]+'</td><td>'+songtime+'</td></tr>')
            }
        }
        oJson.splice(0,listnum);
    };

    $(".tables").eq(0).css("display","table");
}


//上下页
function NextPage(Pages){

var dqpage = 0;

$("#uppages").click(function() {

    $("#uppages").css("color","#3f8dfd");


    if( dqpage == 0){
        alert("this is first page");
    }
    else{
    $(".tables").css("display","none");
    $(".tables").eq(dqpage - 1).css("display","table");
    $("#labpage").html(dqpage);
    dqpage = dqpage - 1;
    };
});

$("#nextpages").click(function() {

    $("#nextpages").css("color","#3f8dfd");

    if( dqpage + 1 == Pages){
        alert("this is end page");
    }
    else{
    dqpage = dqpage + 1;
    $(".tables").css("display","none");
    $(".tables").eq(dqpage).css("display","table");
    $("#labpage").html(dqpage+1);
    };
});

}