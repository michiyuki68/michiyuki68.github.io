$(function () {
    $.getJSON("data.json", function (data) {

        var ulObj1 = $("#Headlines"),
          ulObj2 = $("#Bodies"),
          len = data.length,
          strCtgr = '',
          strAppend = '',
          strPre = '<div class="swiper-container"><div class="swiper-wrapper">',
          strAft = '</div><div class="swiper-pagination"></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div>';

            //����̂ݕK�v
            if (strCtgr == '') {
                //ulObj1.append($(strPre));
                strAppend = strPre;
            }

        for (var i = 0; i < len; i++) {

if  (strCtgr != '') {
            //Category���ς������div
            if (data[i].Category != strCtgr) {
                //ulObj1.append($(strAft));
                strAppend = strAppend + strAft;
                //ulObj1.append($(strPre));
                strAppend = strAppend + strPre;
            }
}
            strCtgr = data[i].Category; //����ޔ����Ă���

            strAppend = strAppend + '<div class="swiper-slide">' + 'h' + data[i].Category + data[i].FirstBody + '</div>';

            //ulObj1.append($('<div class="swiper-slide">' + 'b' + data[i].Category + data[i].FirstBody + '</div>'));

        } //for

        //�Ō�ɕK�v
        strAppend = strAppend + strAft;

        //�܂Ƃ߂�Append����
        ulObj1.append($(strAppend));

    });
});
