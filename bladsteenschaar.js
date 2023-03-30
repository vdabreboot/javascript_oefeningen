"use strict";

function wieHeeftErGewonnen() {
    const keuzeSpeler = document.querySelectorAll("#keuzesSpeler .dunneKader");
    let antwoord = "";
    if (keuzeSpeler.length === 1) {
        const keuzeSpelerEnkel = keuzeSpeler[0];
        const antwoordSpeler = keuzeSpelerEnkel.dataset.beschrijving;
        const keuzesComputer = document.querySelectorAll("#keuzesComputer img");
        let antwoordComputer = "";
        for (const keuzeComputer of keuzesComputer) {
            if (keuzeComputer.hidden === false) {
                antwoordComputer = keuzeComputer.dataset.beschrijving;
            }
        }
        if (antwoordSpeler === antwoordComputer) {
            antwoord = "Gelijkspel";
        } else if (antwoordSpeler === "blad" && antwoordComputer === "steen") {
            antwoord = "De gebruiker";
        } else if (antwoordSpeler === "steen" && antwoordComputer === "schaar") {
            antwoord = "De gebruiker";
        } else if (antwoordSpeler === "schaar" && antwoordComputer === "blad") {
            antwoord = "De gebruiker";
        } else {
            antwoord = "De computer";
        }
    } else {
        antwoord = "Fout in programma logica.  Mijn excuses voor dit slecht programma."
    }
    const resultaatBox = document.querySelector("#resultaat");
    resultaatBox.innerText = antwoord;
}
function keuzeComputer() {
    const computerKeuze = Math.floor((Math.random() * 3));
    const keuzesComputer = document.querySelectorAll("#keuzesComputer img");
    let teller = 0;    
    for (const element of keuzesComputer) {
        if (teller === computerKeuze) {
            element.hidden = false;
        } else {
            element.hidden = true;
        }
        teller++;
    }
}

const keuzesSpeler = document.querySelectorAll("#keuzesSpeler img");

for (const keuzeSpeler of keuzesSpeler) {
    keuzeSpeler.onclick = function () {
        this.classList.add("dunneKader");
        let teller = 0;
        for (const sibling of this.parentElement.children) {
            if (sibling != this)
                sibling.classList.remove("dunneKader");
            teller++;
        }
        keuzeComputer();
        wieHeeftErGewonnen();
    };
}