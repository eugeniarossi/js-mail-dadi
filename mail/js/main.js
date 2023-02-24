'use strict';

// Definisco un array con la lista di email che possono accedere
const mailList = ['email1@gmail.com', 'email2@outlook.com', 'email3@outlook.com', 'email4@hotmail.it', 'email5@outlook.it'];
// Definisco una variabile in cui salvo l'input dell'utente
const emailInput = document.getElementById('email-input');
// Definisco una variabile per il valore dell'input dell'utente
let userEmail;
// Definisco delle variabili per i button input e reset
const inputButton = document.getElementById('input-button');
const resetButton = document.getElementById('reset-button');
// Definisco una variabile in cui salvo il div in cui mostrerò il risultato
const outcomeShown = document.getElementById('outcome-shown');
// Definisco una variabile esito
let outcome = false;

// Aggiungo un evento onclick al button input
inputButton.addEventListener('click', function () {
        // Salvo il valore dell'input nella variabile userEmail
        userEmail = (emailInput.value);
        // Trasformo in minuscolo la stringa
        userEmail = userEmail.toLowerCase();
        console.log(userEmail);
        // Definisco un ciclo for che attraversa l'array
        for (let i = 0; i < mailList.length; i++) {
            // Confronto l'input utente con gli elementi della lista
            if (userEmail === mailList[i]) {
                outcome = true;
                break;
            }
        }

        // Stampo l'esito
        if (outcome === true) {
            console.log('Accesso consentito');
            outcomeShown.innerText = 'Accesso consentito';
        } else {
            console.log('Accesso negato');
            outcomeShown.innerText = 'Accesso negato';
        }
    }
);

// Aggiungo un evento onclick al reset button
resetButton.addEventListener('click', function() {
    // Azzero il value dell'input email e del risultato mostrato
    emailInput.value = '';
    outcomeShown.innerText = '';
})