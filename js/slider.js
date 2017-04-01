
$('.tile').each(function() {
    var hoverid = this.id;

    var tiles = document.getElementsByClassName('tile');

    var hoverTile = document.getElementById(hoverid);

    var id = parseInt(hoverid) + 4;

    hoverTile.addEventListener('mouseover', function() {
      for (var i = 0; i < id; i++) {
        var tile = tiles[i];      
        tile.classList.add('shiftLeft');
      }
      
      for (var i = id; i < tiles.length; i++) {
        var tile = tiles[i];
        tile.classList.add('shiftRight');
      }
    });

    hoverTile.addEventListener('mouseout', function() {
      for (var i = 0; i < id; i++) {
        var tile = tiles[i];
        tile.classList.remove('shiftLeft');
      }
      
      for (var i = id; i < tiles.length; i++) {
        var tile = tiles[i];
        tile.classList.remove('shiftRight');
      }
    });

});

$('.responsive').slick({
  dots: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
  infinite: true,
  autoplay: true,
  dots: false,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1331,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        dots: false,
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