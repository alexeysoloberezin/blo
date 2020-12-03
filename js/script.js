
$(document).ready(function(){   
  
  const navOffset = $('.header__nav').offset().top;
  $(window).scroll(function(){
    
    const scrolled = $(this).scrollTop();

    if (scrolled > navOffset){
      $('.wrapper').addClass('nav-fixed');
    } else if (scrolled < navOffset){
      $('.wrapper').removeClass('nav-fixed');
    }
  });

  $('.footer__list-title').click(function(){
    this.parentElement.classList.toggle('footer__list-view')
  });
  $('.header__call').click(function(){
    $('.window').addClass('window-active');
  });
  $('.popup__close').click(function(){
    $('.window').removeClass('window-active');
  });
  $('.burger').click(function(){
    $('.window2').toggleClass('window2-active')
    $('.header__nav').toggleClass('header__nav-active')    
    $('.burger').toggleClass('active-burger')  
    $('body').toggleClass('body-fixed');
  });  
  $('.blogaside__item').click(function(){
  this.classList.toggle('blogaside__item-active');
  });

  $('.blogaside__box').click(function(){
  $('.blogaside__box').removeClass('blogaside__box-active');
  this.classList.add('blogaside__box-active');

  });

  $('.blogaside__box-list').click(function(){
  $('.blog__wrapper').addClass('blog__wrapper-list');
  });

  $('.blogaside__box-tile').click(function(){
  $('.blog__wrapper').removeClass('blog__wrapper-list');
  });

  $('.courses__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,         
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }    
    ]
  });  

  $('.article__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,  
    dots: true,  
  });

});