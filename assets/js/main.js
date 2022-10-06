// numero di chilometri che il passeggero vuole percorrere
const userKm = Number(prompt("Quanti chilometri vuoi percorrere?"));
//console.log(userKm);

// età del passeggero
const userAge = Number(prompt("Quanti anni hai?"));
//console.log(userAge);

// definisco il prezzo del biglietto al km
const priceKm = 0.21;

// prezzo totale del biglietto
let ticketPrice = priceKm * userKm;

// calcolo il valore del biglietto per gli over 65 e i minorenni
if (userAge >= 65) {
    let discount = ((ticketPrice * 40) / 100);
    ticketPrice = ticketPrice - discount;
    //console.log(`Il prezzo totale del biglietto è: ${ticketPrice.toFixed(2)} €`);
} else if (userAge < 18) {
    let discount = ((ticketPrice * 20) / 100);
    ticketPrice = ticketPrice - discount;
    //console.log(`Il prezzo totale del biglietto è: ${ticketPrice.toFixed(2)} €`);
}

// output km
document.getElementById('km').innerHTML = `Chilometri totali: ${userKm} km`;

// output prezzo
document.getElementById('price').innerHTML = `Il prezzo totale del biglietto è: ${ticketPrice.toFixed(2)} €`;