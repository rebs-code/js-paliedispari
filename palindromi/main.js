const word = prompt("Inserisci una parola");

function isPalindrome(word) {
  if (isNaN(word)) {
    //se l'input non è un numero, uso split per trasformare la parola in un array, poi reverse per invertire l'ordine delle lettere nell'array e join per rimetterlo insieme come una
    //parola. A quel punto confronto le due parole e se sono uguali, word è un palindromo
    if (word === word.split("").reverse().join("")) {
      console.log(`La parola che hai inserito, "${word}", è un palindromo`);
    } else {
      console.log(`La parola che hai inserito, "${word}", NON è un palindromo`);
    }
  } else {
    console.log("Inserire una parola valida");
  }
}

isPalindrome(word);
