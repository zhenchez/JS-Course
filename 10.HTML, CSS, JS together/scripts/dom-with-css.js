const subBtt = document.querySelector(".sub-btt");

function changeSubBtt() {
  if (subBtt.textContent === "Subscribe") {
    subBtt.innerHTML = "Subscribed";
    subBtt.classList.add("active");
  } else {
    subBtt.innerHTML = "Subscribe";
    subBtt.classList.remove("active");
  }
}

function handleCostKeydown(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}
function calculateTotal() {
  const inputElement = document.querySelector(".cost-input");

  // Convert the numbers to cents by * 100.
  let cost = Number(inputElement.value) * 100;

  if (cost < 4000) {
    cost = cost + 1000;
  }

  // Convert back to dollars at the end.
  document.querySelector(".result").innerHTML = `$${cost / 100}`;
}
