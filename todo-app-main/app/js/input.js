const input = document.getElementById("myInput");
const mainInputs = document.querySelector(".main__input");
const button = document.getElementById("myBtn");
const todoMain = document.querySelector(".main__todoContainer");
const todoList = document.querySelector(".main__todoContainer--list");
const check = document.querySelector(".check");
const filterToDo = document.querySelector(".footer");
const filterToDo2 = document.querySelector(".footer__grid2");
const clear = document.querySelector(".footer__clearComp");
const counter = document.querySelector(".footer__counter");
const footerAll = document.querySelector(".footer__all");
const footerActiv = document.querySelector(".footer__active");
const footerComp = document.querySelector(".footer__completed");
const footerClear = document.querySelector(".footer__clearComp");

let count = 0;

window.addEventListener("DOMContentLoaded", getTodos);
button.addEventListener("click", addTodo); //adds new item in todo list
todoList.addEventListener("click", deleteItem); //delets items in todo list
mainInputs.addEventListener("mouseover", function (e) {
  //input hover state
  const focus = e.target;
  if (focus.classList[0] == "textBox") {
    check.classList.add("checkBig");
  } else {
    check.classList.remove("checkBig");
  }
});

function countItems() {
  //counts how many items there are in the list
  console.log(count);
  return count < 0 ? (count = 0) : (counter.innerHTML = count); //min number = 0
}

//Enter function (when enter key is pressed)
function addTodo() {
  if (input.value.length >= 4) {
    //if the input meets the text length requirement
    count++;
    countItems(); //counts how many items are left
    //create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("main__input");
    todoDiv.classList.add("main__input--padding");
    todoDiv.setAttribute("draggable", "true");

    //add todo to local storage
    saveLocalStorage(input.value);

    //check trash button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trashButton");
    todoDiv.appendChild(trashButton);

    //create lists
    const newTodo = document.createElement("li");
    newTodo.innerText = input.value;
    newTodo.classList.add("todo-item");
    newTodo.classList.add("unchecked");
    todoDiv.appendChild(newTodo); //turns newTodo a child of todoDive

    //create check
    const checkButton = document.createElement("span");
    checkButton.classList.add("check");
    checkButton.classList.add("pointer");
    todoDiv.appendChild(checkButton);

    //append list
    todoList.appendChild(todoDiv);

    //reappearing trashButton
    todoDiv.addEventListener("mouseover", function () {
      trashButton.classList.add("trashMobileButton");
    });
    todoDiv.addEventListener("mouseout", function () {
      trashButton.classList.remove("trashMobileButton");
    });
  }

  //clean input
  input.value = "";
}

function deleteItem(e) {
  const item = e.target; //targets where the mouse clicks (from the click eventlistener)
  const todo = item.parentElement;

  //delete todo items
  if (item.classList[0] == "trashButton") {
    //checks if first class is trashButton
    item.classList.add("trashSlider");
    todo.classList.add("trashSlide");
    todo.addEventListener("animationend", function () {
      //if animationends
      //counts how many items are left
      if (todo.classList.contains("checked")) {
        count++;
        countItems();
      }
      removeLocalStorage(todo);
      todo.remove(); //deletes parentElement == deleting itself as well
      count--;
      countItems();
    });
  }

  if (item.classList[0] == "check" || item.classList[0] == "todo-item") {
    todo.classList.toggle("checked"); //checks todo item
    //animation stuff below
    if (todo.classList.contains("checked")) {
      //check
      count--;
      todo.classList.remove("unchecked");
    } else {
      count++;
      todo.classList.remove("checked"); //unchecked
      todo.classList.toggle("unchecked");
    }
    countItems();
  }
  countItems();
}

function saveLocalStorage(todo) {
  //check if already have lists in there bruh
  let todos;

  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;

  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    //create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("main__input");
    todoDiv.classList.add("main__input--padding");
    todoDiv.setAttribute("draggable", "true");

    //check trash button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trashButton");
    todoDiv.appendChild(trashButton);

    //create lists
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    newTodo.classList.add("unchecked");
    todoDiv.appendChild(newTodo); //turns newTodo a child of todoDive

    //create check
    const checkButton = document.createElement("span");
    checkButton.classList.add("check");
    checkButton.classList.add("pointer");
    todoDiv.appendChild(checkButton);

    //append list
    todoList.appendChild(todoDiv);

    //reappearing trashButton
    todoDiv.addEventListener("mouseover", function () {
      trashButton.classList.add("trashMobileButton");
    });
    todoDiv.addEventListener("mouseout", function () {
      trashButton.classList.remove("trashMobileButton");
    });
  });
}

function removeLocalStorage(todo) {
  let todos;

  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const innerTodo = todo.children[1].innerText;

  console.log(innerTodo);

  todos.splice(todos.indexOf(innerTodo), 1);
  localStorage.setItem("todos", JSON.stringify(todos)); // updates after removing item
}
