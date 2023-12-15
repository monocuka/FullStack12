//EcmaScript6 
//Operador Ternario, template Literals. arrow function

function inicio(){
    const saludar = (nombre) => `holas ${nombre}`; 
    
    
    function calcularNacimiento(edad){
        return 2023 - edad;
    }
    let elNombre= "Papuchis";
    
    let edadPersona = 30;
    
    
    let result = `${saludar(elNombre)} tu año de nacimiento es ${calcularNacimiento(edadPersona)}`;
}
inicio();

// metodos que se puede aplicar a un array function
//IIFE Inmediately invoked function expression -- patron de diseño
(function () {
    console.log("hola mundo");
} )();

//arrays

const baloto = [18, 38, 57,26, 93, 46, 55];
console.log(baloto);

//push para agregar un numero al final del array. 
baloto.push(10);
console.log(baloto);

//agregar un elemento al principio del array 
baloto.unshift(9);
console.log(baloto);

//aliminar el ultimo elemento del array
baloto.pop();
console.log(baloto);

//eliminar el primer elemento 
baloto.shift();
console.log(baloto);

//map funcion iterar en el array si puedo guardar en resultado en una variable. 
const array2 = baloto.map((el) =>  el = el * 2);
console.log(array2);
//foreach hace lo mismo que map pero map retorna algo y foreach no. 
baloto.forEach((el) => {
    console.log(el);
}) 

//metodo filter-- nos permite filtrar 
const filteredNumbers = baloto.filter((el) => el >= 30);
console.log(filteredNumbers);