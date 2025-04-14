// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
let pesoBike = [];

let bike = [
  {
    name: "bike1",
    peso: 0,
  },
  {
    name: "bike2",
    peso: 0,
  },
  {
    name: "bike3",
    peso: 0,
  },
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const pesoRandom = getRandomNumber(100, 350);

for (const randomPeso of bike) {
  randomPeso.peso = getRandomNumber(100, 350);
}
console.log(bike);

// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
