$(function(){
 
    'use strict';

    // function for ancour

     $('a').click(function(e){

        e.preventDefault();

});

// function for navbar




// function for sticky navbar

$(window).scroll(function(){
   
   if($(window).scrollTop() >= 500){

      $('nav').addClass('sticky');

   }else{

    $('nav').removeClass('sticky');
   }

});


$('nav').width($(window).width());

$(window).resize(function () {

    $('nav').width($(window).width());

});


// function for portfolio


$('.portfolio ul li').on('click', function () {

    $(this).addClass('active').siblings().removeClass('active');

    if ($(this).data('class') === 'all') {

        $('.portfolio .show .show-content').css('opacity', 1);

    } else {

        $('.portfolio .show .show-content').css('opacity', '.3');

        $($(this).data('class')).parent().css('opacity', 1);

    }

});

// function for slider

$('#arright').click(function(){

  var currentSlide = $('.slide.active');

  var nextSlide    = currentSlide.next();

  currentSlide.fadeOut(300).removeClass('active');

  nextSlide.fadeIn(300).addClass('active');
  
  if (nextSlide.length == 0) {

      $('.slide').first().fadeIn(300).addClass('active');
  }
  
});


$('#arlift').click(function(){

  var currentSlide = $('.slide.active');

  var prevSlide    = currentSlide.prev();

  currentSlide.fadeOut(300).removeClass('active');

  prevSlide.fadeIn(300).addClass('active');

  if (prevSlide.length == 0) {

      $('.slide').last().fadeIn(300).addClass('active');

  }

});


// function for blog

  $('.blog .side li').on("click", function(){

             $(this).addClass('active').siblings().removeClass('active');

             $('.blog .blog-them').hide();

             $($(this).data('content')).fadeIn(500);

  });


// function for scroll to top

var top = $('.top');

if($(window).scrollTop() >= 400){

    top.fadeIn(500);

}else{

    top.fadeOut(500);

}


$('.top').click(function(){

$('html, body').animate({ 

scrollTop:0

})

});

// function for popup

$('.pop').click(function(){

    $('.popup').fadeIn(500);

    });

   $('.popup .close').click(function(){
 
$('.popup').fadeOut(500);

   });

  

$('.popup .exit').click(function(){
 
 $('.popup').fadeOut(1000);

});

// function for mediaquerry

$(document).ready(function(){
       
$('.open-nav').on('click', function(){

$('.nav-content').animate({ width:'35%'}, 500)

});

});


$(document).ready(function(){
       
$('.close-nav').on('click', function(){

$('.nav-content').animate({ width:'0'}, 500)

});

});

});