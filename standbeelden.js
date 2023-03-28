"use strict";

document.getElementById("isHetWeekend").onclick= function() {
    const dagInWeek = new Date().getDay();
    document.getElementById("weekend").innerHTML = 
        dagInWeek === 6  || dagInWeek === 0 ? "Ja" : "Nee";
};

function toonStandbeeld(){
    //document.getElementById("afbeelding").src = `${this.id}.jpg`;
    const img = document.getElementById("afbeelding");
    img.title = this.dataset.plaats;
    img.src = `${this.dataset.foto}.jpg`;
};

/*document.getElementById("vrijheidsbeeld").onclick=toonStandbeeld;
document.getElementById("moederland").onclick=toonStandbeeld;
document.getElementById("mannekepis").onclick=toonStandbeeld;*/
/*const hyperlinks = document.getElementsByTagName("a");
for (const hyperlink of hyperlinks) {
    hyperlink.onclick = toonStandbeeld;
};*/
/*const standbeeldenUl = document.getElementById("standbeelden");
for (const hyperlink of standbeeldenUl.getElementsByTagName("a")) {
    hyperlink.onclick = toonStandbeeld;
}*/
for (const hyperlink of document.querySelectorAll("#standbeelden a")) {
    hyperlink.onclick = toonStandbeeld;
}