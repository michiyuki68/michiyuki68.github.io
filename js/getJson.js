$(function() {
  $.getJSON("data.json", function(data) {

    var ulObj1 = $("#Headlines"),
      ulObj2 = $("#Bodies"),
      len = data.length,
      strCtgr = '',
      strPre = '<div class="swiper-container"><div class="swiper-wrapper">',
      strAft = '</div><div class="swiper-pagination"></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div>';

    for (var i = 0; i < len; i++) {


//Categoryが変わったらdiv
if (data[i].Category == strCtgr){
alert('入った');
  if (strCtgr != ''){
alert(strCtgr);
    ulObj1.append($(strAft));
  }
  strCtgr = data[i].Category;
  //ラストはやらない
  ulObj1.append($(strPre));
}

//if (data[i].Category == "一面"){
      ulObj1.append($('<div class="swiper-slide">' + data[i].Category + data[i].FirstBody + '</div>'));
//    }

//      ulObj1.append($(strPre + data[i].Category + data[i].FirstBody + '</div>'));

     }

    ulObj1.append($(strAft));


  });
});
