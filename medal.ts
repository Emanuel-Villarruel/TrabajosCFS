import * as rls from "readline-sync"
const position: number = rls.questionInt("Ingrese la posicion de llegada");
let message: string = "";
/*
if (position === 1) {
    message = "Medalla de Oro";
} else if (position === 2) {
    message = "Medalla de Plata";
} else if (position === 3) {
    message = "Medalla de Bronce"
} else {
    message = "Certificado de Participacion";
}

console.log(message);
*/

switch(position){
    case 1: 
        message = "Medalla de Oro";
        break;
    case 2:
        message = "Medalla de Plata";
        break;
    case 3:
        message = "Medalla de Bronce"
        break; 
    default:
        message = "Certificado de Participacion";
}
console.log(message);