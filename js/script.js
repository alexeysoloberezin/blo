
$(document).ready(function(){  
  
  // $("body").on('click', '[href*="#"]', function(e){
  //   var fixed_offset = 100;
  //     $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  //     e.preventDefault();
  //     });
  $('.burger').click(function(){
    $('.header__nav').addClass('header__nav-active')
    $('body').addClass('body-fixed')
  });
  $('.header__menu-close').click(function(){
    $('.header__nav').removeClass('header__nav-active')
    $('body').removeClass('body-fixed');

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
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }    
    ]
  });  
});