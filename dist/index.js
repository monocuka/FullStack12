"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// para crear una clase lo que se hace es poner los atributos y sin son privados 
const operaciones = __importStar(require("./Calculadora"));
//los enum
var DiadeLaSemana;
(function (DiadeLaSemana) {
    DiadeLaSemana[DiadeLaSemana["Lunes"] = 0] = "Lunes";
    DiadeLaSemana[DiadeLaSemana["Martes"] = 1] = "Martes";
    DiadeLaSemana[DiadeLaSemana["Miercoles"] = 2] = "Miercoles";
    DiadeLaSemana[DiadeLaSemana["Jueves"] = 3] = "Jueves";
    DiadeLaSemana[DiadeLaSemana["Viernes"] = 4] = "Viernes";
    DiadeLaSemana[DiadeLaSemana["Sabado"] = 5] = "Sabado";
    DiadeLaSemana[DiadeLaSemana["Domingo"] = 6] = "Domingo";
})(DiadeLaSemana || (DiadeLaSemana = {}));
console.log(DiadeLaSemana[2]);
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.numeroDeLaSuerte = () => Math.floor(Math.random() * 100);
    }
    saludar() {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años y mi numero de la suerte es ${this.numeroDeLaSuerte()}`);
    }
}
class empleadoImpl {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
        this.getAntiguedad = () => 10;
    }
    pedirAumento() {
        console.log("necesito un aumento jefe");
    }
}
const empleado1 = new empleadoImpl('ponky', 1000);
empleado1.pedirAumento();
const persona1 = new Persona('eli', 30);
persona1.saludar();
console.log(operaciones.sumar(3, 6));
console.log(operaciones.restar(29, 8));
console.log(operaciones.multiplicar(4, 6));
console.log(operaciones.dividir(15, 3));
