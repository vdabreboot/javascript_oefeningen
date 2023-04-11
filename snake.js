"use strict";

let spelBord;
let snake;

async function createLayout(width=10){    
    const spelBord= document.getElementById("snake");    
    for(let row=0 ; row<width;row++){
        const tr = document.createElement("div");
        tr.classList.add("row");
        for(let column=0; column < width;column++){
            const td = document.createElement("div");
            td.id = `tile_${row}-${column} `;
            td.innerText = " ";
            td.classList.add("column");                        
            tr.appendChild(td);         
        }                
        spelBord.appendChild(tr);        
    }    
}
async function init(){
    await(createLayout());
    snake = { x: Math.floor(Math.random()*10), y: Math.floor(Math.random()*10)};
    console.log(snake);
    console.log(`tile_${snake.x}-${snake.y}`);
    const divSnakeHead = document.getElementById(`tile_${snake[0]}-${snake[1]}`);
    divSnakeHead.classList.add("snake");
}

/*createLayout();*/
init();