/* 

    ESERCIZIO:
    generare 10 numeri random (con un for o con un while) attraverso una funzione e stamparli in console

    STEP:
    1. Definire una funzione per generare un numero random
    2. Definiamo un ciclo for da 0 a 9
    3. Per ogni iterazione del ciclo:
        3a. genero un numero random tramite una funzione 
        3b. stampo il numero appena generato in console




    Math.floor(numero)          -> arrotonda "numero" per difetto 
    Math.random()               -> genera un numero casuale tra 0 (compreso) e 1 (escluso)
    Math.random() * numero      -> numero casuale tra 0 (compreso) e 1 (escluso) * numero -> equivale a fare la percentuale di un numero
    Math.random() * numero      -> questa cosa qui, come valore minimo mi da 0 e come valore massimo mi da il 99.999999...% del numero
    Se voglio ottenere un numero random compreso tra 0 e 10 -> Math.random() * 11 (perché Math.floor(0.99999 * 11) = 10)
    Se voglio ottenere un numero random compreso tra 1 e 10 -> Math.floor(Math.random() * 10) + 1
    Se voglio ottenere un numero random compreso tra 20 e 30 -> CERCO SU GOOGLE E CAPISCO CHE C'è SCRITTO


    OBIETTIVO: voglio un numero random tra 20 e 30
    Test 1: Math.floor(Math.random() * 30) -> 0 - 29
    Test 2: Math.floor(Math.random() * 30) + 1 -> 1 - 30
    Test 3: Math.floor(Math.random() * (30 + 1)) -> 0 - 30
    Test 4: Math.floor(Math.random() * (30 + 1)) + 20 -> 20 - 50
        - Math.random() = 0 => 0 * 31 = 0 => Math.floor(0) = 0 => 0 + 20 = 20 (MINIMO = 20)
        - Math.random() = 0.9999... => 0.99 * 31 = 30.999... => Math.floor(30.9999) = 30 => 30 + 20 = 50 (MASSIMO = 50)


    Test 5 e SOLUZIONE: Math.floor(Math.random() * (30 - 20 + 1)) + 20                  -> 20 - 30



*/

function generaNumeroRandom(min, max) {
    
    const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;

    return numeroRandom;

}



for (let i = 0; i < 10; i++) {

    const numero = generaNumeroRandom(1, 5);

    console.log(numero);

}



// ...10k LOC



for (let i = 0; i < 10; i++) {

    const numero = generaNumeroRandom(90, 100);

    console.log(numero);

}
