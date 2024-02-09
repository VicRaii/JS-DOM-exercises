//! Utiliza el array para crear dinamicamente
//! una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const mainDiv = document.querySelector("div");

const createUl = () => {
  const newUl = document.createElement("ul");
  mainDiv.appendChild(newUl);

  for (const place of places) {
    const createLi = document.createElement("li");
    newUl.appendChild(createLi);
    createLi.textContent = place;
  }
};

createUl();
