

(function($) {  
  $(function() {  

    $('#up').click(function() {  
      $('body,html').animate({scrollTop:0},400);  
      return false;  
    })  

  })  
})(jQuery)

// 0 - это отступ в пикселях, до какого места возвращаться.
// 600 - это время, в течение которого происходит анимация (прокрутка), в данном случае это полсекунды.




jQuery(window).scroll(function() {

  if (jQuery(this).scrollTop()<400)
  {
    jQuery('.back-top').fadeOut();  
  }
  else
  {
    jQuery('.back-top').fadeIn();
  }
});

// скрытие кнопки




$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });
});

$(document).ready(function(){
  $("#footer").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });
});

//цифра 500 - время в миллисекундах и равно 1,5 секундам. 
//Это время за которое совершается переход к нужному якорю.


//------------------------burger-menu--------------

$(document).ready(function() {
  $('.burger-menu').click(function(event) {
    $('.burger-menu, .header-menu-list').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.header-menu-link').click(function(event) {
    $('.burger-menu, .header-menu-list').removeClass('active');
    $('body').removeClass('lock');
  });
});

