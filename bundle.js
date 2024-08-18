(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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




},{"jfcm-palindrome":2}],2:[function(require,module,exports){

module.exports = Phrase;

// Adds reverse to all strings.

String.prototype.reverse = function () {
    return Array.from(this).reverse().join('');
}

String.prototype.blank = function() {
    return /^\s*$/.test(this);
}

Array.prototype.last = function () {
    return this[this.length-1]
}


// Defines a Phrase Object

function Phrase (content) {
    this.content = content;

    this.processor = function (string) {
        return string.toLowerCase();
    }

    this.procesado = function() {
        return this.letters().toLowerCase();
    }

    // Returns the letters in the content.
    this.letters = function letters() {
        return (this.content.match(/[a-z]/gi) || []).join("");   
    }

// Returns true if palindrome, false otherwise.
    this.palindrome = function palindrome() {
    return this.procesado() === this.procesado().reverse();
    }

// LOUDER version
    this.louder = function louder() {
        return this.content.toUpperCase();
    }
}


},{}]},{},[1]);
