// para crear una clase lo que se hace es poner los atributos y sin son privados 
class Persona {
    constructor(public nombre: string, public edad: number){
    }

    numeroDeLaSuerte = (): number => Math.floor(Math.random() * 100);

    saludar() {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años y mi numero de la suerte es ${this.numeroDeLaSuerte()}`);
    }
}

const persona1 = new Persona('eli', 30);
persona1.saludar();