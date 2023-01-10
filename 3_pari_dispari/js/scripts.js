/* 

    ESERCIZIO:
    scrivere una funzione per verificare se un numero è pari o dispari, quindi chiedere un numero all'utente e comunicargli se è pari o dispari

    STEP:
    1. Definire una funzione che verifichi se un numero è pari o dispari
    2. Chiedere un numero all'utente
    3. Utilizzando la funzione appena definita, dire all'utente se il numero che ha inserito è pari o dispari

*/

function pariODispari(numero) {

    if (isNaN(numero)) {

        return 'ERRORE';

    }
    else if (numero % 2 == 0) {

        return 'pari';
    
    }
        
    return 'dispari';

}

const numeroUtente = parseInt(prompt('Dimmi un numero'));

console.log('numeroUtente', numeroUtente, typeof numeroUtente);

const risposta = pariODispari(numeroUtente);

console.log('risposta', risposta, typeof risposta);

alert('Il numero è ' + risposta);

if (risposta == 'ERRORE') {

    alert('Il numero inserito non è valido');
    
}
else if (risposta == 'pari') {

    alert('Il numero è pari');

}
else {
    
    alert('Il numero è dispari');

}