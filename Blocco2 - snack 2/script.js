// Blocco 2 - snack 2
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

function generaRandomNumber(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}

const firstNames = [
  "John",
  "Jane",
  "David",
  "Emily",
  "Michael",
  "Olivia",
  "Daniel",
  "Sophia",
  "Matthew",
  "Ava",
];

const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Jones",
  "Brown",
  "Davis",
  "Miller",
  "Wilson",
  "Moore",
  "Taylor",
  "Anderson",
  "Thomas",
];

const guestList = [];
let randomFNamePosition, randomLNamePosition;

for (let i = 0; i <= lastNames.length; i++) {
  randomFNamePosition = generaRandomNumber(0, firstNames.length - 1);
  randomLNamePosition = generaRandomNumber(0, lastNames.length - 1);
  let fullName =
    firstNames[randomFNamePosition] + " " + lastNames[randomLNamePosition];
  guestList.push(fullName);
}
console.log(guestList);
document.writeln("<h2>List dei invitati:</h2>");

for (let i = 0; i < guestList.length; i++) {
  document.writeln(`<h4>${guestList[i]}</h4>`);
}
