"use strict";

const deuren=7;
const frietdeuren = document.getElementById("frieten");

const deurfriet = Math.floor(Math.random()*deuren)

for (let index = 0; index < 7; index++) {
    const image = document.createElement("img");
    image.src = "deurtoe.png"
    image.dataset.status="gesloten";
    if (index === deurfriet){
        image.dataset.frietaanwezig = "true";
    } else {
        image.dataset.frietaanwezig = "false";
    }
    image.onclick=function() {        
        if (this.dataset.frietaanwezig === "true"){
            this.src="gevonden.png";
            gevonden();
        } else {
            this.dataset.status="open";
            this.src="deuropen.png";
        }
    }
    frietdeuren.appendChild(image);
    
}
function gevonden(){
    let teller = 1;
    const openDeuren = document.querySelectorAll("img");
    openDeuren.forEach( deur => {
        if (deur.dataset.status == "open"){
            teller++;
        }
    })
    //const aantal = openDeuren.length;
    const feedback = document.getElementById("feedback");
    feedback.innerText=`U had ${teller} beurten nodig.`;
    feedback.hidden=false;
        

}