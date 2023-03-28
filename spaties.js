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
function checkLeeg(){
    if (this.value === ""){
        document.getElementById("knopSpaties").disabled=true;    
    } else {
        document.getElementById("knopSpaties").disabled=false;    
    }
}

document.getElementById("knopSpaties").onclick = uitvoerknopSpaties;
document.getElementById("tekst").oninput = checkLeeg;
