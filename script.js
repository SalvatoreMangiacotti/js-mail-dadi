// MAIL

// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo,
// utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: Non è necessario provvedere alla validazione delle email




// Le email degli invitati vengono salvate all'interno dell'array "partyListEmail"
const partyListEmail = ["ahsokatano@starwars.com", "bobafett@starwars.com", "mandalorian@starwars.com", "yoda@starwars.com"];

// Il prompt permettere all'utente di inserire la sua email
let askUserEmail = prompt("Inserisci la tua email: ");

// Viene creata una variabile con un valore iniziale "false"
let onTheList = false;

// Cicliamo sull'intero array
for (i = 0; i < partyListEmail.length; i++) {

    // SE l'email dell'utente sarà identica a un email presente sulla lista
    if (askUserEmail === partyListEmail[i]) {

        //ALLORA il valore della variabile on theList cambierà in true
        onTheList = true;

        //break permette al ciclo di interrompersi nel caso la condizione fosse vera
        break;

    }

}

// Se la condizione si verifica
if (onTheList) {

    console.log("L'email è nella lista degli invitati, ti diamo il benvenuto!");

}
// Se la condizione NON si verifica
else {

    console.log("Ci dispiace, non riusciamo a trovare la tua email nella lista degli invitati");

}


// GIOCO DEI DADI

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?

// Math.random di default crea numeri compresi tra 0 e meno di 1.
// Il numero generato da Math.random viene moltiplicato per 6 + 1.
// Il risultato viene arrotondato per difetto con Math.floor,quindi il numero massimo ottenibile sarà 6.


const playerDice = Math.floor(Math.random() * 6) + 1;
const computerDice = Math.floor(Math.random() * 6) + 1;
let andTheWinnerIs;

console.log(`Il tuo numero : ${playerDice} 🎲`);
console.log(`Il numero dell'avversario : ${computerDice} 🎲`);


//SE il numero del giocatore è più alto di quello del computer
if (playerDice > computerDice) {

    // ALLORA vince il giocatore
    andTheWinnerIs = "Complimenti, hai vinto! 🎉";

}
//SE il numero del giocatore è più basso di quello del computer
else if (playerDice < computerDice) {

    // ALLORA vince il computer
    andTheWinnerIs = "Ha vinto il computer 🤖";

} else {

    // ALTRIMENTI sarà pareggio
    andTheWinnerIs = "E' un pareggio, che partita emozionante! 🤝";

}

console.log(andTheWinnerIs);