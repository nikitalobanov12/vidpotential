
const highlight = document.querySelectorAll(".highlight");
const footer = document.querySelector(".footer");
const closeBtn = document.querySelector(".close-btn");
const contact = document.querySelector("#contact");
const aboutButton = document.querySelector(".about--button");
const contactButton = document.querySelector(".contact--button");
const subtitle = document.querySelector(".subtitle");
const hiddens = document.querySelectorAll(".hidden");
// hook that takes a classname or an element as a parameter and returns whether or not it is visible
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) {
        subtitle.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5, //the percentage of the content that needs to be on the screen
    // rootMargin: '-500px' //the margin for the animation to start, you can use negative numbers to shrink the container and positive numbers to increase the container
  }
);

//give the model "#contact" the "show" class when the "about--button" or "contact--button" is clicked
aboutButton.addEventListener("click", () => {
  contact.classList.add("popup");
  document.body.style.overflow = "hidden";
});
contactButton.addEventListener("click", () => {
  contact.classList.add("popup");
  document.body.style.overflow = "hidden";
});

//remove the "popup" class from the model "#contact" when the ".close-btn" button is clicked
closeBtn.addEventListener("click", () => {
  contact.classList.remove("popup");
  //set the overflow on the body to visible
  document.body.style.overflow = "auto";
});

//add the "popup" class from the modal "#contact" when the highlight is clicked
highlight.forEach((highlight) => {
  highlight.addEventListener("click", () => {
    contact.classList.add("popup");
    document.body.style.overflow = "hidden";
  });
});

//add the "popup" class from the modal "#contact" when the user scrolls to the footer
const footerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        contact.classList.add("popup");
        //disable scrolling on  the body
        document.body.style.overflow = "hidden";
      }
    });
  },
  {
    threshold: 0,
  }
);

footerObserver.observe(footer);

hiddens.forEach((hidden) => {
  observer.observe(hidden);
});
