$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 10) {
            $(".header").addClass("active-1");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active-1");
        }
    });
});


$(function() {
    var header = $(".start-style");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 10) {
            header.removeClass('start-style').addClass("scroll-on");
        } else {
            header.removeClass("scroll-on").addClass('start-style');
        }
    });
});		



$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
   
        autoPlay: 3000, //Set AutoPlay to 3 seconds
   
        items : 2,
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [979,2],
        itemsTablet :	[500,1]
   
    });
   
  });


  $(document).ready(function() {
    $('#owl-carousel11').owlCarousel({
        loop: true,
        slideSpeed : 200,
        margin: 10,
        nav: true,
        autoPlay: true,
        items:2,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[980,2],
        navigation : true,
        pagination : false,
    });
});


function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);