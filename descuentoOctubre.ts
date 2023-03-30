/* •Una tienda al cumplir años en Octubre ofrece un descuento del 15% a sus clientes en todas sus compras
    •Desarrolle un algoritmo que dada una compra: precio unitario, cantidad y el mes, indicados por el usuario, 
    determine si el cliente tiene descuento o no */ 

    import * as rls from "readline-sync";

let precioUnitario: number = rls.questionInt("ingrese Precio: ");
let cantidadProducto: number = rls.questionInt("ingrese Cantidad: ");
let precioTotal = precioUnitario * cantidadProducto;
console.log("el precio total es: ", precioTotal);
let precioDescuento = precioTotal - (precioTotal * 0.15)
let mesCompra: number = rls.questionInt("ingrese Mes actual: ");

if (mesCompra == 10) {
    console.log("el precio con descuento es: ", precioDescuento);
} else console.log("el precio sin descuento es: ", precioTotal);
    
