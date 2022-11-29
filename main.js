console.log(" Hola mundo ");

const nombre = prompt("Ingresa tu nombre");
const usuario = prompt("Como quieres que te llamemos? ");
const contrasena = prompt("Ahora tu contraseña");


alert ("Hola, por favor espera mientras te logueamos. " + nombre + ", revisaremos si tus datos coinciden y en caso que lo hagan procederemos a loguearte en tu cuenta");

var password = "123456a";
var user = "Asphy";


if (contrasena  == password && usuario == user ) {
    alert (" Bienvenido a nuestro sitio web " + usuario );
} else if ( contrasena != password && usuario == user){
    alert ("Contraseña Incorrecta");
} else if ( contrasena == password && usuario != user){
    alert ("Usuario Incorrecto");
} else {
   alert ("Usuario y/o Contraseña Incorrectos");
}

const arroba = "@"

switch ( arroba ){
    case "@":
        prompt (" Agrega un mail de forma correcta ")
        break;
}







// a: Pidale al usuario que ingrese su nombre, usuario y su contraseña- Valide que el usuario y la contraseña coincidan con los datos de las variables, estos datos tienen que ser iguales entre si. En el caso que no lo sean, devuelva un mensaje en forma de alerta, para cada uno de los casos: "Su usuario es erroneo" o "Su contraseña es erronea". Caso de que se equivoque en los dos "Su usuario y contraseña son erroneos" check

// b: luego de que el usuario se loguee exitosamente, envie una alerta que notifique "Bienvenido ${nombre}". La alerta debe saludar al usuario que loguea. check

// c: Valide con un bucle que el usuario tenga un arroba. En el caso que no la contenga, envie un prompt con el siguiente mensaje: "Ingrese nuevo email". Cambie el valor de la variable contrasena.

// d: Valide si la contraseña del usuario tiene mas de 8 caracteres. En el caso de que la tenga, no haga nada. DE lo contrario, envie un alerta con el siguiente mensaje: "Su contraseña e insegura".

// e: Valide con un bucle que la contraseña al menos tenga un numero. E nel caso de que no tenga uno, envie un prompt que exprese lo siguiente: "Su contraseña debe tener caracteres alfanumericos. Desea cambiarla?" Si el usuario dice si, entonces cambia el valor de la contraseña.