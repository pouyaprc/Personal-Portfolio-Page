// if using desktop browser
if (window.innerWidth > 1200) {
    let mainIntro = document.querySelector(".main-intro");
    let mainQuotes = document.querySelector(".main-quotes");

    document.addEventListener("scroll", myFunction);
    function myFunction() {
      let num = window.scrollY / window.innerHeight;

      mainIntro.style.transition = 'All ease-in-out 350ms';
      mainQuotes.style.transition = 'All ease-in-out 350ms';

      if(num <= 1) {
        mainIntro.style.opacity = 1-num;
        mainIntro.style.transform = 'translateX(' + (-num * 100) + '%) rotate(' + num * 50 + 'deg)';
        mainQuotes.style.opacity = 1-num;
        mainQuotes.style.transform = 'translateX(' + (num * 100) + '%) rotate(' + -num * 50 + 'deg)';
        console.log(num);
      }
    }
}
