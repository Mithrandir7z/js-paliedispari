// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


//chiedo se scegli pari o dispari
var utentePariODispari = prompt("Scegli pari o dispari");

//chiedo un numero da 1 a 5
var numeroUtente = parseInt( prompt("Dimmi un numero da 1 a 5") );

//generare un numero dal computer da 1 a 5
numeroComputer = getRandomInteger();


function getRandomInteger() {

    numeroGenerato = Math.floor(Math.random() * 5) + 1;

    return numeroGenerato;
}


function valutaPariODispari(numeroDaValutare) {
    var risultato;


    if ( numeroDaValutare % 2 == 0 ) {
        risultato = "pari";
    } else {
        risultato = "dispari";
    }


}