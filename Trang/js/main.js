
// external js: isotope.pkgd.js, packery-mode.pkgd.js
$(document).ready(function() {


$('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: false,
  masonry: {
    columnWidth: 224,
    isFitWidth: true,
    gutter: 0
   }
  })
});

