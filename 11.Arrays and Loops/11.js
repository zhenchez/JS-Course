const numbs = [10, 20, 30];
numbs[2] = 99;
console.log(numbs);

function getLasValue(array) {
  const lastValue = array[array.length - 1];
  console.log(lastValue);
}
getLasValue(numbs);

function arraySwap(array) {
  const firstValue = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = firstValue;
  console.log(array);
}
arraySwap(numbs);

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
console.log("----------------");
for (let i = 5; i >= 0; i--) {
  console.log(i);
}
console.log("----------------");
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
console.log("----------------");
let j = 5;
while (j >= 0) {
  console.log(j);
  j--;
}
console.log("----------------");

const num = [1, 2, 3];
let newArray = [];
for (let i = 0; i < num.length; i++) {
  newArray.push(num[i] + 1);
}
console.log(newArray);

function addOne(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 1);
  }
  console.log(newArray);
}
addOne(num);

function addNum(array, num) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + num);
  }
  console.log(newArray);
}
addNum(num, 10);

function addArray(array, array2) {
  let newArray = [];
  for (let i = 0; i < array2.length; i++) {
    newArray.push(array[i] + array2[i]);
  }
  console.log(newArray);
}
const array1 = [1, 1, 2];
const array2 = [1, 1, 3];
addArray(array1, array2);

function countPositive(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      count++;
    }
  }
  console.log(count);
}
countPositive([3, 4, 2, 1, -1, -5, -6]);

function minMax(array) {
  let minMax = { min: null, max: null };
  for (let i = 0; i < array.length; i++) {
    console.log(array.length);
    if (array.length === 1) {
      minMax.min = array[i];
      minMax.max = array[i];
    } else {
      if (array[i] > minMax.max) {
        minMax.max = array[i];
      } else if (array[i] < minMax.min) {
        minMax.min = array[i];
      }
    }
  }
  console.log(minMax);
}
minMax([3, 4, 2, 1, -1, -5, -6]);
minMax([3]);
minMax([]);

function countWords(array) {
  let count = {};
  for (let i = 0; i < array.length; i++) {
    if (!count[array[i]]) {
      count[array[i]] = 1;
    } else {
      count[array[i]]++;
    }
  }
  console.log(count);
}
countWords([
  "apple",
  "grape",
  "grape",
  "banana",
  "banana",
  "banana",
  "watermelon",
]);

function findIndex(array, word) {
  let found = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      console.log(i);
      found = true;
      break;
    }
  }
  found || console.log(-1);
}
findIndex(["apple", "grape", "grape", "banana", "search", "search"], "search");

function removeEgg(array) {
  let newArray = [];
  const copyArray = array.slice();
  const reversedArray = copyArray.reverse();
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (reversedArray[i] === "egg" && count < 2) {
      count++;
      continue;
    } else {
      newArray.push(reversedArray[i]);
    }
  }
  newArray.reverse();
  console.log(newArray);
}
const food = ["egg", "apple", "egg", "egg", "ham"];
removeEgg(food);

function fizzBuzz() {
  for (let i = 1; i < 21; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();

function findIndex2(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  return -1;
}
function unique(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (findIndex2(newArray, array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
}
unique(["apple", "grape", "grape", "banana", "search", "search"]);

// When loading the page, load from localStorage.
const todoList = JSON.parse(localStorage.getItem("todoList")) || [
  {
    name: "make dinner",
    dueDate: "2023-12-22",
  },
  {
    name: "wash dishes",
    dueDate: "2023-12-22",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();

        // Whenever we update the todo list, save in localStorage.
        saveToStorage();
      " class="delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate,
  });

  inputElement.value = "";

  renderTodoList();

  // Whenever we update the todo list, save in localStorage.
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
