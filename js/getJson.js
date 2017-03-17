$(function () {
    $.getJSON("data.json", function (data) {

        var ulObj1 = $("#Headlines"),
          ulObj2 = $("#Bodies"),
          len = data.length,
          strCtgr = '',
          strPre = '<div class="swiper-container"><div class="swiper-wrapper">',
          strAft = '</div><div class="swiper-pagination"></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div>';

        for (var i = 0; i < len; i++) {
            //初回のみ必要
            if (strCtgr == '') {
                ulObj1.append($(strPre));
            }

            console.log('before if');
            console.log(data[i].Category);
            console.log(strCtgr);

            //Categoryが変わったらdiv
            if (data[i].Category == strCtgr) {
                console.log("kawatta if");
                ulObj1.append($(strAft));
                ulObj1.append($(strPre));
            }

            strCtgr = data[i].Category; //毎回退避しておく
            console.log('dainyugo:' + strCtgr);

            ulObj1.append($('<div class="swiper-slide">' + 'b' + data[i].Category + data[i].FirstBody + '</div>'));

        }
        //最後に必要
        ulObj1.append($(strAft));


    });
});
