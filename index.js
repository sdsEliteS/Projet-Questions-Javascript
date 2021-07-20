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

// Query selector pour assigner le style sur la class "gras" A FAIRE !!! //
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

// Condition if - else pour la mise en marche du bouton //
let goodReponse = "Bonne Réponse c'était bien : "

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

// Alerte dans le cas oû la personne clique sans mentionner de réponse //

function ecrireUneReponse(question, response) {
    // console.log('Log: ', question, response)
    if (!response) return alert("Merci d'écire une réponse s'il vous plait !")
    


    

    // // si la Question est strictement égale à 1 et que la réponse proposer par l'user est strictement égale à la réponse du tableau[la question de l'user - 1 (info: la question - 1 est égale à l'index de la réponse dans le tableau)])
    // // Alors on retourne pour mettre fin à la fonction en donnant une valeur html à notre div (resultat2) qui sera égal à goodReponse + la réponse donner par l'User
    /*
     * Solution 1 - Conditions (Condition if - else pour la mise en marche du bouton ) //
     * *********************** */

    

    if (question === 1 && response === reponse[question - 1].reponse) return resultat1.innerHTML = goodReponse + response

    else if (question === 2 && response === reponse[question - 1].reponse) return resultat2.innerHTML = goodReponse + response

    else if (question === 3 && response === reponse[question - 1].reponse) return resultat3.innerHTML = goodReponse + response

    else if (question === 4 && response === reponse[question - 1].reponse) return resultat4.innerHTML = goodReponse + response

    else if (question === 5 && response === reponse[question - 1].reponse) return resultat5.innerHTML = goodReponse + response

    else if (question === 6 && response === reponse[question - 1].reponse) return resultat6.innerHTML = goodReponse + response

    else if (question === 7 && response === reponse[question - 1].reponse) return resultat7.innerHTML = goodReponse + response



    // // si la Question est strictement égale à 1 pour la 1er question, alors retourne en affichant la mauvaise response du resultat1 etc... // 

    else {
        if (question === 1) return resultat1.innerHTML = "Mauvaise Réponse c'était : Italie !"
        if (question === 2) return resultat2.innerHTML = "Mauvaise Réponse c'était : Cristiano Ronaldo !"
        if (question === 3) return resultat3.innerHTML = "Mauvaise Réponse c'était : Gianluigi Donnarumma !"
        if (question === 4) return resultat4.innerHTML = "Mauvaise Réponse c'était : Portugal !"
        if (question === 5) return resultat5.innerHTML = "Mauvaise Réponse c'était : Roberto Mancini !"
        if (question === 6) return resultat6.innerHTML = "Mauvaise Réponse c'était : Wembley(Angleterre) !"
        if (question === 7) return resultat7.innerHTML = "Mauvaise Réponse c'était : Suisse !"
    }

    

    /*
     * Solution 2 -  Boucles
     * ********************* */

    /*

        for (i = 0; i <= reponse.length - 1; i++) {
        
        //   Conditions moduler dans notre boucle
        if ((i + 1) === question && response === reponse[i].reponse) {
            
            document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response
            break
        } else {
            
            document.getElementById(`resultat-${ question }`).innerHTML = "Mauvaise réponse c'était : " + reponse[question - 1].reponse
        }

    */






    /* 
     * Solution 3 - Switch 
     ********************* */

    /*

    switch (question) {
        case 1:

            // Si la response de la fonction est strictement égal à la reponse du tableau (question -1 = Sa commence à partir de 0 pour les questions)
            // et affichant la reponse en rapport avec good reponse + response
            // Sinon on affichera que c'est une mauvaise reponse
            if (response === reponse[question - 1].reponse) {
                return document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response
            
            } else return document.getElementById(`resultat-${ question }`).innerHTML = "Mauvaise réponse c'était : Italie !"
            break
        case 2:
            if (response === reponse[question - 1].reponse) {
                return document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response
            
            } else return document.getElementById(`resultat-${ question }`).innerHTML = "Mauvaise réponse c'était : Cristiano Ronaldo !"
            break


    }

    */
    
}