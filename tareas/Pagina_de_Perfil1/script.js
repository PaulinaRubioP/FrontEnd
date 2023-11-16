console.log("Entramos a la pagina");
function alerta() {
    alert("Hiciste click");
    console.log("hizo click en el Sign Out");
}
function cambiar_texto(elemento){
    //console.log(elemento);
    elemento.innerText = "Otro texto";
}
function cambio_education(elemento_h2){
    elemento_h2.innerHTML = "Cabio de H2 <span>Etiqueta span </span>"
}

function cambia_imagen(elemento_img){
    elemento_img.src = "images/todd-s.jpg";
}

function regresa_imagen(elemento_img){
    elemento_img.src = "images/rosa.jpg";
}

function eliminar(elemento){
    elemento.remove();
}
var clicks_profile = 0;
function aumentar_clicks(){
    clicks_profile++;
    alert(`Haz hecho clic: ${clicks_profile} veces`);
}












