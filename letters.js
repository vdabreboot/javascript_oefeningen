"use strict";

async function zoeken(){
    const url = "https://jsonplaceholder.typicode.com/users"
    const response = await fetch(url);
    if (response.ok){
        const letters= document.getElementById("letters").value;
        const lijst= document.getElementById("lijst");
        while (lijst.children.length>0){
            lijst.children[0].remove();
        }
        const data = await response.json();        
            data.forEach(element => {
                const naam = element.name;
                if(naam.includes(letters)){
                    const newLi = document.createElement("li");
                    newLi.innerText = element.name;
                    lijst.appendChild(newLi);
                }
            });
        
    }
}
document.getElementById("zoeken").onclick=zoeken;