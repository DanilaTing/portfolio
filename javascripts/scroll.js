$(function() {
  if (window.innerWidth > 760) {
    $(window).scroll(function() {
      $('.workPreview').each(function() {
        var block = $(this);
        var blockOffset = block.offset().top;
        var windowScroll = $(document).scrollTop();
        var difference = blockOffset - windowScroll;
        var percents = 1.2 - difference/1000;
        console.log(difference);

        if (difference < 550 && difference > 50) {
          $('#overlay', this).addClass('off')
          $('.image', this).addClass('filter')
          $(block).css('opacity', 1)
          $(block).css('transform', 'scale(1)')
        } else {
          $('#overlay', this).removeClass('off')
          $('.image', this).removeClass('filter')
          $(block).css('opacity', 0.2)
          $(block).css('transform', 'scale(0.99)')
        }
      })
    })
  }
})
