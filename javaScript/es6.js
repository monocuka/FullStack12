//EcmaScript6 
//Operador Ternario, template Literals. arrow function

let mes = "diciembre";
let passPort = "hem139374j"

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
    let mes ="enero"
    let identificacion = 1088003002;
    console.log(`Hola Mundo ${mes} ${identificacion} ${passPort}`);
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

//HOISTING

const hoisting = () => {
    const year = 2023;

    console.log(year);
//forma incorrecta de llamar una funcion, siempre debe ir el llamado despues de la función.

    const testFuntion = () => {
        console.log("soy una prueba");
    };
    testFuntion();
};
//forma correcta 
hoisting();

//callback son funcion que se pasa como parametro dentro de otra finción.

const demoCallBack = () => {
    const saludar = (funcion)=> {
        console.log("hola mundito ");
        funcion();
    }
    const despedir = () => {
        console.log("bye bye  adios ");
    }

    saludar(despedir)

//metodo setTimeOut asincronismo  y etInterval 

    const timer = (fn) =>{
        console.log(`la siguiente funcion se ejecutara en 5 segundos`);
        setTimeout(fn, 5000);
    }
    timer(despedir);

    setTimeout(() => {
        console.log(`han pasado 4 segundos`);
    } , 4000)

    //setInterval(despedir, 2000)
    //parar un set interval

const intervalo = setInterval(() => {
    console.log("universidad");
}, 1000);
setTimeout(() => {
    clearInterval(intervalo);
}, 5000);
}
demoCallBack()
//Asincronismo, promesas

const demoPromesas = () => {
    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("la promesa se resolvio");
        }, 5000);
    })
    promesa
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

    let promesa2 = new Promise((resolve, reject) => {
        let number = Math.floor(Math.random() * 10);
        if (number % 2 === 0) {
            resolve(number);            
        }else{
            reject(number);
        }
    });

    promesa2 
    .then((response) => console.log(`el numero ${response} es par`))
    .catch((error) => console.log(`èl ${error} es impar`));

}
demoPromesas();

const multiPromises = () => {
    const promiseItaliana = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Menu de comida Italiana yumi!!");
        }, 2000);
    })

    const promiseMexicana = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Taquitossss que rico :)");
        }, 3000);
    })

    const promiseOriental = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Deli y saludable wiii!!");
        }, 4000);
    })

    Promise.all([promiseItaliana, promiseMexicana, promiseOriental])
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}
multiPromises()

const demoAsyncAwait = async () => {
    const getMenus = new Promise((resolve, reject) => {
        setTimeout(() => { resolve("---------trae los menu completos de todos ")}, 2000);
    })
    const responseMenus = await getMenus;
    console.log(responseMenus);

    const saveMenus = new Promise((resolve, reject) => {
        setTimeout(() => { resolve("*******Guarda el pedido")}, 6000);
    })
    const responseMenusSave = await saveMenus;
    console.log(responseMenusSave);

    const exportExcel = new Promise((resolve, reject) => {
        setTimeout(() => { resolve("Me exporta el excel de clientes y pedidos en 7 seg")}, 7000);
    })
    const exportClientMenu = await exportExcel;
    console.log(exportClientMenu);
}
demoAsyncAwait()
