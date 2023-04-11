"use strict";

let spelBord;

async function createLayout(width=10){
    //const div = document.getElementById("snake");
    const spelBord= document.getElementById("snake");
    //spelBord = document.createElement("table");
    for(let row=0 ; row<width;row++){
        const tr = document.createElement("div");
        tr.classList.add("row");
        for(let column=0; column < width;column++){
            const td = document.createElement("div");
            td.innerText = " ";
            td.classList.add("column");            
            tr.appendChild(td);         
        }                
        spelBord.appendChild(tr);        
    }
    div.appendChild(spelBord);
}

createLayout();