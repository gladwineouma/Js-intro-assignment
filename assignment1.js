let statement = 'The child walked to the market';
let newstatement = statement.charAt(0).toUpperCase() +statement.slice(1);
console.log({newstatement})


let m = 'Morning';
let charToAdd = 'u';
let newm = m.slice (0,3) + charToAdd + m.slice(3);
console.log(newm);


let k='hello world, hello Javascript';
let newk='hello';
let total=k.split(newk).length-1
console.log({total})

let b = 'Gladwin';
let lastchar = b.slice(-3);
console.log({lastchar});



let firstchar = b.slice(0,3);
console.log({firstchar});



let c = 'improvement'
let sortedStr = c.split('').sort().join('');
console.log({sortedStr});


let d = 'I embrace change'

let noSpace =d.split(" ").join("");
console.log({noSpace});





let text = 'greeting';
let indexText=text.indexOf('t');
console.log(indexText);


let firstTwochar = text.slice(2);
console.log(firstTwochar);

let lastTwoChar = text.slice(0, -2);
console.log(lastTwoChar);

 