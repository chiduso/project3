const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }else {
      entry.target.classList.remove('show')
    }
  });
});


const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElementsR = document.querySelectorAll('.hidden-r');
const hiddenElementsT = document.querySelectorAll('.hidden-t');


hiddenElements.forEach((el) => observer.observe(el));
hiddenElementsR.forEach((el) => observer.observe(el));
hiddenElementsT.forEach((el) => observer.observe(el));

