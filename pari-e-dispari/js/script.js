// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


// L’utente sceglie pari o dispari
var utentePariODispari = prompt("Scegli pari o dispari");

// L’utente inserisce un numero da 1 a 5
var numeroUtente = parseInt( prompt("Dimmi un numero da 1 a 5") );

//richiamo la funzione che genera un numero dal computer da 1 a 5
var numeroComputer = getRandomInteger();


// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).

var somma = numeroUtente + numeroComputer;

var verdetto = valutaPariODispari(somma);

if (verdetto === utentePariODispari) {
    alert("Hai vinto!");
} else {
    alert("Ha vinto il computer");
}







// FUNZIONE: Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function getRandomInteger() {

    numeroGenerato = Math.floor(Math.random() * 5) + 1;

    return numeroGenerato;
}

// FUNZIONE: Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
function valutaPariODispari(numeroDaValutare) {
    var risultato;


    if ( numeroDaValutare % 2 == 0 ) {
        risultato = "pari";
    } else {
        risultato = "dispari";
    }

    return risultato;
}