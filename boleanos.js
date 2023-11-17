var number = 5;
console.log(number < 3); // esto imprimirá `false`

var estáSoleado = false;
var estáLloviendo = true;
    
if(estáSoleado) {
    console.log("Ocupa bloqueador");
}
    
if(estáLloviendo) {
    console.log("Lleva paraguas");
}

if(estáSoleado == true) {
    console.log("Además, utiliza un gorro");
}
var today = new Date();
if(today.getDay() == 1) {
    console.log("Odio los lunes");
}
    
if(today.getDay() != 1) {
    console.log("¡Hoy está bien!");
}

var today = new Date();
if(today.getDay() == 1) {
    console.log("!");
} else {
    console.log("¡Hoy está bien!");
}
var today = new Date();
if(today.getDay() == 1) {
    console.log("Odio los lunes");
} else if(today.getDay() == 5) {
    console.log("Viernes? ¡Más bien bien-res!");
} else {
    console.log("¡Hoy está bien!");
}

