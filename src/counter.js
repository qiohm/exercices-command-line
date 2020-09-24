'use strict'
/* 
3: counter.js
Ecrivez une programme counter qui prend 3 arguments en ligne de commande:

    un nombre min pour le début du counter
    un nombre max pour la fin du counter
    un nombre step pour le pas/interval du counter

L'execution de ce programme devra afficher sur le terminal tous les nombres de min jusqu'a max avec un interval de step:
% node counter.js 1 10 2
1
3
5
7
9
 */
if (process.argv.length !== 5) {
    console.log('usage: node counter.js min max step')
    process.exit(1)
}
/* if (isNaN(process.argv.slice(2))) {
    console.log('Error: value must be a number')
    process.exit(1)
} */
if (
    isNaN(process.argv[2]) ||
    isNaN(process.argv[3]) ||
    isNaN(process.argv[4])
) {
    console.log('Error: value(s) must be a number')
    process.exit(1)
}

let min = Number(process.argv[2])
//console.log(typeof min)
let max = Number(process.argv[3])
let step = Number(process.argv[4])

const counter = () => {
    for (let n = min; n <= max; n += step) {
        console.log(n)
    }
}

counter()
