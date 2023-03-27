"use strict";

let begroeting = document.getElementById("begroeting")
const datum = new Date();
if(datum.getHours() < 12 ){
    begroeting.innerText="Goede voormiddag";
 } else if (datum.getHours() < 18)  {
    begroeting.innerText="Goede namiddag";
 } else {
    begroeting.innerText="Goede avond";
 }