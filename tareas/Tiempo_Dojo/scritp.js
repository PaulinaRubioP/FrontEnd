function alerta(elemento){

    var lugar = elemento.innerText;

    alert("Cargando informe meteorologico..." + lugar);
}
function eliminar_cookies(){
    var cookie = document.querySelector(".cookie");
    cookie.remove();
}
function cambiar_temperatura(){
    var elemento_select = document.querySelector("select");
    console.log(elemento_select.value);
    var grados_c = [24, 18, 27, 19, 21, 16, 26, 21];
    var grados_f = [75, 65, 80, 66, 69, 61, 78, 70];

    for(let i=0; i < 8; i++){
        var elemento_temp = document.querySelector('#temp'+i);
        if(elemento_select.value == "F"){
            elemento_temp.innerText = grados_f[i];
        }else{
            elemento_temp.innerText = grados_c[i];
        }
    }
}