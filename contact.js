document
  .getElementById("side-navbar-activate")
  .addEventListener("click", function () {
    let sideNavbar = document.querySelector(".side-navbar");
    sideNavbar.style.marginRight = "0";
  });
document
  .getElementById("side-navbar-close")
  .addEventListener("click", function () {
    let sideNavbar = document.querySelector(".side-navbar");
    sideNavbar.style.marginRight = "-50%";
  });

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting
  console.log("Form submission prevented."); // Optional: Log a message for debugging
});

const toggleButton = document.getElementById("privacy-toggle");
const toggleCircle = document.getElementById("toggle-circle");

toggleButton.addEventListener("click", function () {
  const isChecked = toggleButton.getAttribute("aria-checked") === "true";

  if (isChecked) {
    toggleButton.setAttribute("aria-checked", "false");
    toggleButton.classList.remove("bg-indigo-600");
    toggleButton.classList.add("bg-gray-200");
    toggleCircle.classList.remove("translate-x-3.5");
    toggleCircle.classList.add("translate-x-0");
  } else {
    // If not checked, check it
    toggleButton.setAttribute("aria-checked", "true");
    toggleButton.classList.remove("bg-gray-200");
    toggleButton.classList.add("bg-indigo-600");
    toggleCircle.classList.remove("translate-x-0");
    toggleCircle.classList.add("translate-x-3.5");
  }
});
