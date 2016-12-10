$(document).ready(function () {

    $(window).scroll(function () {
        var height = $(window).height()
        var floatingPosition = 260
        //var max-height = document.getElementByTagName('h2').offsetHeight;
        //console.log('scroll '+$(this).scrollTop()+' height '+height+' floatingPosition '+floatingPosition)
      // scrolltop wie viel ich von oben bereits gescrollt habe
        if ($(this).scrollTop() > 3*height-floatingPosition) {
          $('h2').html('03/<br>03');
          $('h2').addClass('gray')
          $('h2').removeClass('yellow')
        } else if ($(this).scrollTop() > 2*height-floatingPosition) {
          $('h2').html('02/<br>03');
          $('h2').addClass('yellow')
          $('h2').removeClass('gray')
        } else if ($(this).scrollTop() > height-floatingPosition) {
          $('h2').html('02/<br>03');
          $('h2').addClass('gray')
          $('h2').removeClass('yellow')
        } else {
          $('h2').html('01/<br>03');
          $('h2').addClass('yellow')
          $('h2').removeClass('gray')
        }
    });
});
