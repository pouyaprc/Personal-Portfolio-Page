// This code block will run after the page has completely loaded
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    // If using desktop browser
    if (window.innerWidth > 1200) {
      // Onload animations on main
      const mainIntro = document.querySelector(".main-intro");
      const mainSpotlight = document.querySelector(".main-spotlight");
      let mainQuotes = document.querySelectorAll(".main-quotes p");
      mainIntro.style.transition = 'All 1s ease-in-out';
      mainSpotlight.style.transition = 'All 1s ease-in-out 650ms';
      mainQuotes[0].style.transition = 'All 500ms ease-in-out 1.65s';
      mainQuotes[1].style.transition = 'All 1s ease-in-out 2s';
      mainIntro.style.opacity = '1';
      mainSpotlight.style.transform = 'scaleX(1) translateX(0px)';
      mainQuotes[0].style.opacity = '1';
      mainQuotes[1].style.opacity = '1';

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
      next.style.transition = 'All 200ms ease-in-out';
      prev.style.transition = 'All 200ms ease-in-out';
      next.addEventListener('click', function(){
        prev.style.opacity = '1';
      });
    }
  }, 1000);
});
