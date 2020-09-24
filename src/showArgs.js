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
if (process.argv.length < 3) {
    console.log(`please insert argument(s). Usage : node showArgs argument(s)`)
    process.exit(1)
}

let reverse = process.argv.reverse()
//console.log(reverse)

const showArgs = () => {
    for (let i = 0; i <= reverse.length - 3; i += 1) {
        console.log(reverse[i])
    }
}

showArgs()

// fonctionne avec les methodes .slice(2).reverse() : récupère et inverse à partir de l'index[2]
const showArgs = ()=> {
    if (process.argv.length <=2){
console.log(`error: sorry not an argument`)
    }

const inputs = process.argv.slice(2).reverse()
for (let i = 0; i <= inputs.length; i += 1) {
    console.log(inputs[i])
}
}
showArgs()