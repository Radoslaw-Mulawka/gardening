


$(document).ready(function() {
  //carousel options

  $('#quote-carousel').carousel({
    pause: true, interval: 10000,            // testimonials? 
  });


  $("#lightgallery").lightGallery();         // gallery plugin 





    //  calculator alien code 
    $(".incr-btn").on("click", function (e) {
                var $button = $(this);
                var oldValue = $button.parent().find('.quantity').val();
                $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
                if ($button.data('action') == "increase") {
                    var newVal = parseFloat(oldValue) + 1;
                } else {
                    // Don't allow decrementing below 1
                    if (oldValue > 0) {
                        var newVal = parseFloat(oldValue) - 1;
                    } 
                    else {
                        newVal = 1;
                        $button.addClass('inactive');
                    }
                }
                $button.parent().find('.quantity').val(newVal);
                e.preventDefault();
      });

    // alien code end



     $('.separate-service-set-wrap').hide();
     $(".separate-service-set").on('click',function(){
        $(this).find('.separate-service-set-wrap').slideToggle(500);
     });
            

    $('input[type="range"]').rangeslider({
        polyfill : false,
        onInit : function() {
            this.output = $( '<div class="range-output" />' ).insertAfter( this.$range ).html( this.$element.val() );
        },
        onSlide : function( position, value ) {
            this.output.html( value );
        }
    });






    $('#form').on('submit', function(e){
       e.preventDefault();
       var fd = new FormData( this );
       $.ajax({
         url: 'send.php',
         type: 'POST',
         contentType: false, 
         processData: false, 
         data: fd,
         success: function(msg){
          if(msg == 'ok') {
            $('.button').val('Отправлено'); 
          } else {
            $(".button").val("Ошибка");
            setTimeout(function() {$(".button").val("Отправить");}, 3000);
          }
         }
       });
    });



    $(".hamburger").on("click", function(){
        if($(".hidden-nav").css("display") == "none") {
          $(".hidden-nav").slideDown();
        }
        else {
          $(".hidden-nav").slideUp();
        }

      });
    $('.hidden-nav li').on('click', function(){
        $(this).parent().parent().slideUp();
    });


    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination: true,
        autoPlay:false
    });

});


