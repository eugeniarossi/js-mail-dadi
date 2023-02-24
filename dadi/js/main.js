'use strict';

// Definisco una variabile in cui salvo il play button
const playButton = document.getElementById('play-button');
// Definisco una variabile in cui salvo il div in cui mostrerò il risultato
let result = document.getElementById('result');

// Aggiungo un evento onclick al play button per far partire il gioco
playButton.addEventListener('click', 
    function () {
        // Definisco due variabili, giocatore e computer, con numero random da 1 a 6
        const player = Math.floor(Math.random() * 5) +1;
        console.log({player});
        const computer = Math.floor(Math.random() * 5) +1;
        console.log({computer});

        // Stabilisco delle condizioni in cui confronto le due variabili
        if (player > computer) {
            console.log('Hai vinto');
            result.innerText = ('Hai vinto');
        } else if (player === computer) {
            console.log('Pari');
            result.innerText = ('Pari');
        } else {
            console.log('Hai perso');
            result.innerText = ('Hai perso');
        }
    }
);

