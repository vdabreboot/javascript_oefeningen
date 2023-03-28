

function checkPalindroom(){
    const waarde = document.getElementById("tekst").value;
    let palindroom = "Dit is een palindroom";
    for (let index = 0; index < waarde.length; index++) {        
        if (waarde[index] != waarde[waarde.length-index-1]){
            palindroom="Dit is geen palindroom";            
            break;
        }        
    }
    document.getElementById("palindroomResultaat").innerText=palindroom;
}

document.getElementById("tekst").onblur = checkPalindroom;
