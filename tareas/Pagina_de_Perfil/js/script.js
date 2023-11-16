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

function editar_perfil(){
    var elemento_nombre = document.querySelector("#nombre");
    var input = document.getElementById("input_nombre");//document.querySelector("#input_nombre");
        if(input.value==""){
        elemento_nombre.innerText = "Elena de Troya";
     }else{
        elemento_nombre.innerText = input.value;
        }

    document.querySelector(".locacion").innerHTML = `<img src="icons/map-marker.png" alt="Marcador de Mapa" class="icon"> Troya`;
    
    var elemento_p= document.querySelector(".card-body p");

    elemento_p.innerHTML = "Ingeniera Informática | Reina de Troya";

    elemento_nombre.style.color = "white";
    elemento_nombre.style.backgroundColor = "blue";
    elemento_nombre.style.textShadow = "2px 2px 2px black";

    //classList -> arreglo
    if(elemento_p.classList.contains("parrafo_darkmode")){

    }else{
        elemento_p.classList.remove("parrafo_darkmode");
    }
    elemento_p.classList.add("parrafo_darkmode");
}


