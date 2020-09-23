'use strict'

/* 2: showArgs.js
Ecrivez un script showArgs.js qui prend en arguments de la ligne de commande plusieures string 
et les affiche dans l'ordre inverse de leur ordre d'entrée:
% node showArgs.js 1 2 3 Soleil
Soleil
3
2
1 */

//console.log(process.argv[(1, 2, 3, soleil)])

let reverse = process.argv.reverse()
//console.log(reverse)

const showArgs = () => {
    for (let i = 0; i <= reverse.length - 3; i += 1) {
        console.log(reverse[i])
    }
}

showArgs()
