"user strict";


function meldingIsLeeg(){
    if (this.value==="") {
        //document.getElementById("fout").innerText="verplicht";
        document.getElementById("fout").hidden=false;
    }
}

//const spelers = document.getElementById("spelers");
const spelersInput = document.getElementsByTagName("input");
for (const spelerInput of spelersInput) {
    spelerInput.onblur=meldingIsLeeg;
}
