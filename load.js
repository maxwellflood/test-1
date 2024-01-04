document.addEventListener("DOMContentLoaded", function () {
  console.log("hello");

  gsap.defaults({ ease: "power1.inOut" });

  let loaderTL = gsap.timeline({
    onComplete: () => {
      console.log("completed");
    },
  });
  loaderTL
    .to(".loader-overlay", {
      opacity: 0,
      duration: 0.2,
      delay: 0.4,
      ease: "power2.inOut",
    })
    .set(".loader-overlay", { display: "none" })
    .from(".page-wrapper", {
      opacity: 0,
      y: -64,
      duration: 0.75,
      ease: "power2.out",
      delay: 0.5,
    })
    .from(
      ".nav-animate",
      { opacity: 0, duration: 0.75, ease: "power2.out", delay: 0.5 },
      "<",
    );
});
