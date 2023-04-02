
const vorigeKeer = sessionStorage.getItem("vorigekeer");
let aantal = 0;
let melding = "U heeft deze pagina nog niet bezocht";
if (vorigeKeer !== null){
    melding = `U heeft deze pagina op ${vorigeKeer} bezocht`;
    aantal = sessionStorage.getItem("aantal");
}
document.getElementById("vorigeKeer").innerText=melding;
document.getElementById("aantal").innerText=aantal++;
sessionStorage.setItem("vorigekeer",new Date().toLocaleDateString("nl-BE"));
sessionStorage.setItem("aantal",aantal);
