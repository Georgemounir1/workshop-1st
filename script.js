function chargebattery() {
  let a;
  a = document.getElementById("demo");
  a.innerHTML = "Developer|";
  setTimeout(function () {
      a.innerHTML = "Freelancer|";
    }, 1000);
  setTimeout(function () {
      a.innerHTML = "Designer|";
    }, 2000);
  setTimeout(function () {
      a.innerHTML = "Photographer|";
    }, 3000);

}
chargebattery();
setInterval(chargebattery, 5000);


$(function() {
  var header = $(".header");
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
      if (scroll >= 200) {
          header.removeClass('header').addClass("header-alt");
      } else {
          header.removeClass("header-alt").addClass('header');
      }
  });
});