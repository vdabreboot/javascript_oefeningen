"use strict";

function wieHeeftErGewonnen(){
    const keuzeSpeler = document.querySelectorAll("#keuzesSpeler .dunneKader");   
    const c = keuzeSpeler[0] ;
    const antwoordSpeler = c.dataset.beschrijving;
    const keuzeComputer = document.querySelector("#keuzeComputer");
    const antwoordComputer = keuzeComputer.dataset.beschrijving;
    
    console.log(`speler: ${antwoordSpeler}`);
    console.log(`computer: ${antwoordComputer}`);
}

const keuzesSpeler = document.querySelectorAll("#keuzesSpeler img");

for (const keuzeSpeler of keuzesSpeler) {
    keuzeSpeler.onclick = function (){
        this.classList.add("dunneKader");
        const computerKeuze = Math.floor((Math.random()*3)+1);
        let teller = 0;
        let keuzeComputerImage = "";
        let keuzeComputerBeschrijving = "";
        for (const sibling of this.parentElement.children) {
            if(sibling != this)
                sibling.classList.remove("dunneKader");
            teller++;                
            if(teller === computerKeuze){
                keuzeComputerImage = sibling.getAttribute("src");                
                keuzeComputerBeschrijving = sibling.dataset.beschrijving;                
            }            
        }
        const keuzeComputer = document.querySelector("#keuzeComputer");        
        keuzeComputer.setAttribute("src",keuzeComputerImage);
        keuzeComputer.dataset.beschrijving=keuzeComputerBeschrijving;
        keuzeComputer.hidden=false;
        wieHeeftErGewonnen();
    };
}