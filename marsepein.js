"use strict"


function wisselIngredient(){
    const keuzetekst = this.innerText;    
    for (const item of document.querySelectorAll("#ingrediënten li")) {
      if (item.innerText === keuzetekst)  {
        item.classList.add("opvallend");
      }else{
        item.classList.remove("opvallend");
      }
    }   
}
function wisselWerkwijze(){
    const keuzetekst = this.innerText;    
    for (const item of document.querySelectorAll("#werkwijze li")) {
        if (item.innerText === keuzetekst)  {
            item.classList.add("opvallend");
        }else{
            item.classList.remove("opvallend");
        }
    }  
}


const ingredienten = document.querySelectorAll("#ingrediënten li");
const werkwijzen = document.querySelectorAll("#werkwijze li");

for (const ingredient of ingredienten) {
    ingredient.onclick = wisselIngredient;
    
}
for (const werkwijze of werkwijzen) {
    werkwijze.onclick = wisselWerkwijze;
}