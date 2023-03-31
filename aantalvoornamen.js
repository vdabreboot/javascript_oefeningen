"use strict";

document.getElementById("btnToevoegen").onclick = function (){
    const lstLijst = document.querySelector("ul");
    const txtWaarde = document.querySelector("input");    
    let liNaam = null;
    // controle dubbels
    /*for (const element of lstLijst.children) {
        if (element.dataset.voornaam === txtWaarde.value){
            liNaam = element;
            liNaam.dataset.aantal++;
            break;
        }
    } */   
    liNaam = document.querySelectorAll(`[data-voornaam]=${txtWaarde.value}`)[0];
    if (liNaam == null){
        liNaam = document.createElement("li");    
        liNaam.dataset.voornaam = txtWaarde.value;
        liNaam.dataset.aantal = 1;
        lstLijst.appendChild(liNaam);        
    }   
    liNaam.innerText=`${liNaam.dataset.voornaam}: ${liNaam.dataset.aantal}`;
    
};