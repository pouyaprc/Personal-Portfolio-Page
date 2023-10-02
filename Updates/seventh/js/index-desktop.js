// Eliminate the passed element after a delay
function Elimination(element, delay) {
  setTimeout(function() {
    element.style.display = 'none';
  }, delay);
}


// Make the passed element after a delay
function Make(element, delay) {
  setTimeout(function() {
    element.style.display = 'inline-block';
  }, delay);
}

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
      const aboutSkill = document.querySelector(".index-about .index-about-skill");
      const observer = new IntersectionObserver(
        function(entries,observer) {
          entries.forEach(entry => {
            // Check if we've scrolled to the element
            if(!entry.isIntersecting) {
              // The elemnt is not observed
            }
            else {
              // The elemnt is observed
              let skillBar = document.querySelectorAll(".index-about .index-about-skill-bar-fill");
              let skillPrc = document.querySelectorAll(".index-about .index-about-skill-bar-fill p");
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
      // Listen for a click on main-next&previous pointers
      const next = document.querySelector(".main-next");
      const prev = document.querySelector(".main-prev");
      let clickCounter = 1;

      // Mouse-on pointer animation
      function nextPrevIn(event) {
        let np = event.target;
        np.style.transform = 'scale(1.08)';
      }
      // Mouse-out pointer animation
      function nextPrevOut(event) {
        let np = event.target;
        np.style.transform = 'scale(1)';
      }

      next.style.transition = 'All 400ms ease-in-out';
      prev.style.transition = 'All 400ms ease-in-out';
      next.addEventListener('mouseenter', nextPrevIn);
      next.addEventListener('mouseout', nextPrevOut);

      next.addEventListener('click', function() {
        // Assign the counter value -> slide#
        clickCounter++;

        // If slide# we're in is two
        if(clickCounter == 2) {
          // Disappear slide#1
          mainIntro.style.transition = 'All 700ms ease-in-out';
          mainQuotes.style.transition = 'All 700ms ease-in-out';
          mainSpotlight.style.transition = 'All 700ms ease-in-out';
          mainIntro.style.transform= 'translate(-60px, 60px) scale(0.7)';
          mainQuotes.style.transform = 'translate(-60px, 60px) scale(0.7)';
          mainSpotlight.style.transform = 'translate(-60px, 60px) scale(0.7)';
          mainIntro.style.opacity = '0';
          mainQuotes.style.opacity = '0';
          mainSpotlight.style.opacity = '0';
          Elimination(mainIntro, 750);
          Elimination(mainQuotes, 750);
          Elimination(mainSpotlight, 750);

          // Make the previous pointer active
          prev.style.opacity = '1';
          prev.style.cursor = 'pointer';
          prev.addEventListener('mouseenter', nextPrevIn);
          prev.addEventListener('mouseout', nextPrevOut);

          // Appear the second slide
          const mainGallery = document.querySelector(".main-gallery");
          setTimeout(function() {
            mainGallery.style.display = 'flex';
          }, 750);
          setTimeout(function() {
            mainGallery.style.opacity = '1';
          }, 1000);
        }

        // If slide# we're in is three
        if(clickCounter == 3) {
          // Appear slide#3
          //const mainSkill = document.querySelector("");
          //Make(mainSkill, 750);
          //setTimeout(function() {
          //  mainSkill.style.opacity = '1';
          //}, 1000);

          // Disappear slide#2
          const mainGallery = document.querySelector(".main-gallery");
          mainGallery.style.opacity = '0';
          Elimination(mainGallery, 400);
        }
      });

      prev.addEventListener('click', function(){
        // Assign the counter value -> slide#
        clickCounter--;

        // If slide# we're in is one
        if(clickCounter == 1) {
          // Appear slide#1
          Make(mainIntro, 750);
          Make(mainQuotes, 750);
          Make(mainSpotlight, 750);
          setTimeout(function() {
            mainSpotlight.style.transition = 'All 700ms ease-in-out';
            mainIntro.style.transform= 'translate(0px, 0px) scale(1)';
            mainQuotes.style.transform = 'translate(0px, 0px) scale(1)';
            mainSpotlight.style.transform = 'translate(0px, 0px) scale(1)';
            mainIntro.style.opacity = '1';
            mainQuotes.style.opacity = '1';
            mainSpotlight.style.opacity = '1';
          }, 1000);

          // Make the previous pointer inactive
          prev.style.opacity = '0.5';
          prev.style.cursor = 'auto';
          prev.removeEventListener('mouseenter', nextPrevIn);

          // Disappear slide#2
          const mainGallery = document.querySelector(".main-gallery");
          mainGallery.style.opacity = '0';
          Elimination(mainGallery, 400);
        }
      });

      //listen for mouse-hover on main-category-subjects
      let catOverlay = document.querySelectorAll(".main-category-subject .dark-overlay");
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

      // Second slide(gallery-slide)
      let mainCert = document.querySelectorAll(".main-gallery > a");
      mainCert.forEach((certif) => {
        certif.addEventListener("mouseover", () => {
          let darkOverlay = certif.children[0];
          let verf = certif.children[1];
          let certStamp = certif.children[2];
          darkOverlay.style.opacity = '0.6';
          verf.style.opacity = '1';
          certStamp.style.opacity = '1';
        });

        certif.addEventListener("mouseout", () => {
          let darkOverlay = certif.children[0];
          let verf = certif.children[1];
          let certStamp = certif.children[2];
          darkOverlay.style.opacity = '0';
          verf.style.opacity = '0';
          certStamp.style.opacity = '0';
        });
      });
    }
  }, 1000);
});
