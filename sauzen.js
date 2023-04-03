"use strict";

const raden = document.getElementById("raden");
const voorbeeldElement = document.getElementById("voorbeeld");

async function  kiesSaus(){
    const response = await fetch("sauzen.json");
    if (response.ok){
        const sauzen = await response.json();        
        const saus = sauzen[Math.floor(Math.random()*sauzen.length)];
        let voorbeeld = '';                
        for (const iterator of saus) {
            voorbeeld+=".";
        }
        document.getElementById("voorbeeld").innerText = voorbeeld;
        raden.disabled=false;
        return saus;        
    }
}
raden.onclick= function () {  
    const letter = document.getElementById("letter").value;
    let voorbeeld = document.getElementById("voorbeeld").innerText;    
    for(let index ;  index < saus.length; index++ ){
        const element = saus[index];
        if (element === letter){
            voorbeeld[index] = letter;
        }       
    }
    voorbeeldElement.innerText = voorbeeld;
    if (voorbeeld === saus){
        const resultaat = document.getElementById("gewonnen");
        resultaat.innerText("U heeft gewonnen");
    }else {

    }
}

const saus = kiesSaus();
