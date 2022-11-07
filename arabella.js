$(window).scroll(function() {
   var wScroll = $(this).scrollTop(); 
   
   
   if( wScroll > $('.description').offset().top - 450) {
        $('.description h3').addClass('muncul');
        $('.description h1').addClass('muncul');
        $('.description .teks').addClass('muncul');
   }

   if( wScroll > $('.rooms').offset().top - 340 ) {
      $('.rooms .title-rooms').addClass('muncul');
   }
});