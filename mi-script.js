// deslis lento
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
  $('html,body').animate({
     scrollTop: target.offset().top - 0 
    } , 1000);
      return false;
    }
  }
 });
});

// loading
$(window).load(function() {
    // start up after 2sec no matter what
    window.setTimeout(function(){
        $('body').removeClass("loading").addClass('loaded');
    }, 4000);
});

/*scroll*/
$(document).ready(function() {
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $(".navegacion").position();
        if (scroll > topDist.top) {
            console.log("prueba");
            $('.navbar').addClass("navbar-fixed-top");
        } else {
            console.log("no");
            $('.navbar').removeClass("navbar-fixed-top");
        }
    });
});
 // slider
 $(function(){
    $('#slider div:gt(0)').hide();
    setInterval(function(){
      $('#slider div:first-child').fadeOut(0) //Tiempo en desaparecer la imagen saliente
         .next('div').fadeIn(1000) //Tiempo en aparecer la imagen entrante
         .end().appendTo('#slider');}, 3000); //Tiempo de permanencia de cada imagen
});
  $(function(){
    $('#slider2 div:gt(0)').hide();
    setInterval(function(){
      $('#slider2 div:first-child').fadeOut(0)
         .next('div').fadeIn(1000)
         .end().appendTo('#slider2');}, 6000);
});