gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false
});

window.addEventListener("DOMContentLoaded", (event) => {
  // Animate on scroll function

  function newScrollAnimation(
    trigger,
    target,
    axis,
    value,
    scrub,
    startValue,
    endValue,
    opacityValue
  ) {
    let triggerElement = trigger;
    let targetElement = target;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: startValue,
        end: endValue,
        scrub: scrub
      }
    });

    // Use the "axis" argument to specify the property to animate
    let animationProperties = {
      [axis]: value,
      opacity: opacityValue
    };

    tl.from(targetElement, {
      ...animationProperties,
      duration: 1
    });
  }

  // Logo Animation

  function footerScroll() {
    newScrollAnimation(
      ".is-footer",
      ".footer-logo",
      "y",
      "50%",
      1.5,
      "top bottom",
      "bottom bottom",
      0.5 // Pass the opacity value as an argument
    );
  }

  footerScroll();

  // Mobile nav animation

  function footerScrollIfWindowSizeIsLarge() {
    console.log("Window resized");

    if (window.innerWidth < 992) {
      const footerMenuButtons = document.querySelectorAll(
        ".footer-menu-button"
      );

      footerMenuButtons.forEach((button) => {
        button.addEventListener("click", function () {
          console.log(this + "clicked");
          const submenu = this.nextElementSibling;
          const chevron = this.querySelector(".chevron-icon");

          if (submenu) {
            // let maxHeight = submenu.scrollHeight;

            if (submenu.classList.contains("expanded")) {
              //submenu.style.display = "none";
              submenu.classList.remove("expanded");
              chevron.style.transform = "rotate(0deg)";
            } else {
              //submenu.style.display = "block";
              submenu.classList.add("expanded");
              chevron.style.transform = "rotate(180deg)";
            }

            // Hide other submenus.
            document
              .querySelectorAll(".submenu.expanded")
              .forEach((otherSubmenu) => {
                if (otherSubmenu !== submenu) {
                  //otherSubmenu.style.display = "none";
                  otherSubmenu.classList.remove("expanded");
                  // Reset other chevron icons if needed
                }
              });
          }
        });
      });
    }
  }

  // Call the function when the page loads and when the window is resized
  window.addEventListener("load", footerScrollIfWindowSizeIsLarge);
  window.addEventListener("resize", footerScrollIfWindowSizeIsLarge);
});
