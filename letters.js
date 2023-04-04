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
                localStorage.setItem("zoek",letters);
                if(naam.includes(letters)){
                    const newLink = document.createElement("a");
                    newLink.innerText=element.name
                    newLink.href = "#" //`/lettersdetail.html`
                    newLink.onclick=klik;
                    newLink.dataset.id = element.id;
                    const newLi = document.createElement("li");
                    newLi.appendChild(newLink);
                    lijst.appendChild(newLi);
                }
            });
    }
}
function klik(){    
    localStorage.setItem("id",this.dataset.id);
    window.open("/lettersDetail.html");
}

document.getElementById("letters").value=localStorage.getItem("zoek");
document.getElementById("zoeken").onclick=zoeken;