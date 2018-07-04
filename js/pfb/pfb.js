$(document).ready(function(){

    // Magnific pop up
    $('.tm-gallery').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {enabled:true}
      // other options
    });

});

var figure = $("#hover_play").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}
