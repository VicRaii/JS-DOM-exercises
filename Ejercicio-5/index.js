//! Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
//! que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const createUl = () => {
  const ul = document.createElement("ul");
  document.body.appendChild(ul);

  for (const album of albums) {
    const createLi = document.createElement("li");
    ul.appendChild(createLi);
    createLi.textContent = album;
  }
};

createUl();
