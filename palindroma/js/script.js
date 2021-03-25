// Palindroma
// Chiedere all’utente di inserire una parola; Creare una funzione per capire se la parola inserita è palindroma - anna


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.



//Input utente, inserire una parola

var parolaInseritaUno = prompt("Inserisci una parola", "Inserisci: ");


// Il tutto avverrà in una funzione che prende come argomento le 2 parole di input


var parolaDaConfrontare = palindromaFunzione(parolaInseritaUno);


if (parolaDaConfrontare == parolaInseritaUno) {
    alert("La parola è palindroma!");
} else {
    alert("La parola NON è palindroma!");
}


function palindromaFunzione(primaParola) {

    var parolaCorrenteUno = "";

    for ( var j = primaParola.length - 1; j >= 0; j--) {

        parolaCorrenteUno = parolaCorrenteUno + primaParola[j];
    }
    console.log(parolaCorrenteUno);

    var messaggio;

    return parolaCorrenteUno;
}
