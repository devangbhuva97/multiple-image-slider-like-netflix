$('.tile').mouseover(function() {
    var hoverid = this.id;
    console.log(hoverid);

    var tiles = document.getElementsByClassName('tile');

    var hoverTile = document.getElementById(hoverid);

    hoverTile.addEventListener('mouseover', function() {
      for (var i = 0; i < (hoverid-1); i++) {
        var tile = tiles[i];
        tile.classList.add('shiftLeft');
      }
      
      for (var i = hoverid; i < tiles.length; i++) {
        var tile = tiles[i];
        tile.classList.add('shiftRight');
      }
    });

    hoverTile.addEventListener('mouseout', function() {
      for (var i = 0; i < (hoverid-1); i++) {
        var tile = tiles[i];
        tile.classList.remove('shiftLeft');
      }
      
      for (var i = hoverid; i < tiles.length; i++) {
        var tile = tiles[i];
        tile.classList.remove('shiftRight');
      }
    });

});

$('.responsive').slick({
  dots: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
  infinite: false,
  // autoplay: true,
  dots: false,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1331,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
      }
    },
    {
      breakpoint: 1101,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
      }
    },
    {
      breakpoint: 851,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
      }
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});




/* Play Image Hover/Unhover */
    function play_img_hover(element) {
        element.setAttribute('src', './image/play-3.png');
    }
    function play_img_unhover(element) {
        element.setAttribute('src', './image/play-2.png');
    }