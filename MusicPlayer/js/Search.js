/*
* @Author: Chen
* @Date:   2017-12-06 15:15:29
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-06 18:27:37
*/

$("#searchBtn").click(

    function(){
        var serchwenben = $("#searchtext").val();
        console.log(serchwenben);
        $("#labpage1").html("1");
        if(serchwenben == null || serchwenben.trim(" ").length==0){
            alert("请不要输入空格");
        }
        else{
           $("#db1").html("");
           $.ajax({
                  type: "get",
                  async: false,
                  url:  "https://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.search.merge&format=jsonp",
                  data:{
                    query:encodeURI(serchwenben),
                    page_no:1,
                    page_size:200,
                    type:"-1",
                    data_source:0,
                    use_cluster:1
                  },
                  dataType: "jsonp",
                  jsonp: "callback",
                  jsonpCallback: "JsonCallback",
                  scriptCharset: 'GBK',//设置编码，否则会乱码
                  success:  function(data) {

                  var Length1 = data['result']['song_info']['song_list'].length; //json 长度
                  if (Length1 == 0 ){
                    alert("没搜到有关歌曲!!!");
                  }

                  else{
                    $("#da1").css("visibility","unset");

                    $("#dc1").css("visibility","unset");

                    var listnum1 = 9;           //每页条数
                    var Pages1 =  Math.floor(Length1/listnum1) + 1; //页数
                    FenPages1(Pages1,listnum1,data['result']['song_info']['song_list']);
                    NextPage1(Pages1);
                    console.log(Pages1);
                    var oTd1 = document.getElementsByClassName("songplay1");
                    var oTr1 = document.getElementsByClassName("startpaly1");
                    for(var x = 0;x<oTd1.length;x++)
                    {
                        oTr1[x].onclick = (function(x){
                            return function(){
                            $("#Imp3").attr('src',"");
                            var Oid = oTd1[x].innerHTML;
                            var tUrl = "https://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid="+Oid;
                                $.ajax({
                                  type: "get",
                                  async: false,
                                  url:  tUrl,
                                  dataType: "jsonp",
                                  scriptCharset: 'GBK',
                                  success:  function(data) {
                                  var songUrl = data['bitrate']['file_link'];
                                  $("#Imp3").attr('src',songUrl);
                                  $("#btn").css("background-color","white");
                                 $("#btn").html("暂停");
                                 BtStutas = 99;
                                },
                                  error: function() {
                                    alert("歌曲已失效!!!");
                                  }
                                });

                            };
                        })(x);
                    }

                  }

                  },
                  error: function() {

                    alert("please check Network");
                  }
                });


        }
        $("#searchtext").val("");
    });



function FenPages1(Pages1,listnum1,oJson1){
    for(var j = 0;j < Pages1;j++)
    {
        var tid = 'tb' + (j+1);
        $("#db1").append('<table class = "tables1"></table>')
        $(".tables1").eq(j).attr('id',tid);
        for(var i = 0;i < listnum1;i++){
            if( oJson1.length < listnum1){
                   var Shengyu1 = oJson1.length;
                   for(var nn = 0;nn<Shengyu1;nn++)
                   {
                    $(".tables1").eq(j).append('<tr class = "startpaly1"><td class = "songplay1">'+oJson1[nn]["song_id"]+'</td><td>'+oJson1[nn]["title"]+'</td><td>'+oJson1[nn]["author"]+'</td></tr>')
                   }
                   break; //<td>'+oJson1[nn]["album_title"]+'</td>
            }
            else{
                 $(".tables1").eq(j).append('<tr class = "startpaly1"><td class = "songplay1">'+oJson1[i]["song_id"]+'</td><td>'+oJson1[i]["title"]+'</td><td>'+oJson1[i]["author"]+'</td></tr>')
            }
        }
        oJson1.splice(0,listnum1);
    };

    $(".tables1").eq(0).css("display","table");
}

function NextPage1(Pages1){

var dqpage1 = 0;

$("#uppages1").click(function() {
    if( dqpage1 == 0){
        console.log(dqpage1);
    }
    else{
    $(".tables1").css("display","none");
    $(".tables1").eq(dqpage1 - 1).css("display","table");
    $("#labpage1").html(dqpage1);
    dqpage1 = dqpage1 - 1;
    };
});

$("#nextpages1").click(function() {
    if( dqpage1 + 1 == Pages1){
        console.log(dqpage1);
    }
    else{
    dqpage1 = dqpage1 + 1;
    $(".tables1").css("display","none");
    $(".tables1").eq(dqpage1).css("display","table");
    $("#labpage1").html(dqpage1+1);
    };
});

}

