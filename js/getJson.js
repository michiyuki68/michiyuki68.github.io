$(function () {
    $.getJSON("data.json", function (data) {

        var ulObj1 = $("#Headlines"),
          ulObj2 = $("#Bodies"),
          len = data.length,
          strCtgr = '',
          strAppend = '',
          strPre = '<div class="swiper-container"><div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-405px, 0px, 0px);">',
          strAft = '</div><div class="swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets"></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div>';

            //初回のみ必要
            if (strCtgr == '') {
                //ulObj1.append($(strPre));
                strAppend = strPre;
            }

        for (var i = 0; i < len; i++) {

if  (strCtgr != '') {
            //Categoryが変わったらdiv
            if (data[i].Category != strCtgr) {
                //ulObj1.append($(strAft));
                strAppend = strAppend + strAft;
                //ulObj1.append($(strPre));
                strAppend = strAppend + strPre;
            }
}
            strCtgr = data[i].Category; //毎回退避しておく

            strAppend = strAppend + '<div class="swiper-slide">' + 'h' + data[i].Category + data[i].FirstBody + '</div>';

            //ulObj1.append($('<div class="swiper-slide">' + 'b' + data[i].Category + data[i].FirstBody + '</div>'));

        } //for

        //最後に必要
        strAppend = strAppend + strAft;

        //まとめてAppendする
        ulObj1.append($(strAppend));

    });
});
