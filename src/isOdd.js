/* 7: oddTest.js

Ecrivez un script oddTest.js qui vérifit si l'argument passé en ligne de commande est impair:

% node oddTest.js 7
7 est un nombre impair
% node oddTest.js 10
10 est un nombre pair */

// cor. S. A.

if (process.argv.length !== 3) {
    console.log('usage: node oddTest.js nb')
    process.exit(1)
}

if (isNaN(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a number`)
    process.exit(1)
}

let nb = Number(process.argv[2])

console.log(nb % 2 === 0 ? `${nb} est pair` : `${nb} est impair`)
