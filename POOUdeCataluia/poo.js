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
    
    //encapsulamiento
//getters y setters permite acceder a los atributos privados.

    getNombre () {
        return this.#nombre;
    };

    setNombre (nuevoNombre) {
        this.#nombre = nuevoNombre;
    }
    getEdad () {
        return this.#edad;
    };
    setEdad (nuevaEdad) {
        this.#edad = nuevaEdad;
    }
}
//abstraccion es momdelar algo de la vida real en una clase: siempre pensando que la clase tiene atributos y tiene metodos
//atributos: caracteristicas de lo que se esta modelando
//metodos: funciones o verbos de las cosas que se pueden hacer. 

