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

function lessonRotate(e) {
  myLessons.forEach(lesson => {
    const lessonCenter = lesson.offsetTop + lesson.clientHeight/2;
    const lessonfromBottom = window.scrollY + window.innerHeight;

    if(lessonCenter > window.scrollY && lessonCenter < lessonfromBottom) {
      lesson.classList.add('straighten');
      console.log("lesson.offsetTop = " + lesson.offsetTop + " lessonCenter = " + lessonCenter);
     } else {
       console.log(lesson.offsetTop)
      lesson.classList.remove('straighten');
    }
  })
}

window.addEventListener('scroll', debounce(lessonRotate));