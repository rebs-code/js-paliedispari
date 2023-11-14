"use strict";

function randomNum() {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  console.log(`Il computer ha giocato ${randomNumber}`);
  return randomNumber;
}

function result(sum) {
  if (
    (sum % 2 === 0 && myChoice === "pari") ||
    (sum % 2 !== 0 && myChoice === "dispari")
  ) {
    console.log("L'utente ha vinto");
  } else {
    console.log("Il computer ha vinto");
  }
}

const myNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));
const myChoice = prompt("Pari o dispari?");

if (
  myNumber >= 1 &&
  myNumber <= 5 &&
  (myChoice === "pari" || myChoice === "dispari")
) {
  console.log(`Hai inserito il numero ${myNumber}`);
  console.log(`Hai scelto ${myChoice}`);
  const sum = myNumber + randomNum();
  result(sum);
} else {
  console.log(
    "Il numero inserito e/o la scelta non è valida. Inserisci un numero da 1 a 5 e scegli 'pari' o 'dispari'."
  );
}
