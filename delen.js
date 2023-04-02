"use strict";

document.getElementById("btnDelen").onclick = function(){
    console.log("click");
    const verkeerdeElementen = document.querySelectorAll("input:invalid");
    verkeerdeElementen.forEach( e => {
        document.getElementById(`${e.id}Fout`).hidden=false;
    });
    const correcteElementen = document.querySelectorAll("input:valid");
    correcteElementen.forEach( e => {
        document.getElementById(`${e.id}Fout`).hidden=true;
    });
    if (verkeerdeElementen.length===0){
        const getal1 = document.getElementById("getal1").value
        const getal2 = document.getElementById("getal2").value
        const resultaat = getal1 / getal2;
        document.getElementById("resultaat").innerText=`${resultaat}`;
    }

}