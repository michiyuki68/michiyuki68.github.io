$(function() {
  $.getJSON("data.json", function(data) {

    var ulObj1 = $("#Headlines"),
      ulObj2 = $("#Bodies"),
      len = data.length,
      strCtgr = '',
      strPre = '<div class="swiper-container"><div class="swiper-wrapper">',
      strAft = '</div><div class="swiper-pagination"></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div>';

    for (var i = 0; i < len; i++) {


//Category���ς������div
if (data[i].Category == strCtgr){
console.log("������");
  if (strCtgr != ''){
console.log(strCtgr);
    ulObj1.append($(strAft));
  }
  strCtgr = data[i].Category;
  //���X�g�͂��Ȃ�
  ulObj1.append($(strPre));
}

//if (data[i].Category == "���"){
      ulObj1.append($('<div class="swiper-slide">' + data[i].Category + data[i].FirstBody + '</div>'));
//    }

//      ulObj1.append($(strPre + data[i].Category + data[i].FirstBody + '</div>'));

     }

    ulObj1.append($(strAft));


  });
});
