console.log(document.querySelector(".test-btt").classList.contains("test-btt"));

function removePreviousToggle() {
  const toggled = document.querySelector(".d-btt-active");
  if (toggled) {
    toggled.classList.remove("d-btt-active");
  }
}
function changeDButton(className) {
  const btn = document.querySelector(`.${className}`);
  if (!btn.classList.contains("d-btt-active")) {
    removePreviousToggle();
    btn.classList.add("d-btt-active");
  } else {
    btn.classList.remove("d-btt-active");
  }
}

function handleCostKeydown(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}
function calculateTotal() {
  const inputElement = document.querySelector(".cost-input");
  const result = document.querySelector(".result");

  // Convert the numbers to cents by * 100.
  let cost = Number(inputElement.value) * 100;

  if (cost <= 0) {
    result.classList.add("error");
    result.innerHTML = "Error: cost cannot be less than $0.00";
    return;
  } else {
    result.classList.remove("error");
    if (cost < 4000) {
      cost = cost + 1000;
    }
  }

  // Convert back to dollars at the end.
  result.innerHTML = `$${cost / 100}`;
}

let calculation = localStorage.getItem("calculation") || "";

// Display the calculation when the page first loads.
displayCalculation();

function updateCalculation(value) {
  calculation += value;

  // Display the calculation on the page
  // instead of console.log
  displayCalculation();

  localStorage.setItem("calculation", calculation);
}

function displayCalculation() {
  const calculationText = document.querySelector(".calculator-text");
  calculationText.innerHTML = calculation;
}
