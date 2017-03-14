<<<<<<< HEAD
$(function() {
  $.getJSON("data.json", function(data) {

    var ulObj1 = $("#Headlines"),
      ulObj2 = $("#Bodies"),
      len = data.length;

    for (var i = 0; i < len; i++) {
      var firstBodyPreview, limitNo;
      limitNo = 100;


      ulObj1.append($('<div class="swiper-slide">' + data[i].FirstBody + '</div>'));

    }


  });
});

=======
$(function() {  $.getJSON("data.json", function(data) {    var ulObj1 = $("#Headlines"),      ulObj2 = $("#Bodies"),      len = data.length;    for (var i = 0; i < len; i++) {      var firstBodyPreview, limitNo;      limitNo = 100;      ulObj1.append($('<div class="swiper-slide">' + data[i].FirstBody + '</div>'));    }  });});
>>>>>>> origin/master
