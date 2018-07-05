$(".hero-area .owl-carousel a .single-hero-slide").hover(
  function(e) {
    $(this).addClass("carousel-hovered-item");
  },
  function(e) {
    $(this).removeClass("carousel-hovered-item");
  }
);
