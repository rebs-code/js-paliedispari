# Pari e dispari & palindromi con JS

Questa repo contiene due cartelle con due esercizi di JS. Il primo esercizio controlla se una parola inserita dall'utente è palindroma e ritorna un feedback positivo o negativo. Il secondo esercizio è un semplice gioco di pari e dispari che l'utente gioca contro il computer.

## Esercizio 1 - Palindromi

Il programma chiede all'utente di inserire una parola e controlla se sia un palindromo.

### Descrizione del codice

1- Tramite prompt, il programma chiede all'utente di digitare una parola.

const word = prompt("Inserisci una parola");

2- Creo una funzione che controlla se la parola sia palindroma e stampa il risultato in console


function isPalindrome(word) {
    if (isNaN(word)) {
        //se l'input non è un numero, uso split per trasformare la parola in un array, poi reverse per invertire l'ordine delle lettere nell'array e join per rimetterlo insieme come una
        //parola. A quel punto confronto le due parole e se sono uguali, word è un palindromo
        if (word === word.split('').reverse().join('')){
            console.log(`La parola che hai inserito, ${word}, è un palindromo`);
        } else {
            console.log(`La parola che hai inserito, ${word}, NON è un palindromo`);
        }

    } else {
        console.log("Inserire una parola valida");
    }
}

## Esercizio 2 - Pari e Dispari

Questo programma chiede all'utente di inserire un numero fra 1 e 5 con il quale andrà a giocare a pari e dispari contro il computer.

### Descrizione del codice

1- Chiedo all'utente di inserire un numero fra 1 e 5 e se sceglie pari o dispari

const myNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));
const myChoice = prompt("Pari o dispari?");

if (myNumber >= 1 && number <= 5 && (myChoice === "pari" || myChoice === "dispari")) {
    console.log(`Hai inserito il numero ${myNumber}`);
    console.log(`Hai scelto ${myChoice}`);
} else {
    console.log("Il numero inserito e/o la scelta non è valido/a. Inserisci un numero da 1 a 5 e scegli "pari" o "dispari".");
}

2- Scrivo una funzione che genera un numero random fra 1 e 5

function randomNum() {
const randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(`Il computer ha giocato ${randomNumber}`);
return randomNumber;
}

const computerNumber = randomNumber;

3- Sommo i due numeri

const sum = computerNumber + muNumber;

4- Stabilisco chi ha vinto usando una funzione

function result(sum){
    if ((sum % 2 === 0 && myChoice === "pari") || (sum % 2 !== 0 && myChoice === "dispari")){
        console.log("L'utente ha vinto")
    } else {
        console.log("Il computer ha vinto")
        }
}



