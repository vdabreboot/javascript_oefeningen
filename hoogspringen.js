"use strict";

function toevoegen(){    
    const naam = document.getElementById("naam");
    const hoogte = document.getElementById("hoogte");
        
    document.getElementById("feedbackNaam").hidden = naam.checkValidity()?true:false;
    document.getElementById("feedbackHoogte").hidden = hoogte.checkValidity()?true:false;
    
    if (naam.checkValidity() && hoogte.checkValidity()){
        const tr = document.createElement("tr");
        const tdNaam = document.createElement("td");
        const tdHoogte = document.createElement("td");        
        const tdHoogste = document.createElement("td");
        const lijst = document.getElementById("lijst");
        const lstHoogten = document.querySelectorAll("td[data-hoogte]");
        let strLijstHoogste = lijst.dataset.hoogste;
        let numberLijstHoogste = Number(strLijstHoogste);
        tdNaam.innerText=naam.value;
        tdHoogte.innerText=hoogte.value;
        tdHoogste.dataset.hoogte=hoogte.value;
        const numberHoogste=Number(hoogte.value);        
        if (numberHoogste >= numberLijstHoogste){
            lijst.dataset.hoogste = numberHoogste;
            tdHoogste.innerText = "*";
            lstHoogten.forEach(element => {                                
                element.innerText = Number(element.dataset.hoogte) === numberHoogste?"*":"";                                
            });
        }                
        tr.appendChild(tdNaam);
        tr.appendChild(tdHoogte);        
        tr.appendChild(tdHoogste);
        lijst.appendChild(tr);
    }
}

document.getElementById("toevoegen").onclick=toevoegen;