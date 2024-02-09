//! 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const createDiv = document.createElement("div");
document.body.appendChild(createDiv);

//! 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const createDiv2 = document.createElement("div");
const createP = document.createElement("p");

document.body.appendChild(createDiv2);
createDiv2.appendChild(createP);
//! 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const loopDiv = () => {
  const div = document.createElement("div");
  document.body.appendChild(div);

  for (let i = 0; i < 6; i++) {
    const createP = document.createElement("p");
    div.appendChild(createP);
  }
};

loopDiv();

//! 1.4 Inserta dinámicamente con javascript en un html
//! una p con el texto 'Soy dinámico!'.
const textP = document.createElement("p");
textP.textContent = "Soy dinámico";

document.body.appendChild(textP);

//! 1.5 Inserta en el h2 con la clase
//! .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

//! 1.6 Basándote en el siguiente array crea una
//! lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const createUl = () => {
  const ul = document.createElement("ul");
  document.body.appendChild(ul);

  for (let i = 0; i < apps.length; i++) {
    const createLi = document.createElement("li");
    ul.appendChild(createLi);
    createLi.textContent = apps[i];
  }
};

createUl();

//! 1.7 Elimina todos los nodos que tengan
//! la clase .fn-remove-me

// !!!!!!!!!!!NO RESUELTA //!!!!!!!!!!!!!!!!!!!!
// const removeList = document.querySelectorAll(".fn-remove-me");

// removeList.remove();

//! 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//! Recuerda que no solo puedes insertar elementos con .appendChild.
const selectDiv = document.querySelector("div");
selectDiv.classList.add("insert-after-me");

const newP = document.createElement("p");
newP.textContent = "Voy en medio";
selectDiv.after(newP);

//! 1.9 Inserta p con el texto 'Voy dentro!',
//! dentro de todos los div con la clase .fn-insert-here

// !!!!!!!!!!!NO RESUELTA //!!!!!!!!!!!!!!!!!!!!

// const insertDivs = document.querySelectorAll("div.fn-insert-here");
// console.log(insertDivs);

// const insideP = document.createElement("p");
// insertDivs.appendChild(insideP);
// insideP.textContent = "Voy dentro";
