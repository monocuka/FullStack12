class Rectangulo extends FormaGeometrica {
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }
    area(){
        return this.ancho * this.alto;
    } 
}