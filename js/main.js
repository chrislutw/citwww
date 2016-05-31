$(function(){

  cookieStr = document.cookie;

  beginPos = cookieStr.indexOf("redirval");
  endPos = cookieStr.indexOf("#N");

  if (beginPos == -1) {
    document.cookie = "redirval=1#N";
    RDV = 1;
  } else {
    RDV = cookieStr.substring((beginPos + 9), endPos);
    RDV++;
    document.cookie = "redirval=" + RDV + "#N";
  }
  if ((RDV % 2) != 0) {
    window.location.reload();
  } else {
    $(window).resize(function() {
      $("#advertisement").height($(".imgs").innerHeight());
    });
    $("#advertisement").height($(".imgs").innerHeight());
  }

    // $('.menu-ul-li').mouseover(function() {
    //   $(this).children('.submenu').removeClass('animated fadeOutUp').addClass('submenu_open animated fadeInDown');
    // }).mouseout(function(event) {
    //   $(this).children('.submenu').removeClass('animated fadeInDown').addClass('animated fadeOutUp');
    // });

    // $('.menu-ul-li').hover(function() {
    //   $(this).children('.submenu').addClass('submenu_open');
    // },function() {
    //   $(this).children('.submenu').removeClass('submenu_open');
    // });

});