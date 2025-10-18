let calculation = localStorage.getItem("calculationStr") || "";

function showCalculationStr() {
  document.querySelector(".calculationStr").innerHTML = calculation;
}
showCalculationStr();

function updateCalculationStr(value) {
  calculation += value;
  showCalculationStr();
  localStorage.setItem("calculationStr", calculation);
}
