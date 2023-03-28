
function toonDetail(){
    document.getElementById("detail").hidden=false;
    document.getElementById("hoofdstad").innerText = this.dataset.hoofdstad;
    document.getElementById("oppervlakte").innerText = this.dataset.oppervlakte;
}

const hyperlinks = document.querySelectorAll("a");
for (const hyperlink of hyperlinks) {
    hyperlink.onclick=toonDetail;
}