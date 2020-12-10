$(document).ready(function(){   
  $('.photo__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,  
    dots: true, 
    infinite: false,  
    swipe: false,    
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,          
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,         
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.popup__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,  
    dots: true, 
    infinite: false,  
    
  });
  var $page = $('html, body');
  $('a[href*="#"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 400);
      return false;
  });
  $('.footer__list-title').click(function(){
    this.parentElement.classList.toggle('footer__list-view')
  });
  var video = document.querySelector('.video-it');
  $('.video-wrapper-img').click(function(){
    this.classList.add('video-wrapper-img-none');
    video.play();
  });
  $('.burger').click(function(){
    $('.window2').toggleClass('window2-active')
    $('.header__nav').toggleClass('header__nav-active')    
    $('.burger').toggleClass('active-burger')    
  }); 
  $('.header__link').click(function(){
    $('.header__nav').removeClass('header__nav-active')   
    $('.window2').removeClass('window2-active')
    $('.burger').removeClass('active-burge')   

  });
  $('.header__call').click(function(){
    $('.window').addClass('window-active'); 
  });
  $('.popup__close').click(function(){
    $('.window').removeClass('window-active');
  });
  $('.photo__slide').click(function(){
    $('.window2').addClass('window2-active');
    $('.popup__slider-wrapper').addClass('popup__slider-wrapper-active');   
  });
  $('.popup__slider-close').click(function(){
    $('.window2').removeClass('window2-active');
    $('.popup__slider-wrapper').removeClass('popup__slider-wrapper-active');  
  });
});