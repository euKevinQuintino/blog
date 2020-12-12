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
