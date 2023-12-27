class Empleado extends Persona {
    #sueldo;
    constructor(nombre, edad, sueldo){
        super(nombre, edad);
        this.#sueldo = sueldo;
    }
    Saludar() {
        console.log("");
    }
}