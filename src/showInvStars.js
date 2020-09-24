'use strict'
/* 
4: showInvStars.js
Ecrivez un script showInvStars.js qui prend en argument de la ligne de commande un nombre et 
affiche sur le terminal une pyramide comme ci-dessous:

% node showInvStars.js 3
***
**
*

 */

const showStars = (nbEl) => {
    for (let el = nbEl; el >= 1; el -= 1) {
        console.log('*'.repeat(el))
    }
}
if (process.argv.length !== 3) {
    console.log('usage: node counter.js number')
    process.exit(1)
}
if (isNaN(process.argv[2])) {
    console.log(`Error : ${process.argv[2]} is not a number}`)
    process.exit(1)
}

let newstar = Number(process.argv[2])
showInvStars(newStar)
