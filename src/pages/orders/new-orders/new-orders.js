const musicCheckbox = document.getElementById("musicCheckbox");
const musicInput = document.getElementById("musicInput");
const cabinTempCheckbox = document.getElementById("cabinTempCheckbox");
const cabinTempInput = document.getElementById("cabinTempInput");

musicCheckbox.addEventListener("change", function () {
  if (this.checked) {
    musicInput.classList.remove("d-none");
  } else {
    musicInput.classList.add("d-none");
  }
});

cabinTempCheckbox.addEventListener("change", function () {
  if (this.checked) {
    cabinTempInput.classList.remove("d-none");
  } else {
    cabinTempInput.classList.add("d-none");
  }
});
