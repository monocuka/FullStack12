class Persona {
    //Atributos de la clase. 
    #nombre;
    #edad;
    //el constructor es el que permite creat objetos de una clase.
    constructor(nombre, LaEdad){
        //el # antes del atributo es para identificar de que es privado.
        this.#nombre = nombre;
        this.#edad = LaEdad;
    }
    Saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.LaEdad} Años`);
    }
}