console.log(" Hola mundo ");

var nombre = prompt("Ingresa tu nombre");
var usuario = prompt("Como quieres que te llamemos? ");
var contrasena = prompt("Ahora tu contraseña");


alert ("Hola, por favor espera mientras te logueamos. " + nombre + ", revisaremos si tus datos coinciden y en caso que lo hagan procederemos a loguearte en tu cuenta");

var password = "123456789a";
var user = "Asphy";
var email = "andres@gmail.com";
var noArroba = true;

const arroba = "@"


while ( true ) {
    if (contrasena  == password && usuario == user ) {
        alert (" Bienvenido a nuestro sitio web " + usuario );
        for (var i = 0; i < email.length; i++){
            if (arroba == email[i]){
               console.log("Se encotro un arroba")
            email = prompt("ingrese su email") 
               break
            }else{
                if ( noArroba ){
                    alert("No se encontro un arroba");
                    noArroba = false;
                }
            }
        }
        break;
    } else if ( contrasena != password && usuario == user){
        alert ("Contraseña Incorrecta");
        contrasena = prompt("Ingresa de forma correcta tu contraseña");
    } else if ( contrasena == password && usuario != user){
        alert ("Usuario Incorrecto");
        usuario = prompt("Ingresa de forma correcta tu usuario");
    }else{
        usuario = prompt("Ingresa de forma correcta tu usuario");
        contrasena = prompt("Ingresa de forma correcta tu contraseña");
        alert ("Usuario y/o Contraseña Incorrectos");
        
    }
}

if (contrasena.length >8 ){
    alert("Su contraseña es mayor a 8 caracteres, su contraseña es segura :)")
}










// a: Pidale al usuario que ingrese su nombre, usuario y su contraseña- Valide que el usuario y la contraseña coincidan con los datos de las variables, estos datos tienen que ser iguales entre si. En el caso que no lo sean, devuelva un mensaje en forma de alerta, para cada uno de los casos: "Su usuario es erroneo" o "Su contraseña es erronea". Caso de que se equivoque en los dos "Su usuario y contraseña son erroneos" check

// b: luego de que el usuario se loguee exitosamente, envie una alerta que notifique "Bienvenido ${nombre}". La alerta debe saludar al usuario que loguea. check

// c: Valide con un bucle que el usuario tenga un arroba. En el caso que no la contenga, envie un prompt con el siguiente mensaje: "Ingrese nuevo email". Cambie el valor de la variable contrasena. check

// d: Valide si la contraseña del usuario tiene mas de 8 caracteres. En el caso de que la tenga, no haga nada. DE lo contrario, envie un alerta con el siguiente mensaje: "Su contraseña es insegura".

// e: Valide con un bucle que la contraseña al menos tenga un numero. En el caso de que no tenga uno, envie un prompt que exprese lo siguiente: "Su contraseña debe tener caracteres alfanumericos. Desea cambiarla?" Si el usuario dice si, entonces cambia el valor de la contraseña.