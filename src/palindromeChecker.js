/* 6: palindromeChecker.js
Ecrivez un script palindromeChecker.js qui verifit si l'argument passé en ligne de commande est un palindrome:
% node palindromeChecker.js tenet
tenet is a palindrome
% node palindromeChecker.js 3133773313
3133773313 is a palindrome
% node palindromeChecker.js Alyra
Alyra is not a palindrome */

// correction de Ionnis

// correction de Vladimir

if (process.argv.length !== 3) {
    console.log('usage: node palindromeChecker.js word')
    process.exit(1)
}

let word = process.argv[2]
if (word === word.split('').reverse().join('')) {
    console.log(`${word} is a palindrome`)
} else {
    console.log(`${word} is not a palindrome`)
}
