const videos = document.querySelectorAll(".intro-video");

// hook that takes a classname or an element as a parameter and returns whether or not it is visible
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  },
  {
    // threshold: 1, //the percentage of the content that needs to be on the screen
    rootMargin: '-100px' //the margin for the animation to start, you can use negative numbers to shrink the container and positive numbers to increase the container
  }
);

videos.forEach((video) => {
  observer.observe(video);
});
