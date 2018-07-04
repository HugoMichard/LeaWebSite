var figure = $("#hover_play").hover( hoverVideo, hideVideo );
var figure = $("#hover_play2").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}
