const accordion = document.querySelectorAll("ul .accordion");

accordion.forEach((accord, accIndex) => {
  const icon = accord.querySelector(".header i");
  icon.addEventListener("click", () => {
    accord.classList.toggle("active");
  });
  accordion.forEach((accord2, accIndex2) => {
    icon.addEventListener("click", () => {
      if (accIndex !== accIndex2) {
        accord2.classList.remove("active");
      }
    });
  });
});
