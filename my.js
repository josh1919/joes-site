function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const myLessons = document.querySelectorAll('.lesson');

// function lessonRotate(e) {
//   myLessons.forEach(lesson => {
//     const squareCenter = (window.scrollY + window.innerHeight);
//     const squareBottom = lesson.offsetTop + lesson.height;
//     const isHalfShown = squareCenter < lesson.offsetTop;
//     const isNotScrolledPast = window.scrollY < squareBottom;
//     //const myObject = [squareCenter, squareBottom, isHalfShown, isNotScrolledPast]
//     if((window.scrollY + window.innerHeight) > squareCenter) {
//       lesson.classList.add('straighten');
      
//      } else {
//        console.log(squareCenter)
//       lesson.classList.remove('straighten');
//     }
//   })
// }


function lessonRotate(e) {
  myLessons.forEach(lesson => {
    const lessonCenterAA = (window.scrollY + window.innerHeight) - lesson.clientHeight/2;
    const squareCenterOnUp = (window.scrollY) + lesson.clientHeight / 2;
    const lessonCenter = lesson.offsetTop + lesson.clientHeight/2;
    const isHalfShown = lessonCenter < lesson.offsetTop;
    const isNotScrolledPast = window.scrollY < lessonCenter;

    const lessonfromBottom = (window.scrollY + window.innerHeight) - lesson.clientHeight/2

  

     // lessonoffset + lessonheight/2 > window.scrollY 

    //const myObject = [squareCenter, squareBottom, isHalfShown, isNotScrolledPast]
    if(lessonCenter > window.scrollY && lessonCenter < lessonfromBottom) {
      lesson.classList.add('straighten');
      console.log(lesson.offsetTop)
     } else {
       console.log(lesson.offsetTop)
      lesson.classList.remove('straighten');
    }

    // if(squareBOttom)

  })
}

window.addEventListener('scroll', debounce(lessonRotate));