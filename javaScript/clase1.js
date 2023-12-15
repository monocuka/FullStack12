//Formas d ecrear una variable
nombre = "eli";

var nombrecito = "eli"// variable global se puede usar desde cualquier parte.

let nombre1 = "eli";

const nombre2 = "eli"//Constante no se puede reasignar. 

//Tipos de datos primitivos

//String guarda alfa numerico

let nombre3 ="eliana osorio"
let dreccion = "calle 33 numero 12b-32"
let correo = "correo@gmail.com"
// numbers / numero 

let edad = 30;
let peso = 64.30;
let telefono = 12345567;

//Boolean

let esMayorDeEdad = true;
let esMenorDeEdad = false;

//undefined
let reporteDataCredito = undefined;
let reporteSisben;
//null
let puntajeDatacredito = null;

//tipos de datos no primitivos 
//array, arreglos, vecgtores, matrices
let nombres = ["elii","shanti","honey","pimimi"];
let edades = [30, 33, 5,2];

//objetos
let persona = {
    nombre: "eli",
    edad: 20,
    sexo: "F",
    esMayorDeEdad: true,
    puntajeDatacredito: null,
    reporteSisben: undefined,
    coloresFavoritos: ["verde","negro","vino"],
    fechaNacimiento: {
        dia: 23,
        mes: 3,
        anioo: 1993
    },
    fechaExpedicion:"2011-03-08",
    fechaVencimiento: new Date("2090-03-08"),
    semanasCotizadas: 100,
    tienePasaporte: true,
    tieneCedula: false
}
// vamos a ver si puedo entrar al bar.

let mayorDeEdad = 18;

let edadPersona = persona.edad;

if (edadPersona >= mayorDeEdad){
    console.log("puede entrar al bar");
}else{
    console.log("No puede entrar");
}

//condiciones varias,


//do while garantiza que se cumpla al menos 1 ves la condicion en el bloque.

/* do{
    console.log("bienvenid@s a Mario karts");
    console.log("1. jugador");
    console.log("2. configuracion");
    console.log("3. Multi juadores");
    console.log("4. salir");

    let opcion = prompt("selecciona una opcion");
}while(opcion != 4); */

//Funciones 

const condiciones = () => {
    const edadPensionM = 62;
    const edadPensionF = 57;

    if(persona.edad >=edadPensionF && persona.sexo === "F" && persona.semanasCotizadas >= 1300){
        console.log("reclame su pension");
    }else if (persona.edad >= edadPensionM && persona.sexo === "M" && persona.semanasCotizadas >= 1300) {
        console.log("vaya por su pension");
    }else {
        console.log("se quedo sin pension");
    }

    // condicion con el operador or ||

    if(persona.cedula || persona.tienePasaporte) {
        console.log("puede salir del pais");
    }else {
        console.log("no puede salir del pais");
    }
    // switch case
    let dia = "sabado";

    switch(dia){
        case "lunes":
            console.log("Hoy es lunes");
        break;
        case "martes":
            console.log("Hoy es martes");
        break;
        case "miercoles":
            console.log(" Hoy es miercoles");
        break;
        case "jueves":
            console.log(" Hoy es jueves");
        break;
        case "viernes":
            console.log("Hoy es viernes");
        break;
        case "sabado":
            console.log("Hoy es sabado");
        break;
        case "domingo":
            console.log("Hoy es domingo");
        break;
        default:
            console.log("no es un dia de la semana");
    }
    //operador ternario

    persona.sexo == "M" ? console.log("es un hombre") : console.log(" es una mujer");
    // ciclos //  bucles, loops 
    //For
    console.log("un elefante se balanceaba sobre la tela de una araña, como veia que resisitia fue a llamar a otro elefante");
    console.log("do elefante se balanceaban sobre la tela de una araña, como veian que resisitia fue a llamar a otro elefante");
    console.log("tres elefante se balanceaban sobre la tela de una araña, como veian que resisitia fue a llamar a otro elefante");
    console.log("cuatro elefante se balanceaban sobre la tela de una araña, como veia que resisitia fue a llamar a otro elefante");
    console.log("cinco elefante se balanceaban sobre la tela de una araña, como veia que resisitia fue a llamar a otro elefante");
    for (let contador = 5; contador <= 5; contador++){
        console.log(contador + " elefantes se balanceaban sobre la tela de una araña, como veian que resisitia fue a llamar a otro elefante");
    }

    for (let i = 0; i < nombres.length; i++) {
        console.log(nombres[i]);
    }
    console.log(nombres[3]);

    //ciclo while 
    while(persona.edad < 30){
        console.log("para ser treinton le falta " + (30 - persona.edad)+ "  años");
        persona.edad++; // de uno en uno 
    }
}

condiciones();

function saludar(persona, edad){
    console.log("hola, " + persona + " Bienvenid@ a este lugar");
if (persona.edad > 18) {
    console.log("puede jugar");
    }
};

saludar("honeisito", 20)
saludar(persona.nombre, persona.edad)