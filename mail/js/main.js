'use strict';

// Definisco un array con la lista di email che possono accedere
const mailList = ['email1@gmail.com', 'email2@outlook.com', 'email3@outlook.com', 'email4@hotmail.it', 'email5@outlook.it'];
// Definisco una variabile in cui salvo l'input dell'utente
const userInput = prompt('Inserisci la tua e-mail:');
// Definisco una variabile esito
let outcome = 'Accesso negato';

// Definisco un ciclo for che attraversa l'array
for (let i = 0; i < mailList.length; i++) {
    // Confronto l'input utente con gli elementi della lista
    if (userInput === mailList[i]) {
        outcome = 'Accesso consentito';
        break;
    }
}
// Stampo l'esito
console.log(outcome);