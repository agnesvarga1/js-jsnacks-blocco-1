//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const arrayOfNumbers = [10, 52, 78, 2, 204, 361, 45, 9, 784, 99, 123];
document.writeln(`<h3>Array di numeri:[${arrayOfNumbers}]</h3> `);
let sum = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (i % 2 !== 0) {
    sum = sum + arrayOfNumbers[i];
    console.log(i, arrayOfNumbers[i], sum);
  }
}
document.writeln(
  `<h3>In questo array la somma dei numeri i  positione dispar(1,3 etc): <span style="color:green ;font-size:2rem">${sum}<span></h3>`
);
