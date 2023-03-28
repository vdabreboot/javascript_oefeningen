"use strict;"

document.getElementById("zonderOfMetAfbeeldingen").onclick = function () {    
    let tonen = false;
    if (this.innerText === "Zonder afbeeldingen"){
        this.innerText = "Met afbeeldingen";
        tonen=false;
    } else {
        this.innerText = "Zonder afbeeldingen";
        tonen=true;
    }
    const images = document.querySelectorAll("img");
    for (const image of images) {
        image.hidden=tonen;
    }

}
