/*
$(".hero-slides a").on("click", function(e) {
  e.preventDefault();
  $(".portfolio-area").fadeOut();
  $(".sonar-call-to-action-area").fadeOut();
  $(".footer-area").fadeOut();
  if ( $( "div:first" ).is( ":hidden" ) ) {
    $( "div" ).show( "slow" );
  } else {
    $( "div" ).slideUp(3000);
  }
  setTimeout(relocate, 3000);
});

function relocate(){
    document.location.href = "montage.html";
}
*/
/*
$(function(){
  'use strict';
    var options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
        onStart: {
          duration: 2000, // Duration of our animation
          render: function ($container) {
            // Add your CSS animation reversing class
            $("#main").addClass('fadeOut');
            // Restart your animation
            smoothState.restartCSSAnimations();
          }
        },
        onReady: {
          duration: 0,
          render: function ($container, $newContent) {
            // Remove your CSS animation reversing class
            $("#main").removeClass('fadeOut');
            // Inject the new content
            //$container.html($newContent);
          }
        }
      },
      smoothState = $("#launcher").smoothState(options).data('smoothState');
});
*/
var text = $('.levitation').text(),
    textArr = text.split('');

$('.levitation').html('');

$.each(textArr, function(i, v){
  if(v == ' '){$('.levitation').append('<span class="space"></span>');}
  $('.levitation').append('<span>'+v+'</span>');
})
