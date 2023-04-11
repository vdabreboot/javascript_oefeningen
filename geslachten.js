"use strict";

async function leesGegevens(){
    const data = await fetch("geslachten.json");
    if (data.ok){
        const personen = await data.json();        
        const table = document.getElementById("personen");
        personen.forEach(persoon => {
            const row = document.createElement("tr");
            const dtVoornaam = document.createElement("td");
            const dtFamilienaam = document.createElement("td");
            const dtGeslacht = document.createElement("td");
            const dtFoto = document.createElement("td");
            const imgGeslacht = document.createElement("img")
            const imgFoto = document.createElement("img");
            dtVoornaam.innerText = persoon.voornaam;
            dtFamilienaam.innerText = persoon.familienaam;
            imgGeslacht.href= "#";
            row.classList.add("persoon");
            row.classList.add(persoon.geslacht);                                    
            switch(persoon.geslacht){
                case "man": imgGeslacht.src=`${persoon.geslacht}.png`; break;
                case "vrouw" : imgGeslacht.src = `${persoon.geslacht}.png`;break;
                case "x" : imgGeslacht.src = `${persoon.geslacht}.png`;break;
            }
            imgGeslacht.alt = persoon.geslacht;
            imgGeslacht.width=20;
            imgGeslacht.height=40;
            dtGeslacht.appendChild(imgGeslacht);
            imgFoto.src = persoon.foto;
            imgFoto.alt = persoon.foto;
            imgFoto.width=48;
            imgFoto.height=48;
            dtFoto.appendChild(imgFoto);
            row.appendChild(dtVoornaam);
            row.appendChild(dtFamilienaam);
            row.appendChild(dtGeslacht);
            row.appendChild(dtFoto);            
            table.appendChild(row);
        });
    }
}
leesGegevens();
document.querySelectorAll("a").forEach( hyperlink => {
    hyperlink.onclick= function () {
        if (hyperlink.id === "allen" ){
            document.querySelectorAll("tr").forEach( image => image.hidden=false);
        } else {
            document.querySelectorAll(`.persoon.${hyperlink.id}`).forEach( image => image.hidden=false);            
            document.querySelectorAll(`.persoon:not(.${hyperlink.id})`).forEach( image => image.hidden=true);            
        }
    };
});