document.addEventListener("DOMContentLoaded", function () {
  // deklarere en variabel med identifikatoren "burgerIcon".
  // den bliver tildelt værdien/classen ".burger-icon" fra html dokumentet.
  // det er der man henter det ned fra DOM'en for at kunne manipulere med det.
  const burgerIcon = document.querySelector(".burger-icon");
  const menu = document.querySelector(".menu");

  // her tilføjer en addEventListener med click function.
  // vi giver denne click EventListener en toggle function.
  // toggle functionen er koblet på active i css.
  burgerIcon.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
