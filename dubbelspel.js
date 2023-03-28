"user strict";


function meldingIsLeeg(){
    if (this.value==="") {        
        document.getElementById("fout").hidden=false;    
    } else { 
        document.getElementById("fout").hidden=true;    
    }
}

const spelers = document.getElementById("spelers");
const spelersInput = spelers.getElementsByTagName("input");
for (const spelerInput of spelersInput) {
    spelerInput.onblur=meldingIsLeeg;
}
