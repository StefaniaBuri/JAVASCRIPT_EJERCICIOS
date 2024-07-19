const RATIO = 0.016;
const VELOCIDAD = 0.5;
var y = -90;
var x = 300;


setInterval( () => {
    y += VELOCIDAD;
    document.querySelector("#homer").style.top=`${y}px`;

    document.querySelector("#homer").style.left=`${x}px`;

    if(y > window.innerHeight) {
        y = -100; 
        x = Math.random() * window.innerWidth;
    }

}, RATIO);


//BOTON
document.querySelector("#bCerrar").addEventListener("click", () => {
    document.querySelector("footer").style.bottom="-100px";
    document.querySelector("footer").style.opacity=0;
}) 