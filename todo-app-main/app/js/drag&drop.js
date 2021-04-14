todoList.addEventListener("dragstart", function (e) {
  const item = e.target; //thing being dragged

  console.log(item);
  item.classList.add("draggable");
});

todoList.addEventListener("dragend", function (e) {
  const item = e.target; //thing being dragged

  item.classList.remove("draggable");
});

todoList.addEventListener("dragover", function (e) {
  e.preventDefault();
  const item = e.target; //thing being dragged
  const afterElement = getDragAfterElement(todoList, e.clientY); //things not being dragged
  const draggable = document.querySelector(".draggable"); //marking the thing that got dragged

  if (afterElement !== null) {
    todoList.insertBefore(draggable, afterElement); //drags the marked thing
  }
});

function getDragAfterElement(todoList, y) {
  const draggableElements = [
    ...todoList.querySelectorAll(".main__input--padding:not(.draggable)"),
  ]; // the [...] == a spread operator (iterating through the childnodes of main__input--list)

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect(); //get element's size and position relative to the viewport
      const offset = y - box.top - box.height / 2; //position from the middle of other children

      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
