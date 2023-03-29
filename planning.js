"use strict";

let datum = new Date();

const table = document.querySelector("tbody");
for (let index = 0; index < 10; index++) {    
    datum.setDate(datum.getDate() + 1);
    const tr = document.createElement("tr");
    const tdDatum = document.createElement("td");
    const tdTodo = document.createElement("td");
    const tdInput = document.createElement("input");    
    tdDatum.innerText = datum.toLocaleDateString();
    tdTodo.appendChild(tdInput);    
    tr.appendChild(tdDatum);
    tr.appendChild(tdTodo);    
    table.appendChild(tr);
}
