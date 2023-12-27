// para crear una clase lo que se hace es poner los atributos y sin son privados 
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.numeroDeLaSuerte = function () { return Math.floor(Math.random() * 100); };
    }
    Persona.prototype.saludar = function () {
        console.log("Hola soy ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os y mi numero de la suerte es ").concat(this.numeroDeLaSuerte()));
    };
    return Persona;
}());
var persona1 = new Persona('eli', 30);
persona1.saludar();
