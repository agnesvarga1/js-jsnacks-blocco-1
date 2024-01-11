// Blocco 1 - JSnack 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

//crea un var che come valre prende valore del prompt(Controllo se e number)
//constant 10 come lunghezza array
//crea un array vuoto
//ogni prompt push into array
//se lunghezza array = 10 //ciclo for
//somma valori

let inputNumber = Number(prompt("Write a number"));

const maxLength = 10;
const arrayOfNumbers = [];

for (let i = 0; i < maxLength; i++) {
  if (isNaN(inputNumber)) {
    alert("NOT a number try again");
    inputNumber = Number(prompt("Write a number"));
  } else {
    if (arrayOfNumbers.length < maxLength) {
      i = arrayOfNumbers.length;
      arrayOfNumbers.push(inputNumber);
      inputNumber = Number(prompt("Write a number"));
    }
  }
}

console.log(arrayOfNumbers);
let sum = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  sum = sum + arrayOfNumbers[i];
}

document.writeln(`<h2>Somma dei numeri: ${sum}</h2>`);
