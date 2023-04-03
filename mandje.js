"use strict";

const beschikbareBurgersLI = document.getElementById("beschikbaar");
const mandjeLI = document.getElementById("mandje");
const aantal = document.getElementById("aantal")

/*
mandje.innerHTML = localStorage.getItem("inhoudMandje");
aantal.innerText = mandje.children.length;      
document.querySelectorAll("#beschikbaar li").forEach( element => {    
    element.onclick= function(){        
        const newElement = document.createElement("li");
        newElement.innerText = this.innerText;
        mandje.appendChild(newElement);
        aantal.innerText = mandje.children.length;        
        localStorage.setItem("inhoudMandje",mandje.innerHTML);
    };
} );*/

function voegBurgerToe(value){
    const newElement = document.createElement("li");    
    newElement.innerText = value;
    mandjeLI.appendChild(newElement);
    aantal.innerText = mandje.length;                    
}

let mandje = JSON.parse(localStorage.getItem("mandje")) ;
if (mandje === null) {
    mandje = [];
} else {
    mandje.forEach(element => {
        voegBurgerToe(element);
    });
}
document.querySelectorAll("#beschikbaar a").forEach( element => {    
    element.onclick= function(){        
        mandje.push(element.innerText);
        localStorage.setItem("mandje",JSON.stringify(mandje));
        voegBurgerToe(element.innerText);
    };
} );