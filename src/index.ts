// para crear una clase lo que se hace es poner los atributos y sin son privados 
import * as operaciones from './Calculadora';
import Empleado from './empleado'

class Persona {
    constructor(public nombre: string, public edad: number){
    }

    numeroDeLaSuerte = (): number => Math.floor(Math.random() * 100);

    saludar() {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años y mi numero de la suerte es ${this.numeroDeLaSuerte()}`);
    }
}
class empleadoImpl implements Empleado{
    constructor(public nombre: string, public salario: number,){}
    pedirAumento(): void {
        console.log("necesito un aumento jefe");
        
    }
    getAntiguedad = (): number => 10;
}
const empleado1 = new empleadoImpl('ponky', 1000)
empleado1.pedirAumento();

const persona1 = new Persona('eli', 30);
persona1.saludar();

console.log(operaciones.sumar(3, 6));
console.log(operaciones.restar(29, 8));
console.log(operaciones.multiplicar(4, 6));
console.log(operaciones.dividir(15, 3));