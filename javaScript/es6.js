//EcmaScript6 
//Operador Ternario, template Literals. arrow function

function inicio(){
    function saludar(nombre){
        return "hola " + nombre;
    }
    const saludar = (nombre) => `holas ${nombre}`; 
    
    
    function calcularNacimiento(edad){
        return 2023 - edad;
    }
    let elNombre= prompt("ingresa tu nombre");
    
    let edadPersona = prompt("Ingresa tu edad");
    
    
    let result = `${saludar(elNombre)} tu año de nacimiento es ${calcularNacimiento(edadPersona)}`;
}
inicio();

