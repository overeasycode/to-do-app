filterToDo.addEventListener("mouseover", function (e) {
  const itemFirstClass = e.target.classList[0];
  switch (itemFirstClass) {
    case "footer__all":
      if (!footerAll.classList.contains("active")) {
        footerAll.classList.add("footerHover");
      }
      break;
    case "footer__active":
      if (!footerActiv.classList.contains("active")) {
        footerActiv.classList.add("footerHover");
      }
      break;
    case "footer__completed":
      if (!footerComp.classList.contains("active")) {
        footerComp.classList.add("footerHover");
      }
      break;
    case "footer__clearComp":
      if (!footerClear.classList.contains("active")) {
        footerClear.classList.add("footerHover");
      }
      break;
  }
});
filterToDo.addEventListener("mouseout", function (e) {
  const itemFirstClass = e.target.classList[0];

  switch (itemFirstClass) {
    case "footer__all":
      footerAll.classList.remove("footerHover");
      break;
    case "footer__active":
      footerActiv.classList.remove("footerHover");
      break;
    case "footer__completed":
      footerComp.classList.remove("footerHover");
      break;
    case "footer__clearComp":
      footerClear.classList.remove("footerHover");
      break;
  }
});

filterToDo.addEventListener("click", filterItems); // filter items in todo list

//Filter Items in todo list
function filterItems(e) {
  const todos = todoList.childNodes; //children of the main__input--list class
  const todoItems = e.target.classList; //targets the clicked class
  const allItems = [...todos]; //iterates through every items in an array

  todoItems.remove("footerHover");
  countItems(); //updates the list

  if (todoItems[0] == "footer__all") {
    footerAll.classList.add("active");
  } else if (
    todoItems[0] == "footer__active" ||
    todoItems[0] == "footer__completed"
  ) {
    footerAll.classList.remove("active");
  }

  if (todoItems[0] == "footer__active") {
    footerActiv.classList.add("active");
  } else if (
    todoItems[0] == "footer__all" ||
    todoItems[0] == "footer__completed" ||
    todoItems[0] == "footer__clearComp"
  ) {
    footerActiv.classList.remove("active");
  }

  if (todoItems[0] == "footer__completed") {
    footerComp.classList.add("active");
  } else if (
    todoItems[0] == "footer__active" ||
    todoItems[0] == "footer__all" ||
    todoItems[0] == "footer__clearComp"
  ) {
    footerComp.classList.remove("active");
  }

  if (todoItems[0] == "footer__clearComp") {
    footerAll.classList.add("active");
  }

  allItems.forEach(function (todo) {
    return todoItems.contains("footer__all")
      ? (todo.style.display = "flex")
      : todoItems.contains("footer__clearComp")
      ? todo.classList.contains("checked")
        ? todo.remove()
        : (todo.style.display = "flex")
      : todoItems.contains("footer__active")
      ? !todo.classList.contains("checked")
        ? (todo.style.display = "flex")
        : (todo.style.display = "none")
      : todoItems.contains("footer__completed")
      ? todo.classList.contains("checked")
        ? (todo.style.display = "flex")
        : (todo.style.display = "none")
      : null;
  });
}

//filtertodo mobile version
const footerAll2 = document.querySelector(".fa2");
const footerActiv2 = document.querySelector(".fac2");
const footerComp2 = document.querySelector(".fc2");
const footerClear2 = document.querySelector(".fcc2");

filterToDo2.addEventListener("click", filterItems2); // filter items in todo list

//Filter Items in todo list clone 2
function filterItems2(e) {
  const todos = todoList.childNodes; //children of the main__input--list class
  const todoItems = e.target.classList; //targets the clicked class
  const allItems = [...todos]; //iterates through every items in an array

  todoItems.remove("footerHover");
  countItems(); //updates the list

  if (todoItems[1] == "fa2") {
    footerAll2.classList.add("active");
  } else if (todoItems[1] == "fac2" || todoItems[1] == "fc2") {
    footerAll2.classList.remove("active");
  }

  if (todoItems[1] == "fac2") {
    footerActiv2.classList.add("active");
  } else if (
    todoItems[1] == "fa2" ||
    todoItems[1] == "fc2" ||
    todoItems[0] == "footer__clearComp"
  ) {
    footerActiv2.classList.remove("active");
  }

  if (todoItems[0] == "footer__completed") {
    footerComp2.classList.add("active");
  } else if (
    todoItems[1] == "fac2" ||
    todoItems[1] == "fa2" ||
    todoItems[0] == "footer__clearComp"
  ) {
    footerComp2.classList.remove("active");
  }

  if (todoItems[0] == "footer__clearComp") {
    footerAll2.classList.add("active");
  }

  allItems.forEach(function (todo) {
    return todoItems.contains("footer__all")
      ? (todo.style.display = "flex")
      : todoItems.contains("footer__clearComp")
      ? todo.classList.contains("checked")
        ? todo.remove()
        : (todo.style.display = "flex")
      : todoItems.contains("footer__active")
      ? !todo.classList.contains("checked")
        ? (todo.style.display = "flex")
        : (todo.style.display = "none")
      : todoItems.contains("footer__completed")
      ? todo.classList.contains("checked")
        ? (todo.style.display = "flex")
        : (todo.style.display = "none")
      : null;
  });
}

filterToDo2.addEventListener("mouseover", mouseOver2);

function mouseOver2(e) {
  const itemSecClass = e.target.classList[1];

  switch (itemSecClass) {
    case "fa2":
      if (!footerAll2.classList.contains("active")) {
        footerAll2.classList.add("footerHover");
      }
      break;
    case "fac2":
      if (!footerActiv2.classList.contains("active")) {
        footerActiv2.classList.add("footerHover");
      }
      break;
    case "fc2":
      if (!footerComp2.classList.contains("active")) {
        footerComp2.classList.add("footerHover");
      }
      break;
  }
}
filterToDo2.addEventListener("mouseout", function (e) {
  const itemSecClass = e.target.classList[1];

  switch (itemSecClass) {
    case "fa2":
      footerAll2.classList.remove("footerHover");
      break;
    case "fac2":
      footerActiv2.classList.remove("footerHover");
      break;
    case "fc2":
      footerComp2.classList.remove("footerHover");
      break;
  }
});
