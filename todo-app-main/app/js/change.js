const change = document.querySelector(".change");
const body = document.querySelector(".body");
const light = document.querySelector(".body-light");
const dark = document.querySelector(".body-dark");
const footerGrid = document.querySelector(".footer__grid");
const footerGrid2 = document.querySelector(".footer__grid2");
const mainInput = document.querySelector(".main__input");
const listContainer = document.querySelector(".main__todoContainer--list");
const checkSpan = document.querySelector(".check");
const textBox = document.querySelector(".textBox");

change.addEventListener("click", changeTheme);

function changeTheme() {
  if (body.classList.contains("body-light")) {
    //add dark
    body.classList.remove("body-light");
    body.classList.add("body-dark");

    change.classList.remove("change-light");
    change.classList.add("change-dark");

    footerGrid.style.backgroundColor = ""; //removes the inline-element bg White
    footerGrid.classList.add("footer__grid-dark");

    footerGrid2.style.backgroundColor = ""; //removes the inline-element bg White
    footerGrid2.classList.add("footer__grid-dark");

    mainInput.style.removeProperty("background-color");
    mainInput.classList.add("main__input-dark");

    listContainer.classList.remove("main__todoContainer--list-light");
    listContainer.classList.add("main__todoContainer--list-dark");

    checkSpan.classList.remove("checkBig");
    checkSpan.classList.add("check-dark");

    textBox.classList.add("darkTextBox");
  } else {
    //add light
    body.classList.remove("body-dark");
    body.classList.add("body-light");

    change.classList.add("change-light");
    change.classList.remove("change-dark");

    footerGrid.style.backgroundColor = "white";

    footerGrid.classList.remove("footer__grid-dark");

    footerGrid2.style.backgroundColor = "white";
    footerGrid2.classList.remove("footer__grid-dark");

    mainInput.style.backgroundColor = "white";

    listContainer.classList.add("main__todoContainer--list-light");
    listContainer.classList.remove("main__todoContainer--list-dark");

    checkSpan.classList.remove("check-dark");

    textBox.classList.remove("darkTextBox");
  }
}
