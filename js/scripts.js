// Carousel functions
$(document).ready(function(){
    $('.carousel').carousel({ interval: 2000 })
    
    $('#carouselButton').click( function() {
        if($('#carouselButton').children('span').hasClass('fa-pause')) {
          $('#mycarousel').carousel('pause');
          $('#carouselButton').children('span').removeClass('fa-pause')
          $('#carouselButton').children('span').addClass('fa-play')
        } else {
          $('#mycarousel').carousel('cycle');
          $('#carouselButton').children('span').removeClass('fa-play')
          $('#carouselButton').children('span').addClass('fa-pause')
        }
    });
    
    $('#carousel-play').click( function() {
        $('#mycarousel').carousel('cycle');
    });
  });

  // Login Modal
  $(document).ready(function() {
      $('#loginModalButton').click( function() {
          $('#loginModal').modal('show');
      });
  }); 

  // Reserve Table Modal
  $(document).ready(function() {
      $('#reserveModalButton').click( function() {
          $('#reserveModal').modal('show');
      });
  });