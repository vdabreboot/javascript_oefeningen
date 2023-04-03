"use strict";

async function leesPagina(pagina){
    const response = await fetch(`https://reqres.in/api/users?page=${pagina}&per_page=10` );
    const lijst = document.getElementById("lijst");
    if (response.ok){
        const users = await response.json();
        users.data.forEach(user => {
            let newLI = document.createElement("li");
            let nieuw = document.createElement("a");
            nieuw.href="#";
            nieuw.innerText = `${user.first_name} ${user.last_name} `;
            nieuw.dataset.voornaam = user.first_name;
            nieuw.dataset.achternaam = user.last_name;
            nieuw.dataset.email = user.email;
            nieuw.dataset.avatar = user.avatar;
            nieuw.onclick= toonDetail;
            newLI.appendChild(nieuw);
            lijst.appendChild(newLI);
        });       
    }
}
function toonDetail(){
    document.getElementById("detail").hidden=false;
    document.getElementById("voornaam").innerText= this.dataset.voornaam ;
    document.getElementById("achternaam").innerText = this.dataset.achternaam ;
    document.getElementById("email").innerText = this.dataset.email ;
    document.getElementById("avatar").src = this.dataset.avatar ;
    
}

leesPagina();