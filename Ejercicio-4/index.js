//! 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
//! evento click que ejecute un console log con la información del evento del click

const clickEvent = document.getElementsByClassName("click");
console.log(clickEvent);
const button = document.createElement("button");
button.textContent = "Haz clic aquí";
button.id = "btnToClick";

document.body.insertBefore(button, document.body.firstChild);

document
  .getElementById("btnToClick")
  .addEventListener("click", function (event) {
    console.log(event);
  });

//! 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focusEvent = document.querySelector(".focus");

focusEvent.addEventListener("focus", function (event) {
  console.log("Valor del focus: ", focusEvent.value);
});

//! 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const valueEvent = document.querySelector(".value");
console.log(valueEvent);

valueEvent.addEventListener("input", function (event) {
  console.log("Valor del input: ", valueEvent.value);
});
