// Aspect Design Déclaration des Variables de la structure HTML //

let question;
let gras;

question = document.getElementsByClassName('question-item');

for (var i = 0; i < question.length; i++) {
    question[0].style.color = "purple"
    question[1].style.color = "blue"
    question[1].style.color = "bolder"
    question[2].style.color = "green"
    question[3].style.color = "brown"
    question[4].style.color = "orange"
    question[5].style.color = "fuchsia"
    question[6].style.color = "red"
}

gras = document.getElementsByClassName('gras');

// Query selector pour assigner le style sur la class "gras"
for (var i = 0; i < gras.length; i++) {
    gras[0].style.cssText = "background-color: yellow; font-weight:bolder"
    gras[1].style.cssText = "background-color: yellow; font-weight:bolder"
    gras[2].style.cssText = "background-color: yellow; font-weight:bolder"
    gras[3].style.cssText = "background-color: yellow; font-weight:bolder"
    gras[4].style.cssText = "background-color: yellow; font-weight:bolder"
    gras[5].style.cssText = "background-color: yellow; font-weight:bolder"
    gras[6].style.cssText = "background-color: yellow; font-weight:bolder"
}

// Déclaration des Id de la structure HTML en rapport avec le bouton "resultat" //

const bouton1 = document.getElementById('bouton-1')
const bouton2 = document.getElementById('bouton-2')
const bouton3 = document.getElementById('bouton-3')
const bouton4 = document.getElementById('bouton-4')
const bouton5 = document.getElementById('bouton-5')
const bouton6 = document.getElementById('bouton-6')
const bouton7 = document.getElementById('bouton-7')
console.log(bouton1)
console.log(bouton2)
console.log(bouton3)
console.log(bouton4)
console.log(bouton5)
console.log(bouton6)
console.log(bouton7)
const input1 = document.getElementById('string-1')
const input2 = document.getElementById('string-2')
const input3 = document.getElementById('string-3')
const input4 = document.getElementById('string-4')
const input5 = document.getElementById('string-5')
const input6 = document.getElementById('string-6')
const input7 = document.getElementById('string-7')
console.log(input1)
console.log(input2)
console.log(input3)
console.log(input4)
console.log(input5)
console.log(input6)
console.log(input7)
const resultat1 = document.getElementById('resultat-1')
const resultat2 = document.getElementById('resultat-2')
const resultat3 = document.getElementById('resultat-3')
const resultat4 = document.getElementById('resultat-4')
const resultat5 = document.getElementById('resultat-5')
const resultat6 = document.getElementById('resultat-6')
const resultat7 = document.getElementById('resultat-7')
console.log(resultat1)
console.log(resultat2)
console.log(resultat3)
console.log(resultat4)
console.log(resultat5)
console.log(resultat6)
console.log(resultat7)

// A) Condition if - else pour la mise en marche du bouton //
let goodReponse = "Bonne Réponse c'était bien : "

//let reponse1 = 'Italie';
//let reponse2 = 'Cristiano Ronaldo';
//let reponse3 = 'Gianluigi Donnarumma';
//let reponse4 = 'Portugal';
//let reponse5 = 'Roberto Mancini';
//let reponse6 = 'Wembley(Angleterre)';
//let reponse7 = 'Suisse';

let reponse = [{
        reponse: 'Italie'
    },
    {
        reponse: 'Cristiano Ronaldo'
    },
    {
        reponse: 'Gianluigi Donnarumma'
    },
    {
        reponse: 'Portugal'
    },
    {
        reponse: 'Roberto Mancini'
    },
    {
        reponse: 'Wembley(Angleterre)'
    },
    {
        reponse: 'Suisse'
    }
]

// console.log(reponse[0])
// console.log(reponse[1])
// console.log(reponse[2])
// console.log(reponse[3])
// console.log(reponse[4])
// console.log(reponse[5])
// console.log(reponse[6])

// B) Alerte dans le cas oû la personne clique sans mentionner de réponse //

function ecrireUneReponse(question, response) {
    // console.log('Log: ', question, response)
    if (!response) alert("Merci d'écire une réponse s'il vous plait !")


    //else {

    // // si (la Question est strictement égale à 1 et que la réponse proposer par l'user est strictement égale à la réponse du tableau[la question de l'user - 1 (info: la question - 1 est égale à l'index de la réponse dans le tableau)])
    // // Alors on retourne pour mettre fin à la fonction en donnant une valeur html à notre div (resultat2) qui sera égal à goodReponse + la réponse donner par l'User
    /*
     * Solution 1 - Conditions
     * ********************* */

    /*

    if (question === 1 && response === reponse[question - 1].reponse) return document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response

    else if (question === 2 && response === reponse[question - 1].reponse) return resultat2.innerHTML = goodReponse + response

    else if (question === 3 && response === reponse[question - 1].reponse) return resultat3.innerHTML = goodReponse + response

    else if (question === 4 && response === reponse[question - 1].reponse) return resultat4.innerHTML = goodReponse + response

    else if (question === 5 && response === reponse[question - 1].reponse) return resultat5.innerHTML = goodReponse + response

    else if (question === 6 && response === reponse[question - 1].reponse) return resultat6.innerHTML = goodReponse + response

    else if (question === 7 && response === reponse[question - 1].reponse) return resultat7.innerHTML = goodReponse + response

    // console.log('LOG2: ', question)


    // // si la Question est strictement égale à 1 pour la 1er question, alors retourne en affichant la mauvaise response du resultat1

    else {
        if (question === 1) return resultat1.innerHTML = "Mauvaise réponse c'était : Italie !"
        if (question === 2) return resultat2.innerHTML = "Mauvaise réponse c'était : Cristiano Ronaldo !"
        if (question === 3) return resultat3.innerHTML = "Mauvaise réponse c'était : Gianluigi Donnarumma !"
        if (question === 4) return resultat4.innerHTML = "Mauvaise réponse c'était : Portugal !"
        if (question === 5) return resultat5.innerHTML = "Mauvaise réponse c'était : Roberto Mancini !"
        if (question === 6) return resultat6.innerHTML = "Mauvaise réponse c'était : Wembley(Angleterre) !"
        if (question === 7) return resultat7.innerHTML = "Mauvaise réponse c'était : Suisse !"
    }

    */

    /*
     * Solution 2 -  Boucles
     * *********************** */

    /*

        for (i = 0; i <= reponse.length - 1; i++) {
        //     console.log('LOG3: ', reponse[i], question, i + 1)
        //     // Deuxieme cas avec des conditions moduler dans notre boucle
        if ((i + 1) === question && response === reponse[i].reponse) {
            //     //     console.log('Good Job !')
            document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response
            break
        } else {
            //     //    console.log('Error !')
            document.getElementById(`resultat-${ question }`).innerHTML = "Mauvaise réponse c'était : " + reponse[question - 1].reponse
        }

    */






    /* 
     * Solution 3 - Switch 
     *********************** */

    switch (question) {
        case 1:
            //      console.log('LOG3: ', reponse[i], question, i + 1)
            if (response === reponse[question - 1].reponse) {
                document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response
            
            } else document.getElementById(`resultat-${ question }`).innerHTML = "Mauvaise réponse c'était : Italie !"
            break
        case 2:
            if (response === reponse[question - 1].reponse) {
                document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response
            
            } else document.getElementById(`resultat-${ question }`).innerHTML = "Mauvaise réponse c'était : Cristiano Ronaldo !"
            break

    }
    
}