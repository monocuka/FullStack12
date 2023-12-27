"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// para crear una clase lo que se hace es poner los atributos y sin son privados 
var operaciones = require("./Calculadora");
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
var empleadoImpl = /** @class */ (function () {
    function empleadoImpl(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
        this.getAntiguedad = function () { return 10; };
    }
    empleadoImpl.prototype.pedirAumento = function () {
        console.log("necesito un aumento jefe");
    };
    return empleadoImpl;
}());
var empleado1 = new empleadoImpl('ponky', 1000);
empleado1.pedirAumento();
var persona1 = new Persona('eli', 30);
persona1.saludar();
console.log(operaciones.sumar(3, 6));
console.log(operaciones.restar(29, 8));
console.log(operaciones.multiplicar(4, 6));
console.log(operaciones.dividir(15, 3));
