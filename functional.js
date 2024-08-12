// imperative urls

let states = ['kansas', 'Nebraska', 'North Dakota', 'South Dakota'];

function urlify (string) {
   return string.toLowerCase().split(/\s+/).join('-');
}

function imperativeurls(elements) {
    let urls = [];
    elements.forEach(function(element){
        urls.push(element.toLowerCase().split(/\s+/).join('-'));
        }
    );
    return urls;
    }

console.log (imperativeurls(states));

function functionalurls(elements) {
    return elements.map(element => urlify(element));
}

console.log (functionalurls(states));

function convertiraurl (elements) {
    return elements.map (element => 'https://example.com/'.concat(urlify(element)));
}

console.log (convertiraurl (states));


function imperativesingles(elements) {
    let singles = [];
    elements.forEach(function (element) {
        if (element.split(/\s+/).length ===1) {
            singles.push(element);
        }
    }
    )
    return singles;
}

console.log (imperativesingles(states));

function functionalsingles(elements) {
    return elements.filter( element => element.split(/\s+/).length===1)
}

console.log (functionalsingles(states));


function dakotasconinclude(elements) {
    return elements.filter (element => element.toLowerCase().includes('dakota'))
}

console.log (dakotasconinclude(states));

function dakotasconregex (elements) {
    return elements.filter (element => element.split(/\s+/).length===2)
}

console.log (dakotasconregex(states));


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//imperative sum

function imperativesum (elements) {
    let total = 0;
    elements.forEach (function(n) {
        total = total += n;
    })
    return total
}

console.log (imperativesum(numbers));

//functional sum

function functionalsum (elements) {
    return elements.reduce ((total,n) => 
                    { return total += n;},
                    0
    );
}

console.log (functionalsum (numbers));

//imperative lengths
function imperativelengths (elements) {
    let lengths = {};
    elements.forEach(function(element) {
        lengths[element] = element.length;
    });
    return lengths;
}

console.log(imperativelengths(states));


//functional lengths

function functionalengths (elements) {
    return elements.reduce ((lenghts, element) => {
        lenghts[element] = element.length;
        return lenghts;
    }, {}
    );
}


console.log (functionalengths(states));

// product of all elements

function productofall (elements) {
    let total = 1;
    elements.forEach (function (element) {
        total = total *= element;
    });
    return total;
}

console.log (productofall(numbers));

function functionalproduct (elements) {
    return elements.reduce((total, element) => {return total *= element;}, 1
    );
}

console.log(functionalproduct(numbers));