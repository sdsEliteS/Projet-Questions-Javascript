// Aspect Design Déclaration des Variables de la structure HTML //

let question;
let gras;

question = document.getElementsByClassName('question-item');

for(var i = 0; i < question.length; i++){
    question [0].style.color = "purple"
    question [1].style.color = "blue"
    question [1].style.color = "bolder"
    question [2].style.color = "green"
    question [3].style.color = "brown"
    question [4].style.color = "orange"
    question [5].style.color = "fuchsia"
    question [6].style.color = "red"
}

gras = document.getElementsByClassName('gras');

for(var i = 0; i < gras.length; i++){
    gras [0].style.cssText = "background-color: yellow; font-weight:bolder"
    gras [1].style.cssText = "background-color: yellow; font-weight:bolder"
    gras [2].style.cssText = "background-color: yellow; font-weight:bolder"
    gras [3].style.cssText = "background-color: yellow; font-weight:bolder"
    gras [4].style.cssText = "background-color: yellow; font-weight:bolder"
    gras [5].style.cssText = "background-color: yellow; font-weight:bolder"
    gras [6].style.cssText = "background-color: yellow; font-weight:bolder"
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

let reponse1 = 'Italie';
let reponse2 = 'Cristiano Ronaldo';
let reponse3 = 'Gianluigi Donnarumma';
let reponse4 = 'Portugal';
let reponse5 = 'Roberto Mancini';
let reponse6 = 'Wembley(Angleterre)';
let reponse7 = 'Suisse';
console.log(reponse1)
console.log(reponse2)
console.log(reponse3)
console.log(reponse4)
console.log(reponse5)
console.log(reponse6)
console.log(reponse7)

// B) Alerte dans le cas oû la personne clique sans mentionner de réponse //

function ecrireUneReponse1() {
    if (input1.value === "") {
        alert ("Merci d'écire une réponse s'il vous plait !")
    } else { String(input1.value) !=  reponse1 
        resultat1.innerHTML = " Mauvaise réponse c'était : Italie !"
    }

    preventDefault()
}

bouton1.addEventListener('click', function() {
    
    if (String(input1.value) === reponse1) {
        resultat1.innerHTML = "Bonne réponse ! C'est l'Italie qui s'appelle aussi la Squadra Azzura !"
    } else {
        ecrireUneReponse1()
    
    } 
    
})

function ecrireUneReponse2() {
    if (input2.value === "") {
        alert ("Merci d'écire une réponse s'il vous plait !")
    } else { String(input2.value) !=  reponse2 
        resultat2.innerHTML = "Mauvaise réponse c'était : Cristiano Ronaldo !"
    }
        
    preventDefault()
}

bouton2.addEventListener('click', function() {
    
    if (String(input2.value) === reponse2) {
        resultat2.innerHTML = "Bonne réponse ! C'est Cristano Ronaldo jouant pour la selection du Portugal : l'Homme au 5 ballons d'or !"
    } else {
        ecrireUneReponse2()
        
    }
    
})

function ecrireUneReponse3() {
    if (input3.value === "") {
        alert ("Merci d'écire une réponse s'il vous plait !")
    } else { String(input3.value) != reponse3
        resultat3.innerHTML = "Mauvaise réponse c'était : Gianluigi Donnarumma !"
    
    }

    preventDefault()
}

bouton3.addEventListener('click', function() {
    
    if (String(input3.value) === reponse3) {
        resultat3.innerHTML = "Bonne réponse ! C'est le gardien de la selection italienne Gianluigi Donnarumma élu meilleur joueur du tournoi"
    } else {
        ecrireUneReponse3()
        
    } 
    
})

function ecrireUneReponse4() {
    if (input4.value === "") {
        alert ("Merci d'écire une réponse s'il vous plait !")
    } else { String(input4.value) != reponse4
        resultat4.innerHTML =  "Mauvaise réponse c'était : Portugal !"
    
    }

    preventDefault()
}

bouton4.addEventListener('click', function() {
    
    if (String(input4.value) === reponse4) {
        resultat4.innerHTML = "Bonne réponse ! C'est le Portugal qui remporte le premier titre de son histoire l'Euro 2016 grâce au but d'Eder contre la France !"
    } else {
        ecrireUneReponse4()
        
    }

})

function ecrireUneReponse5() {
    if (input5.value === "") {
        alert ("Merci d'écire une réponse s'il vous plait !")
    } else { String(input5.value) != reponse5
        resultat5.innerHTML = "Mauvaise réponse c'était : Roberto Mancini !"
    
    }

    preventDefault()
}

bouton5.addEventListener('click', function() {
    
    if (String(input5.value) === reponse5) {
        resultat5.innerHTML = "Bonne réponse ! C'est Roberto Mancini, ancien entraineur de l'Inter Milan et de Manchester City !"
    } else {
        ecrireUneReponse5()
    
    }
   
})

function ecrireUneReponse6() {
    if (input6.value === "") {
        alert ("Merci d'écire une réponse s'il vous plait !")
    } else { String(input6.value) =! reponse6
        resultat6.innerHTML = "Mauvaise réponse c'était : Wembley(Angleterre) !"
    
    }

    preventDefault()
}

bouton6.addEventListener('click', function() {
    
    if (String(input6.value) === reponse6) {
        resultat6.innerHTML = "Bonne réponse ! C'est le stade de Wembley ce situant en Angleterre !"
    } else {
        ecrireUneReponse6()
        
    }
    
})

function ecrireUneReponse7() {
    if (input7.value === "") {
        alert ("Merci d'écire une réponse s'il vous plait !")
    } else { String(input7.value) =! reponse7
        resultat7.innerHTML = "Mauvaise réponse c'était : Suisse !"
    
    }

    preventDefault()
}

bouton7.addEventListener('click', function() {
    
    if (String(input7.value) === reponse7) {
        resultat7.innerHTML = "Bonne réponse ! C'est la Suisse dans la séance de tirs au but !"
    } else {
        ecrireUneReponse7()
        
    }
    
})