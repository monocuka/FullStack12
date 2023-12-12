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
    edad: 30,
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
