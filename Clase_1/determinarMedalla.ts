/*
Desarrolle un algoritmo que, dada una posición en una carrera se determine el tipo de medalla a entregar.
Tenga en cuenta que para el primer puesto se entrega medalla de oro, segundo puesto medalla de plata y tercer 
puesto medalla de bronce. En caso que quede en otra posición se entrega certificado de participación */

import * as rls from "readline-sync"

const position: number = rls.questionInt("ingrese la posicion de llegada");
let message: string = "";
if(position = 0) {
    message = "Debe ser un entero positivo";
}
if(position === 1) {
    message = "Medalla de oro";
} else if(position === 2) {
    message = "Medalla de plata";
} else if(position === 3) {
    message = "Medalla de bronce";
} else {
    message = "Certificado de participacion";
}

console.log(message);