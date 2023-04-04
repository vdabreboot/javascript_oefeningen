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
        let hoogste = lijst.dataset.hoogste;
        tdNaam.innerText=naam.value;
        tdHoogte.innerText=hoogte.value;
        //tdHoogte.dataset.hoogte=int(hoogte.value);
        //tdHoogste = hoogte.value >= lijst.dataset.hoogste?"*":"";
        tr.appendChild(tdNaam);
        tr.appendChild(tdHoogte);        
        lijst.appendChild(tr);
    }

}

document.getElementById("toevoegen").onclick=toevoegen;