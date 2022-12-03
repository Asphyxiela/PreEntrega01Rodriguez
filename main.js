var nombre = prompt("Ingresa tu nombre");
var usuario = prompt("Como quieres que te llamemos? ");
var contrasena = prompt("Ahora tu contraseña");

alert("Hola, por favor espera mientras te logueamos. " + nombre + ", revisaremos si tus datos coinciden y en caso que lo hagan procederemos a loguearte en tu cuenta");

var password = "administrador";
var user = "admin";
var email = "admin@gmail.com";
var noArroba = true;
var tmpPassword = "";

const arroba = "@";

while (true) {
    if (contrasena == password && usuario == user && contrasena.length > 8) {
        alert(" La contraseña es segura ");
        alert(" Bienvenido a nuestro sitio web " + usuario);
        for (var i = 0; i < email.length; i++) {
            if (arroba == email[i]) {
                console.log("Se encotro un arroba");
                email = prompt("ingrese su email");
            } else {
                if (noArroba) {
                    alert("No se encontro un arroba");
                    noArroba = false;
                }
            }
        }
        for (var i = 0; i < password.length; i++) {
            if (Number(password[i])) {
                alert(" Esta contraseña tiene un número ");
                break;
            }
        }

        if (i == password.length) {
            var change = prompt("Su contraseña debe tener caracteres alfanumericos. Desea cambiarla?");

            if (change.toLowerCase() == "si") {
                tmpPassword = password;
                password = prompt("Ingrese una nueva contraseña");
            }
            if (change.toLowerCase() == "no") {
                alert("Bienvenido nuevamente :)");
                break;
            }
        }

        if (change.toLowerCase() == "si" && tmpPassword != password) {
            alert("Su contraseña se ha cambiado de forma correcta");
            break;
        }
    } else if (contrasena != password && usuario == user) {
        alert("Contraseña Incorrecta");
        contrasena = prompt("Ingresa de forma correcta tu contraseña");
    } else if (contrasena == password && usuario != user) {
        alert("Usuario Incorrecto");
        usuario = prompt("Ingresa de forma correcta tu usuario");
    } else if (contrasena.length < 8) {
        alert("La contraseña es insegura");
        contrasena = prompt("Ingresa de forma correcta tu contraseña");
    } else {
        usuario = prompt("Ingresa de forma correcta tu usuario");
        contrasena = prompt("Ingresa de forma correcta tu contraseña");
        alert("Usuario y/o Contraseña Incorrectos");
    }
}