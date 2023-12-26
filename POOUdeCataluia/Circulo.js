class Circulo extends FormaGeometrica {
    constructor (radio) {
        super();
        this.radio = radio;
    }
    area() {
        return Math.PI * this.radio * this.radio;
    }
}