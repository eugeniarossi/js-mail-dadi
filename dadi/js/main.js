'use strict';

// Definisco due variabili, giocatore e computer, con numero random da 1 a 6
const player = Math.floor(Math.random() * 5) +1;
console.log({player})
const computer = Math.floor(Math.random() * 5) +1;
console.log({computer})

// Stabilisco delle condizioni in cui confronto le due variabili
if (player > computer) {
    console.log('Hai vinto');
} else if (player === computer) {
    console.log('Pari');
} else {
    console.log('Hai perso')
}