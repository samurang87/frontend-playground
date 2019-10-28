let acc = document.getElementsByClassName("accordion");  //querySelector one element, querySelectorAll

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(e) {  // removeEventListener to stop
    e.target.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
