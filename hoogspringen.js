"use strict";

function toevoegen(){    
    const naam = document.getElementById("naam");
    const hoogte = document.getElementById("hoogte");
            
    for (const element of document.querySelectorAll("input:invalid,select:invalid")) {        
        document.getElementById(`${element.id}Fout`).hidden=false;
    }
    for (const element of document.querySelectorAll("`input:valid,select:valid")) {
        document.getElementById(`${element.id}Fout`).hidden=true;
    }
    
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