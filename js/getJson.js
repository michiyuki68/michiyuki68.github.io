$(function() {  $.getJSON("data.json", function(data) {    var ulObj1 = $("#Headlines"),      ulObj2 = $("#Bodies"),      len = data.length;    for (var i = 0; i < len; i++) {      var firstBodyPreview, limitNo;      limitNo = 100;      if (data[i].FirstBody.length > limitNo) {        firstBodyPreview = data[i].FirstBody.substr(0, limitNo) + '…';      }      var bodyLength;      if (data[i].Body != null) {        bodyLength = data[i].FirstBody.length + data[i].Body.length;      }      ulObj1.append($('<div class="swiper-slide">' + data[i].FirstBody + bodyLe '</div>'));    }    var ulObj3 = $("#filterButtons"),      len = data.length,      beforCategory;    beforCategory = 'dummy';    //すべて    ulObj3.append($('<button class="button is-checked" data-filter="*">show all</button>'));    for (var i = 0; i < len; i++) {      if (data[i].Category != beforCategory) {        ulObj3.append($('<button class="button" data-filter=".' + data[i].Category + '">' + data[i].Category + '</button>'));        beforCategory = data[i].Category;      }    }    //未分類    //      ulObj3.append($('<button class="button" data-filter="other">未分類</button>'));    var ulObj4 = $("#michi"),      len = data.length;    var HeadlinePreview;    limitNo = 20;    for (var i = 0; i < len; i++) {      if (data[i].Headline.length > limitNo) {        HeadlinePreview = data[i].Headline.substr(0, limitNo) + '…';      }      ulObj4.append($('<p><a href="#seq' + i +'">' + HeadlinePreview + '</a></p>'));    }  });});//■page topボタン$(function(){var topBtn=$('#pageTop');topBtn.hide(); //◇ボタンの表示設定$(window).scroll(function(){  if($(this).scrollTop()>80){    //---- 画面を80pxスクロールしたら、ボタンを表示する    topBtn.fadeIn();  }else{    //---- 画面が80pxより上なら、ボタンを表示しない    topBtn.fadeOut();  } }); // ◇ボタンをクリックしたら、スクロールして上に戻るtopBtn.click(function(){  $('body,html').animate({  scrollTop: 0},500);  return false;});});
