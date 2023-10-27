const add = () => {
  console.log(2 + 3);
};
add();
add();

const runTwice = fun => {
  fun();
  fun();
};
runTwice(add);

const finishedBtt = document.querySelector(".finished-btt");
finishedBtt.addEventListener("click", () => {
  changeToFinished();
});

function changeToFinished() {
  finishedBtt.innerHTML = "Loading...";
  setTimeout(() => {
    finishedBtt.innerHTML = "Finished";
  }, 1000);
}

const addToCartBtn = document.querySelector(".add-to-cart-btt");
const addToCartText = document.querySelector(".add-to-cart-text");
let timeoutID;
addToCartBtn.addEventListener("click", () => {
  addToCart();
});

function addToCart() {
  addToCartText.innerHTML = "Added to the cart!";
  clearTimeout(timeoutID);
  timeoutID = setTimeout(() => {
    addToCartText.innerHTML = "";
  }, 2000);
}

const addBtn = document.querySelector(".add-message");
const removeBtn = document.querySelector(".remove-message");
let messagesCount = 0;
addBtn.addEventListener("click", addMessage);
removeBtn.addEventListener("click", removeMessage);

function changeTitle() {
  setInterval(() => {
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

const multiply = (num, num2) => num * num2;

console.log(multiply(2, 3));
console.log(multiply(7, 10));

const countPositive = array => {
  let count = 0;
  array.forEach(value => {
    if (value > 0) {
      count++;
    }
  });
  return count;
};
console.log(countPositive([1, -3, 5]));

function addNum(array, num) {
  return array.map(value => value + num);
}
console.log(addNum([1, 2, 3], 2));

function removeEgg(array) {
  let eggRemoved = 0;
  return array.filter(value => {
    if (value === "egg" && eggRemoved < 2) {
      eggRemoved++;
      return false;
    }

    return true;
  });
}
console.log(removeEgg([1, "egg", "egg", "egg", "ham"]));
