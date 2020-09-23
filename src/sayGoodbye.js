'use strict'

/* 
1: sayGoodbye.js
Ecrivez un script sayGoodbye.js qui prend en argument de la ligne de commande une string et affiche un message comme ci-dessous:
% node sayGoodbye.js React
Goodbye, React 
*/

//test de securite pour input unique de l'utilisateur
if (process.argv.length !== 3) {
    console.log(`usage: node sayGoodbye.js name`)
    process.exit(1) // exit the program with code status 1
}

//creation/initialisation variable pour output console
let name = process.argv[2]
console.log(`GoodBye ${name}`)
