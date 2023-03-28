"use strict";

function telKlinkers(){
    let waarde = document.getElementById("tekst").value;
    let aantal = 0;
    for (const letter of waarde) {
        if (letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U" ||
            letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"
            ){
            aantal++;
        }
    }
    document.getElementById("aantalKlinkers").innerText=aantal;
}

document.getElementById("tekst").oninput = telKlinkers;
