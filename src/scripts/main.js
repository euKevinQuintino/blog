function toStart() {
  window.location.reload();
}

function changeCategory(category) {
  if (category == "esports") {
    document.querySelector(".design").style.display = "none";
    document.querySelector(".esports").style.display = "block";
  } else if (category == "design") {
    document.querySelector(".esports").style.display = "none";
    document.querySelector(".design").style.display = "block";
  }
}

//gsap
gsap.from(".blog__homepage__card-section", {
  scrollTrigger: ".blog__homepage__card-section",
  start: "top center",
  opacity: 0,
  y: 100,
  duration: 0.69,
  delay: 0.69,
});
