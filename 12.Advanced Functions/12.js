const add = function () {
  console.log(2 + 3);
};
add();
add();

const runTwice = function (fun) {
  fun();
  fun();
};
runTwice(add);

const finishedBtt = document.querySelector(".finished-btt");

function changeToFinished() {
  finishedBtt.innerHTML = "Loading...";
  setTimeout(function () {
    finishedBtt.innerHTML = "Finished";
  }, 1000);
}

const addToCartBtn = document.querySelector(".add-to-cart-btt");
const addToCartText = document.querySelector(".add-to-cart-text");
let timeoutID;

function addToCart() {
  addToCartText.innerHTML = "Added to the cart!";
  clearTimeout(timeoutID);
  timeoutID = setTimeout(function () {
    addToCartText.innerHTML = "";
  }, 2000);
}

let messagesCount = 0;

function changeTitle() {
  setInterval(function () {
    if (messagesCount === 0) {
      document.title = "Lesson 12";
    } else if (document.title === `(${messagesCount}) New messages`) {
      document.title = "Lesson 12";
    } else {
      document.title = `(${messagesCount}) New messages`;
    }
  }, 1000);
}
function addMessage() {
  messagesCount++;
}
function removeMessage() {
  if (messagesCount > 0) {
    messagesCount--;
  }
}
changeTitle();
