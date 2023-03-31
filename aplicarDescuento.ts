
import * as rls from "readline-sync"

let precioFinal: number = 0;
let precioProductoUno: number = 200;
let precioProductoDos: number = 350;
let subtotal: number = 0;

let cantidadProductoUno: number = rls.questionInt("Cantidad de producto 1 que compro el usuario: ");
let cantidadProductoDos: number = rls.questionInt("Cantidad de producto 2 que compro el usuario: ");

subtotal = (cantidadProductoUno * precioProductoUno) + (cantidadProductoDos * precioProductoDos);
//console.log(cantidadProductoUno);
//console.log(cantidadProductoDos);
//console.log(subtotal);

console.log("el usuario compro", cantidadProductoUno, "cantidad de producto 1.", "el usuario compro", cantidadProductoDos, "cantidad de producto 2.", "el subtotal es de: ", subtotal);
