// <-------------------- ProgressBar -------------------->

const ProgressBar = document.querySelector(".progress_bar");
const bars = document.querySelectorAll(".progress-value");
const proressArray = [90, 100, 95, 100];

const io = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      [...bars].map((item, index) => {
        console.log(item);
        item.classList.add("animate-progress-" + proressArray[index]);
      });
      observer.disconnect();
    }
  });
});

io.observe(ProgressBar);
