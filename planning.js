"use strict";
datum = new Date();

const datumLabels = document.querySelectorAll("label");
for (const datumlabel of datumLabels) {
    
    datumlabel.innerText = datum.toLocalDateString();    
}


