"use scrict";

/*document.querySelectorAll("option").forEach( f => {
    f.onclick= function (){        
        this.remove();        
    }
});*/

document.getElementById("burgers").onchange = function(){
    this.remove(this.selectedIndex);
}
