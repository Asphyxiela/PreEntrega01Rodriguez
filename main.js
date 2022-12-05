var nombre = prompt("Ingresa tu nombre");
var usuario = prompt("Como quieres que te llamemos? ");
var contrasena = prompt("Ahora tu contraseña");

alert("Hola, por favor espera mientras te logueamos. " + nombre + ", revisaremos si tus datos coinciden y en caso que lo hagan procederemos a loguearte en tu cuenta");

var password = "administrador";
var user = "admin";
var email = "admin@gmail.com";
var noArroba = true;
var tmpPassword = "";
var change = '';
const arroba = "@";
var resetWhile = true;

function validarUsuario(contrasena, usuario) {

    if (contrasena == password && usuario == user && contrasena.length > 8){
        alert(" La contraseña es segura ");
        alert(`Bienvenido ${nombre}`);
        validarEmail(email)
        verificarContrasenaNumero(contrasena)
       
    } else if (validarSeguridad(contrasena)){
        alert("La contraseña es insegura");
        contrasena = prompt("Ingresa de forma correcta tu contraseña");
    } else if (verificaUsuario(usuario, contrasena)) {
        alert("Usuario Incorrecto");
        usuario = prompt("Ingresa de forma correcta tu usuario");
    } else if (verificarContrasena(contrasena)){
        alert("Contraseña Incorrecta");
        contrasena = prompt("Ingresa de forma correcta tu contraseña");
    }else {
        alert(`Lo sentimos ${nombre} pero tus datos no coinciden con los de ninguna cuenta registrada`);
        usuario = prompt("Ingresa de forma correcta tu usuario");
        contrasena = prompt("Ingresa de forma correcta tu contraseña");
        
    }
}

function validarEmail(email) {
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
}

function validarSeguridad(contrasena) {
    if (contrasena.length < 8) {
      return true
    }
    return false
}

function verificaUsuario(usuario, contrasena){
    if (contrasena == password && usuario != user) {
        return false
    }
}
function verificarContrasena(contrasena){
    if (contrasena != password && usuario == user) {
        return false
    }
}

function verificarContrasenaNumero(contrasena) {
    for (var i = 0; i < contrasena.length; i++) {
        if (Number(contrasena[i])) {
            alert(" Esta contraseña tiene un número ");
            break;
        }else{
            
            if (change.toLowerCase() == "si" && tmpPassword != contrasena) {
                alert('Su contraseña ha sido cambiada exitosamente');
                password = contrasena
                resetWhile = false;
                alert("Bienvenido nuevamente :)");
                break
            }else{
                change = prompt("Su contraseña debe tener caracteres alfanumericos. Desea cambiarla? (si/no)");
                if (change.toLowerCase() == "si") {
                    tmpPassword = contrasena;
                    contrasena = prompt("Ingrese una nueva contraseña");
                }
                if (change.toLowerCase() == "no") {
                    alert("Bienvenido nuevamente :)");
                    resetWhile = false;
                    break;
                }
            }    
        }
    }
}


while (resetWhile) {
    validarUsuario(contrasena, usuario);
}