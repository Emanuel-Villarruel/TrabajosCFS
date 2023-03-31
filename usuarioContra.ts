import * as rls from "readline-sync";

// Validar el usuario y la contraseña

let username : string = ""; rls.question("Ingrese usuario: ");
let password : string = ""; rls.question("Ingrese password: ");

if (username == "emanuel" && password == "web") {
    console.log("Inicio de sesión exitoso.");
} else 
    console.log("Usuario o contraseña incorrectos.");

        
