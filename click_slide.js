(function(){

  var slideIndex = 0;
  // number of project slides
  var viewNumber = 3;
  // show(slideIndex);

  function plus(n) {
    // Rest Operator bei ganzzahliger division -> %
    slideIndex = (viewNumber + (slideIndex + n)) % viewNumber
    show(slideIndex);
  }

  function show(n) {
    var click_slide = document.getElementsByClassName("click_slide")[0];
    click_slide.style.transform = 'translateX(-'+ 33.33333333*n +'%)'
    var dots = document.querySelectorAll('.dot')
    dots.forEach(function (dot, index) {
      if(index === n) {
        dot.classList.add('active')
      } else {
        dot.classList.remove('active')
      }
    })
  }

  var carousel = {
    show: show,
    plus: plus
  }

  window.carousel = carousel
}())
