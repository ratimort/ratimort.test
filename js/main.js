$(window).enllax({
type: 'background',
ratio: 0.5,
direction: 'vertical'
});

$(window).scroll(function() {
var height = $(window).scrollTop();
if(height > 1000){
$('.menu-container').addClass('style-menu');
} else{
$('.menu-container').removeClass('style-menu');
}
});


$(".scroll-item").click(function(event){   
event.preventDefault();
$('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
});


  wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       180,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();


//JQUERY
$(document).ready(function(){
    $("#portfolio_grid").mixItUp();
    $(".click-scroll").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
  });
    $(window).on('load', function () {
        var $preloader = $('#loading'),
            $loader   = $preloader.find('.loader');
            $body = $("html"),
            $htext = $(".header-text"),
        $body.removeAttr("style");
        $loader.slideUp();
        $preloader.delay(500).slideUp(500);
    });
    $(".click").click(function(){
        $(".menu-toggle").slideToggle(400);
        $("menu-fixed-top").removeClass("style-menu");
        $("body").toggleClass("body1");
        $(".line-1, .line-2").toggleClass("color");
        $(".line-1").toggleClass("o-bar1");
        $(".line-2").toggleClass("o-bar2");
        // $(".menu").fadeOut(100);
    });
    $(".click1").click(function(){
        $("#menu-fade").fadeOut(300);
        // $("body").removeClass("body1");
        // $(".menu").fadeIn(100);
        $(".menu").removeClass("menu-slide");
    });
});
//JQUERY
//CAROUSEL
$('.owl-carousel').owlCarousel({
    center: true,
    smartSpeed:2000,
    items:1,
    loop:false,
    margin:60,
    // autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        400:{
            items:1
        },
        650:{
            items:2
        },
    }
});
//CAROUSEL
//MOUSEMOVE
$(function() {
    // mouse follow example
    $('#owl').powerTip({ followMouse: true, duration: 10 });
    // $('.info-owl').powerTip({ followMouse: true });
});
// $(document).ready(function() {
//    $(".portfolio").mousemove(function(e) { 
//         // put other effects in when moving over the element
//         // from e you can get the pageX(left position) and pageY(top position) 
//         // im not sure if it was the relative or the absolute position
//         // i added 10 pxs on the top and left to show the tooltip a bit after
//         $('.floatingmes').css('left', e.pageX + 10)
//             .css('top', e.pageY + 10)
//             .css('display', 'block');

//         // or in a simpler way:
//         $('.floatingmes').css({
//             left: e.pageX + 10,
//             top: e.pageY + 10
//         }).css('display', 'block');
//     });

//     $(".portfolio").mouseout(function() { 
//         $('.floatingmes').css('display', 'none');
//     });
// });
// $(document).ready(function(){ 
//    $("#owl").mousemove(
  
//   function (pos) {  
//   $("#floatingmes").show(); 
//     $("#floatingmes").css('left',(pos.pageX+10)+'px').css('top',(pos.pageY+10)+'px');
//     }   
   
//    ).mouseleave(function() {
//     $("#floatingmes").hide();  
// }); 
   
// });
// $(document).ready(function(){ 
//    $(".info").mousemove(
  
//   function (pos) {   
//     $("#floatingmes").show(); 
//     $("#floatingmes").css('left',(pos.pageX+10)+'px').css('top',(pos.pageY+10)+'px');  
//     $(".owl-span").text("See more");
//     }   
   
//    ).mouseleave(function() {
//     $("#floatingmes").hide();  
//     $(".owl-span").text("Drag");
// }); 
   
// });
//MOUSEMOVE

var postion = $('#portfolio').offset().top,
    height = $('#portfolio').height();
$(document).on('scroll', function (){
  var scroll = $(document).scrollTop();
  if(scroll  > postion && scroll < (postion + height) ) {
     $('.menu-fixed-bottom').addClass('bg')
     }else {
        $('.menu-fixed-bottom').removeClass('bg')
     }
})