const bodyColor = document.querySelector("body");
const changeText = document.querySelector("#clicked-color");
const notShow = document.querySelector("#not-show");
const submitButton = document.querySelector("#submit-btn");
let customColorInput = document.querySelector("#color-name");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let inputValue = customColorInput.value;
  if (inputValue !== "") {
    bodyColor.style.backgroundColor = inputValue;
    changeText.textContent = customColorInput.value;
    notShow.style.display = "none";
  }
});
