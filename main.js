let Phrase = require("jfcm-palindrome");
let String = prompt("Ingresa una frase para evaluar si es un palindrome:");

let phrase = new Phrase(String);
if (phrase.palindrome()) {
    alert (`"${phrase.content}" is a palindrome.`);
} else {
    alert (`"${phrase.content}" is not a palindrome.`);
}

