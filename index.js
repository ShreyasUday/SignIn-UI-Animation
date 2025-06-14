document.querySelector(".toggle").addEventListener("click", function () {
  if (document.querySelector("#pword").type === "password") {
    document.querySelector("#pword").type = "text";
  } else {
    document.querySelector("#pword").type = "password";
  }
});
for (let index = 0; index < 2; index++) {
  document
    .querySelectorAll("p, .toggle")
    [index].addEventListener("mouseenter", function () {
      document
        .querySelectorAll("p, .toggle")
        [index].classList.add("toggle-background");
    });
}
for (let index = 0; index < 2; index++) {
  document
    .querySelectorAll("p, .toggle")
    [index].addEventListener("mouseleave", function () {
      document
        .querySelectorAll("p, .toggle")
        [index].classList.remove("toggle-background");
    });
}
var box = document.querySelector(".mainContainer");
var input = document.querySelectorAll("input,a,button");
var foc = false;
document
  .querySelector(".signin-box")
  .addEventListener("mouseenter", function () {
    box.classList.remove("collapsed");
    box.classList.add("expanded");
  });
document
  .querySelector(".signin-box")
  .addEventListener("mouseleave", function () {
    if (!foc) {
      box.classList.remove("expanded");
      box.classList.add("collapsed");
    }
  });
for (let index = 0; index < input.length; index++) {
  input[index].addEventListener("focus", function () {
    box.classList.remove("collapsed");
    box.classList.add("expanded");
    foc = true;
  });
  input[index].addEventListener("blur", function () {
    setTimeout(function () {
      foc = box.contains(document.activeElement);
      if (!foc && !box.matches(":hover")) {
        box.classList.remove("expanded");
        box.classList.add("collapsed");
      }
    }, 0);
  });
}
