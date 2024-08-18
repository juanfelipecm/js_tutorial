
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

