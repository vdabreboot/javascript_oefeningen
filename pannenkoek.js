"use strict";

for (const eenClass of document.getElementById("beschrijving").classList) {
    console.log(eenClass);
}
    
for (const element of document.querySelectorAll("#ingrediënten, #werkwijze")) {
    element.onclick = function(){
        /*if(this.classList.contains("opvallend")) {
            this.classList.remove("opvallend");
        } else {
            this.classList.add("opvallend");            
        }*/
        this.classList.toggle("opvallend");
    }
}

for (const hyperlink  of document.querySelectorAll("a[data-teverbergenid")) {
    hyperlink.onclick = function(){
        if(document.getElementById(this.dataset.teverbergenid).hidden ==true){
            document.getElementById(this.dataset.teverbergenid).hidden=false;            
        } else {
            document.getElementById(this.dataset.teverbergenid).hidden=true;            
        }
        if (hyperlink.innerText === "verbergen"){
            this.innerText="tonen";
        } else {
            this.innerText="verbergen";
        }
    }
}
