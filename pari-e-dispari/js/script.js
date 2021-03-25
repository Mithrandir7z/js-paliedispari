// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


//generare 2 numeri in 2 variabili
var generatoUtente;
var generatoComputer;


valutaNumeri(generatoUtente, generatoComputer);


function valutaNumeri (numeroUtente, numeroComputer) {

    numeroUtente = Math.floor(Math.random() * 5) + 1;
    console.log("numero utente", numeroUtente);

    numeroComputer = Math.floor(Math.random() * 5) + 1;
    console.log("numero computer", numeroComputer);

    //confrontare quale tra i due è il maggiore

    if (numeroUtente > numeroComputer) {
        alert("hai vinto!");
    } else {
        alert("ha vinto il computer :(");
    }

}