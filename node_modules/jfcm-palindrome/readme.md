Phrase object (with palindrome detector)

This is a sample NPM module created in Learn Enough JavaScript to Be Dangerous by Michael Hartl.

The module can be used as follows:


```bash
$ npm install –global jfcm-palindrome
$ vim test.js
```

```javascript
let Phrase = require(“jfcm-palindrome”);
let napoleonsLament = new Phrase(“Able was I, ere I saw Elba.”);
console.log(napoleonsLament.palindrome());
```

```bash
$ node test.js
true
```