"use strict";

async function leesUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (response.ok){
        const userdata = await response.json();
        const usersList = document.getElementById("users");
        userdata.forEach(user => {
            console.log(user.name);
            const newLink=document.createElement("a");
            newLink.innerText=user.name;
            newLink.href = '#' //`https://jsonplaceholder.typicode.com/albums?userid${user.id}`;
            newLink.dataset.id=user.id;
            newLink.onclick=leesAlbum;
            const newLI = document.createElement("li");
            newLI.appendChild(newLink);
            const list = document.getElementById("users");
            list.appendChild(newLI);            
        });
    }
}

async function leesAlbum(){
    const url = `https://jsonplaceholder.typicode.com/albums?userId=${this.dataset.id}`;
    console.log(url)    
    const response = await fetch(url);
    if (response.ok){
        const albums = await response.json();
        const albumLijst = document.getElementById("albums");
        while(albumLijst.children.length>0){
            albumLijst.children[0].remove();
        }
        albums.forEach(album => {
            const albumItem = document.createElement("li");            
            albumItem.innerText = album.title;
            albumLijst.appendChild(albumItem);            
        });
    }
}

const users =  leesUsers();

