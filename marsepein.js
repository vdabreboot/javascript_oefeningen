"use strict"

function wissel(){
    this.classList.add("opvallend");
    for (const sibling of this.parentElement.children) {
        if (sibling != this)
            sibling.classList.remove("opvallend");
    }
}

const ingredienten = document.querySelectorAll("#ingrediënten li");
const werkwijzen = document.querySelectorAll("#werkwijze li");

for (const ingredient of ingredienten) {
    ingredient.onclick = wissel;
    
}
for (const werkwijze of werkwijzen) {
    werkwijze.onclick = wissel;
}