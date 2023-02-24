'use strict';

// Definisco una variabile in cui salvo il play button
const playButton = document.getElementById('play-button');
// Definisco una variabile in cui salvo il div in cui mostrerò il risultato
let risultato = document.getElementById('risultato');

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
            risultato.innerText = ('Hai vinto');
        } else if (player === computer) {
            console.log('Pari');
            risultato.innerText = ('Pari');
        } else {
            console.log('Hai perso');
            risultato.innerText = ('Hai perso');
        }
});

