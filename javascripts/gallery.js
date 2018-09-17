$(function() {
  var imageWidth = $('.image').css('width').replace(/[^-\d\.]/g, '');
  var currentScroll = 0;
  var amountOfImages = $(".images > *").length;
  var currentImage = 0;

  console.log(amountOfImages);

  function checkChevrons() {
    if (currentImage == 0) {
      $(".chevron:first-of-type").css('opacity', '0')
      $(".chevron:first-of-type").css('pointer-events', 'none')
      $(".chevron:last-of-type").css('opacity', '1')
    } else if (currentImage == amountOfImages - 1) {
      $(".chevron:first-of-type").css('opacity', 'block')
      $(".chevron:last-of-type").css('opacity', '0')
      $(".chevron:last-of-type").css('pointer-events', 'none')
    } else {
      $(".chevron:first-of-type").css('opacity', '1')
      $(".chevron:last-of-type").css('opacity', '1')
      $(".chevron:last-of-type").css('pointer-events', 'all')
      $(".chevron:first-of-type").css('pointer-events', 'all')
    }
  }

  checkChevrons()

  $(".chevron:last-of-type").click(function() {
    currentImage = currentImage + 1;
    $(".images").animate({scrollLeft: imageWidth * currentImage}, 200)
    console.log(currentImage);
    checkChevrons()
  })

  $(".chevron:first-of-type").click(function() {
    currentImage = currentImage - 1;
    $(".images").animate({scrollLeft: imageWidth * currentImage}, 200)
    console.log(currentImage);
    checkChevrons()
  })
})
