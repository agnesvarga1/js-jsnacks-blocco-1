// Blocco 1 - snake 6
// -Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

let n = Number(prompt("Write a number?"));
const limit = 99;
document.writeln("<h2>B1 Snack </h2>");
if (isNaN(n) || n > limit) {
  alert(
    `NOT a number try again and number can not be higher than ${limit} and can not be 0 or 1`
  );
  location.reload();
} else
  for (let i = 1; i <= n; i++) {
    document.writeln(`<p>${i} ^ 3: ${Math.pow(i, 3)}</p>`);
  }
