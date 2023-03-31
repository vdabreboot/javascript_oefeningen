"use strict";

document.querySelector("#links").onchange=function(){    
    document.querySelector("#eenNaarRechts").disabled=false;    
}

document.querySelector("#rechts").onchange=function(){
    document.querySelector("#eenNaarLinks").disabled=false;        
}

function wisselEnkel(bron,bestemming){
    const nieuw= document.createElement("option");
    nieuw.innerText=bron; 
    bestemming.appendChild(nieuw);             
}
function wisselAllemaal(bron,bestemming){
    for (const iterator of bron) {
        wisselEnkel(iterator.value,bestemming);        
    }
    bron.length=0;    
}
document.querySelector("#eenNaarRechts").onclick=function(){     
    const bron =  document.querySelector("#links")     
    wisselEnkel(bron.value,document.querySelector("#rechts"))
    bron.children[bron.selectedIndex].remove(); 
    this.disabled=true;       
    document.querySelector("#allesNaarLinks").disabled=false
}

document.querySelector("#eenNaarLinks").onclick=function(){
    const bron =  document.querySelector("#rechts") 
    wisselEnkel(bron.value,document.querySelector("#links"))        
    bron.children[bron.selectedIndex].remove();
    this.disabled=true;   
    document.querySelector("#allesNaarRechts").disabled=false
}

document.querySelector("#allesNaarRechts").onclick=function(){    
    wisselAllemaal(document.querySelector("#links"),document.querySelector("#rechts"))        
    this.disabled=true;    
    document.querySelector("#allesNaarLinks").disabled=false
}
document.querySelector("#allesNaarLinks").onclick=function(){
    wisselAllemaal(document.querySelector("#rechts"),document.querySelector("#links"))        
    this.disabled=true;    
    document.querySelector("#allesNaarRechts").disabled=false
}
