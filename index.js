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

// A) Variable POSITIF //
let goodReponse = "Bonne Réponse c'était bien : "

// B) Variable NEGATIF //

let badReponse = "Mauvaise Réponses c'était : "

// Array des (réponse 0 = Italie = Question 1 etc ...) //
let reponse = [{
        reponse: 'Italie' // 0
    },
    {
        reponse: 'Cristiano Ronaldo' // 1
    },
    {
        reponse: 'Gianluigi Donnarumma' // 2
    },
    {
        reponse: 'Portugal' // 3
    },
    {
        reponse: 'Roberto Mancini' // 4
    },
    {
        reponse: 'Wembley(Angleterre)' // 5
    },
    {
        reponse: 'Suisse' // 6
    }
]

// Alerte dans le cas oû la personne clique sans mentionner de réponse //
function ecrireUneReponse(question, response) {

    if (!response) return alert("Merci d'écire une réponse s'il vous plait !")

    /*
     * Solution 1 - Conditions (Condition if - else pour la mise en marche du bouton ) //
     * *********************** */


    
    //  Si Question est strictement égale à 1 et que la réponse proposer par l'user est strictement égale à la réponse du tableau [la question de l'user - 1 (info: la question - 1 est égale à l'index de la réponse dans le tableau)]) 
    // Alors on retourne pour mettre fin à la fonction (return) en donnant une valeur html à notre div (resultat1) qui sera égal à goodReponse + la réponse donner par l'User 

    /*

        if (question === 1 && response === reponse[question - 1].reponse) return document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response
        else if (question === 2 && response === reponse[question - 1].reponse) return document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response
        else if (question === 3 && response === reponse[question - 1].reponse) return document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response
        else if (question === 4 && response === reponse[question - 1].reponse) return document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response
        else if (question === 5 && response === reponse[question - 1].reponse) return document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response
        else if (question === 6 && response === reponse[question - 1].reponse) return document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response
        else if (question === 7 && response === reponse[question - 1].reponse) return document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response
    

        else {
            if (question === 1) return document.getElementById(`resultat-${ question }`).innerHTML = "Mauvaise réponse c'était : Italie"
            if (question === 2) return document.getElementById(`resultat-${ question }`).innerHTML = "Mauvaise réponse c'était : Cristiano Ronaldo"
            if (question === 3) return document.getElementById(`resultat-${ question }`).innerHTML = "Mauvaise réponse c'était : Gianluigi Donnarumma"
            if (question === 4) return document.getElementById(`resultat-${ question }`).innerHTML = "Mauvaise réponse c'était : Portugal"
            if (question === 5) return document.getElementById(`resultat-${ question }`).innerHTML = "Mauvaise réponse c'était : Roberto Mancini"
            if (question === 6) return document.getElementById(`resultat-${ question }`).innerHTML = "Mauvaise réponse c'était : Wembley(Angleterre)"
            if (question === 7) return document.getElementById(`resultat-${ question }`).innerHTML = "Mauvaise réponse c'était : Suisse"
        }
    

    // Si la Question est strictement égale à 1 pour la 1er question, alors retourne en affichant la mauvaise response de la question resultat1 par exemple //

    


    /*
     * Solution 2 -  Boucles
     * ********************* */



    // En commençant de 0 pour la question 1 et jusqu'à temps quelle soit égal au nombre de question total on accrémente.
    // Si i est strictement égal au nombre total de question et si le response est strictement égal au reponse du tableau alors on affiche le resultat sinon on affiche le mauvais.
    // break
    

    
    for (i = 0; i <= reponse.length -1; i++){
        console.log('Log FOR: ', i, reponse[i])
        if (response === reponse[question - 1].reponse)
        document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response;
        else { 
        document.getElementById(`resultat-${ question }`).innerHTML = badReponse +  reponse[question - 1].reponse;
        }
            break
    }






    /* 
     * Solution 3 - Switch 
     ********************* */

    

    // Si la response de la fonction est strictement égal à la reponse du tableau en prenant soin de ressortir l'Id de la structure HTML (question -1 = Sa commence à partir de 0 pour les questions)
    // et affichant la reponse en rapport avec good reponse + response
    // Sinon on affichera que c'est une mauvaise reponse

    /*

    switch (question) {

        case (1):
            if (response === reponse[question - 1].reponse)
                document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response;
            else return document.getElementById(`resultat-${ question }`).innerHTML = "Mauvaise réponse c'était : Italie"
            break;

        case (2):
            if (response === reponse[question - 1].reponse)
                document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response;
            else return document.getElementById(`resultat-${ question }`).innerHTML = "Mauvaise réponse c'était : Cristiano Ronaldo"
            break;

        case (3):
            if (response === reponse[question - 1].reponse)
                document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response;
            else return document.getElementById(`resultat-${ question }`).innerHTML = "Mauvaise réponse c'était : Gianluigi Donnarumma"
            break;

        case (4):
            if (response === reponse[question - 1].reponse)
                document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response;
            else return document.getElementById(`resultat-${ question }`).innerHTML = "Mauvaise réponse c'était : Portugal"
            break;

        case (5):
            if (response === reponse[question - 1].reponse)
                document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response;
            else return document.getElementById(`resultat-${ question }`).innerHTML = "Mauvaise réponse c'était : Roberto Mancini"
            break;

        case (6):
            if (response === reponse[question - 1].reponse)
                document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response;
            else return document.getElementById(`resultat-${ question }`).innerHTML = "Mauvaise réponse c'était : Wembley(Angleterre)"
            break;

        case (7):
            if (response === reponse[question - 1].reponse)
                document.getElementById(`resultat-${ question }`).innerHTML = goodReponse + response;
            else return document.getElementById(`resultat-${ question }`).innerHTML = "Mauvaise réponse c'était : Suisse"
            break;
    }

    */

}

