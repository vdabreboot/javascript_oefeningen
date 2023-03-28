"use strict";

function uitvoerknopSpaties(){    
    const waarde = document.getElementById("tekst").value;  
    let spaties = 0;
    for (const character of waarde) {
        if (character === " "){
            spaties++;
        }
    }
    document.getElementById("aantalSpaties").innerText = spaties;    
}

document.getElementById("knopSpaties").onclick = uitvoerknopSpaties;