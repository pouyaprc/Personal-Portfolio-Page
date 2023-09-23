// This code block will run after the page has completely loaded
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    // If using desktop browser
    if (window.innerWidth > 1200) {
      // Onload animations on main
      const mainIntro = document.querySelector(".main-intro");
      const mainQuotes = document.querySelector(".main-quotes");
      const mainSpotlight = document.querySelector(".main-spotlight");
      let mainQuotesText = document.querySelectorAll(".main-quotes p");
      mainIntro.style.transition = 'All 1s ease-in-out';
      mainSpotlight.style.transition = 'All 1s ease-in-out 650ms';
      mainQuotesText[0].style.transition = 'All 500ms ease-in-out 1.65s';
      mainQuotesText[1].style.transition = 'All 1s ease-in-out 2s';
      mainIntro.style.opacity = '1';
      mainSpotlight.style.transform = 'scaleX(1) translateX(0px)';
      mainQuotesText[0].style.opacity = '1';
      mainQuotesText[1].style.opacity = '1';

      // On observe animation for about-skills section
      const aboutSkill = document.querySelector(".index-about-skill");
      const observer = new IntersectionObserver(
        function(entries,observer) {
          entries.forEach(entry => {
            if(!entry.isIntersecting) {

            }
            else {
              let skillBar = document.querySelectorAll(".index-about-skill-bar-fill");
              let skillPrc = document.querySelectorAll(".index-about-skill-bar-fill p");
              let percentages = [95, 85, 75, 55, 65, 70];

              for(let i=0; i<skillBar.length; i++) {
                setTimeout(function() {

                skillBar[i].style.transition = 'All 1s ease-in-out';
                skillPrc[i].style.transition = 'All 50ms ease-in-out';
                skillBar[i].style.width = percentages[i] + '%';

                for(let j=0; j<=percentages[i]; j++)
                  setTimeout(function() {
                    skillPrc[i].innerHTML = j + '%';
                  }, 10 * j);
                }, 50 * i);
              }
              observer.unobserve(entry.target);
            }
          });
      }, {threshold: 1});

      observer.observe(aboutSkill);
      // Listen for a click on the main-nex&previous
      const next = document.querySelector(".main-next");
      const prev = document.querySelector(".main-prev");
      let clickCounter = 0;

      function nextPrevIn(event) {
        let np = event.target;
        np.style.transform = 'scale(1.08)';
      }
      function nextPrevOut(event) {
        let np = event.target;
        np.style.transform = 'scale(1)';
      }

      next.style.transition = 'All 400ms ease-in-out';
      prev.style.transition = 'All 400ms ease-in-out';
      next.addEventListener('mouseenter', nextPrevIn);
      next.addEventListener('mouseout', nextPrevOut);

      next.addEventListener('click', function(){
        clickCounter++;
        if(clickCounter == 1) {
          mainIntro.style.transition = 'All 700ms ease-in-out';
          mainQuotes.style.transition = 'All 700ms ease-in-out';
          mainSpotlight.style.transition = 'All 700ms ease-in-out';
          mainIntro.style.transform= 'translate(-60px, 60px) scale(0.7)';
          mainQuotes.style.transform = 'translate(-60px, 60px) scale(0.7)';
          mainSpotlight.style.transform = 'translate(-60px, 60px) scale(0.7)';
          mainIntro.style.opacity = '0';
          mainQuotes.style.opacity = '0';
          mainSpotlight.style.opacity = '0';
          prev.style.opacity = '1';
          prev.style.cursor = 'pointer';
          prev.addEventListener('mouseenter', nextPrevIn);
          prev.addEventListener('mouseout', nextPrevOut);
        }
      });

      prev.addEventListener('click', function(){
        clickCounter--;
        if(clickCounter == 0) {
          mainSpotlight.style.transition = 'All 700ms ease-in-out';
          mainIntro.style.transform= 'translate(0px, 0px) scale(1)';
          mainQuotes.style.transform = 'translate(0px, 0px) scale(1)';
          mainSpotlight.style.transform = 'translate(0px, 0px) scale(1)';
          mainIntro.style.opacity = '1';
          mainQuotes.style.opacity = '1';
          mainSpotlight.style.opacity = '1';
          prev.style.opacity = '0.5';
          prev.style.cursor = 'auto';
          prev.removeEventListener('mouseenter', nextPrevIn);
        }
      });

      //listen for mouse-hover on main-category-subjects
      let catOverlay = document.querySelectorAll(".dark-overlay");
      catOverlay.forEach((overlay) => {
        overlay.addEventListener("mouseover", () => {
          overlay.style.opacity = '0';
          overlay.style.border = '5px solid #fff';
        });

        overlay.addEventListener("mouseout", () => {
          overlay.style.opacity = '0.2';
          overlay.style.border = '';
        });
      });

      // Listen for click on main-category-subjects
      let catSubject = document.querySelectorAll(".main-category-subject");
      catSubject.forEach((subject) => {
        subject.addEventListener("click", () => {
          // Remove border from all subjects
          catSubject.forEach((borderedSub) => {
            borderedSub.style.border = 'none';
          });
          // Add border to clicked subject
          subject.style.transition = "All 200ms ease-in-out";
          subject.style.border = '2px solid #f1f1f1';
        });
      });

    }
  }, 1000);
});
