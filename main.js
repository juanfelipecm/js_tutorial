let Phrase = require("jfcm-palindrome");

function palindromeTester(event) {
    event.preventDefault();

    let phrase = new Phrase(event.target.phrase.value);
    let palindromeResult = document.querySelector("#palindromeResult");

    if (phrase.palindrome()) {
        palindromeResult.innerHTML = `"${phrase.content}" <strong>is</strong> a palindrome.`;
    } else {
        palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
    }
}

document.addEventListener("DOMContentLoaded", function(){
    let tester = document.querySelector("#palindromeTester");
    tester.addEventListener("submit", function() {
        palindromeTester(event);
    });
});



