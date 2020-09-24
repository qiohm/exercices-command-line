/* 9: majorityTest.js:

Un état vous demande d'ecrire un petit programme qui vérifie que les citoyens ont le droit de voter.
Ecrivez un programme qui demande l'utilisateur son nom, son prenom, son age.
Si l'âge est inférieur à 18 lui afficher avec le prenom et nom correspondant:

Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter

Si l'âge est supérieur ou égal à 18 lui afficher:

prenom nom, vous êtes majeur, vous pouvez voter */

import readlineSync from 'readline-sync'
import chalk from 'chalk'

console.log(
    chalk.underline.inverse(
        'Au nom du Grand Ga-Bu 1er, veuillez remplir votre devoir de citoyen.'
    )
)

let name = readlineSync.question(`Indiquez votre ` + chalk.red(`nom: `))
let surname = readlineSync.question('ainsi que votre prénom: ')
let age_str = readlineSync.question(chalk.red('Et finalement, votre âge: '))
let age = Number(age_str)
if (isNaN(age)) {
    console.log(chalk.blue(`Error !!! Merci de vérifier votre âge`))
    process.exit(1)
}
const adult =
    age < 18
        ? console.log(
              chalk.yellow(
                  `Désolé, Pupille ${surname} ${name}, vous êtes mineur, vous ne pouvez pas voter.`
              )
          )
        : console.log(
              chalk.green(
                  `Citoyen ${surname} ${name}, vous êtes majeur, vous pouvez voter pour Ga-Bu 1er.`
              )
          )
