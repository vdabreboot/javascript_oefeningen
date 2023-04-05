"use strict";

let data;

function lijnToevoegen(data,style = "color:black"){
    const lijst = document.getElementById("lijst");        
    const rij = document.createElement("tr");
    const dataNaam = document.createElement("td");
    const dataSprong = document.createElement("td");
    dataNaam.innerText=data.naam;
    dataNaam.style=style;
    dataSprong.innerText = data.sprong;
    dataSprong.style=style;
    rij.appendChild(dataNaam);
    rij.appendChild(dataSprong);
    lijst.appendChild(rij);
}
async function leesData(){
    const response = await fetch("verspringen.json");
    if (response.ok){
        const data = await response.json();        
        const gemiddelde = ((data.map ( data => data.sprong).reduce( (som,getal) => som+=getal))/data.length).toFixed(2);        
        data.filter( data => Number(data.sprong) < gemiddelde).forEach(element => {
            lijnToevoegen(element,"color:red");
        });
        lijnToevoegen({naam: "GEMIDDELDE" , sprong: gemiddelde},"color:green");
        data.filter( data => Number(data.sprong) >= gemiddelde).forEach(element => {
            lijnToevoegen(element,"color:blue");
        });
    }
}

leesData()