//EcmaScript6 
//Operador Ternario, template Literals. arrow function

function inicio(){

}

function saludar(nombre){
    return "hola " + nombre;
}

function calcularNacimiento(edad){
    return 2023 - edad;
}
let elNombre= prompt("ingresa tu nombre");
let resultadoSaludo = saludar(elNombre);

let edadPersona = prompt("Ingresa tu edad");
let resultadoCalculo = calcularNacimiento(edadPersona);

console.log(resultadoSaludo + " tu año de nacimiento es " + resultadoCalculo);
