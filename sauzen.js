"use strict";

const raden = document.getElementById("raden");
const voorbeeldElement = document.getElementById("voorbeeld");
const hangman = document.getElementById("hangman");
let saus = kiesSaus();
let teller = 0;

async function kiesSaus() {
    const response = await fetch("sauzen.json");
    if (response.ok) {
        const sauzen = await response.json();
        //const saus = sauzen[Math.floor(Math.random()*sauzen.length)];
        saus = sauzen[Math.floor(Math.random() * sauzen.length)];
        console.log(saus.length);
        let voorbeeld = '';
        for (const iterator of saus) {
            voorbeeld += ".";
        }
        document.getElementById("voorbeeld").innerText = voorbeeld;
        raden.disabled = false;
        return saus;
    }
    return null;
}
raden.onclick = function () {
    const letter = document.getElementById("letter").value;
    let voorbeeld = document.getElementById("voorbeeld").innerText;
    const resultaat = document.getElementById("resultaat");
    let nieuwvoorbeeld = "";
    let gevonden = false;
    if(teller < 9){
        for (let index = 0; index < saus.length; index++) {
            const element = saus[index];
            if (element === letter) {
                nieuwvoorbeeld += letter;
                gevonden=true;
            } else {
                nieuwvoorbeeld += voorbeeld[index]
            }
        }
        if (!gevonden){
            teller++;
            hangman.src = `${teller}.png`;
        } 
    }
    voorbeeldElement.innerText = nieuwvoorbeeld;
    if (nieuwvoorbeeld === saus) {        
        resultaat.innerText=`U heeft gewonnen.  De saus was ${saus}`;
    } else {        
        if (teller === 10) {
            resultaat.innerText = `U heeft verloren. de saus was ${saus}`;
        }
    }
}


