
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
     threshold: 1, //the percentage of the content that needs to be on the screen
    // rootMargin: '-500px' //the margin for the animation to start, you can use negative numbers to shrink the container and positive numbers to increase the container
  }
);
hiddens.forEach((hidden) => {
  observer.observe(hidden); 
 
});