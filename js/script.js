// Palindroma
// Chiedere all’utente di inserire una parola; Creare una funzione per capire se la parola inserita è palindroma - anna


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.



//Input utente, inserire una parola

var parolaInseritaUno = prompt("Inserisci una parola", "Inserisci: ");
var parolaInseritaDue = prompt("Inserisci una parola", "Inserisci: ");

parolaInseritaUno = parolaInseritaUno.toString(parolaInseritaUno);
parolaInseritaDue = parolaInseritaDue.toString(parolaInseritaDue);



// RICAPITOLANDO SCAN CON IL WHILE [presupposto del ciclo sarà j=0; j < parola1.length && k = parola2.length; k > 0; k--] 
// CONDIZIONE DI UGUAGLIANZA if (parola1[j] == parola2[k]) {j++; k--}  altrimenti stampa errore.

// Il tutto avverrà in una funzione che prende come argomento le 2 parole di input


palindromaFunzione(parolaInseritaUno, parolaInseritaDue);


function palindromaFunzione(primaParola, secondaParola) {

    var parolaCorrenteUno;
    var parolaCorrenteDue;
    for ( var i = 0; i < primaParola.length; i++) {

        parolaCorrenteUno = parolaCorrenteUno + primaParola[i];
    }
    console.log(parolaInseritaUno);

    for ( var j = secondaParola.length; j >= 0; j--) {

        parolaCorrenteDue = parolaCorrenteDue + secondaParola[j];
    }
    console.log(parolaCorrenteDue);

    var messaggio;

    // if (parolaCorrenteUno === parolaCorrenteDue) {
    //     messaggio = "Le due parole sono palindrome";
    // }

}
