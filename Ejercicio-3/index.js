//! 1.1 Basándote en el array siguiente, crea una lista ul > li
//! dinámicamente en el html que imprima cada uno de los paises.
const countries1 = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const printCountries = () => {
  const createUl = document.createElement("ul");
  document.body.appendChild(createUl);

  for (let i = 0; i < countries1.length; i++) {
    const createLi = document.createElement("li");
    createUl.appendChild(createLi);
    createLi.textContent = countries1[i];
  }
};

printCountries();

//! 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const removeMe = document.querySelector(".fn-remove-me");
removeMe.remove();

//! 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
//! en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const printCars = () => {
  const newUl = document.createElement("ul");
  document.body.appendChild(newUl);

  for (let i = 0; i < cars.length; i++) {
    const newLi = document.createElement("li");
    newUl.appendChild(newLi);
    newLi.textContent = cars[i];
  }
};

printCars();

//! 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
//! h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const divCountries2 = document.createElement("div");
divCountries2.innerHTML = "";
document.body.appendChild(divCountries2);

const printCountries2 = () => {
  for (const country of countries2) {
    const insideDivs = document.createElement("div");
    const countryName = document.createElement("h3");
    const countryImg = document.createElement("img");

    countryName.textContent = country.title;
    countryImg.src = country.imgUrl;

    divCountries2.appendChild(insideDivs);
    insideDivs.appendChild(countryName);
    insideDivs.appendChild(countryImg);
    insideDivs.classList.add("inside-Divs");
  }
};

printCountries2();

//! 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
//! elemento de la serie de divs.

const deleteButton = document.createElement("button");
deleteButton.textContent = "Borrar";
divCountries2.appendChild(deleteButton);

// function deleteDivs(event) {

// }

// deleteButton.addEventListener("click");
//! 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
//! divs que elimine ese mismo elemento del html.
