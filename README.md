Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

# Pari e dispari & palindromi con JS

Questa repo contiene due cartelle con due esercizi di JS. Il primo esercizio controlla se una parola inserita dall'utente è palindroma e ritorna un feedback positivo o negativo. Il secondo esercizio è un semplice gioco di pari e dispari che l'utente gioca contro il computer.

## Esercizio 1 - Palindromi

Il programma chiede all'utente di inserire una parola e controlla se sia un palindromo.

### Descrizione del codice

1- Tramite prompt, il programma chiede all'utente di digitare una parola.

const word = prompt("Inserisci una parola");

2- Creo una funzione che controlla se la parola sia palindroma e stampa il risultato in console

function isPalindrome(word) {
    const word = prompt("Enter a word or a number");

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

