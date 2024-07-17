class Player {
    constructor(sprite, x, y, speed) {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.imagen = new Image();
        this.imagen.onload = function () {
            console.log("Imagen cargada");
        };
        this.imagen.src = `images/${sprite}`;
        this.dibujar();
    }
    moverse(desplazamiento) {
        this.x = this.x + desplazamiento * this.speed;
        this.dibujar();
    }
    disparar() {
        console.log("Disparando...");
    }
    explotar() {
        console.log("Explotando...");
    }
    dibujar(){
        let c = document.querySelector("#myCanvas");
        let ctx = c.getContext("2d");
            ctx.drawImage(this.imagen, this.x, this.y, 100, 100);
    }
}