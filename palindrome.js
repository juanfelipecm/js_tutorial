
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


// Reverses a String

// function reverse(string) {
//     return Array.from(string).reverse().join('');
// }

// Defines a Phrase Object

function Phrase (content) {
    this.content = content;

    this.processor = function (string) {
        return string.toLowerCase();
    }

    this.procesado = function() {
        return this.processor(this.content);
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

