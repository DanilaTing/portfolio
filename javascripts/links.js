$(function() {
  $('#workslink').click(function() {
    var worksOffset = $('#works').offset().top;
    $('html, body').animate({scrollTop:worksOffset - 260},500);
  })

  $('#contactslink').click(function() {
    var contactsOffset = $('#contacts').offset().top;
    $('html, body').animate({scrollTop:contactsOffset},1000);
  })
})
