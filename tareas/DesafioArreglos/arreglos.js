//Escribe una función a la que se le asigne un arreglo, y cada vez que el valor sea "comida" debería mostrar "delicioso"en la consola. Si "comida" no estaba presente en el arreglo, que la consola registre "Tengo hambre" una vez.
var array = [3.14, "comida", "pastel", true, "comida"];
var n_array = [];
function comida_array(){
for(let i=0; i<=array.length; i++){
if(array[i]=="comida"){
    array[i]="delicioso";
    n_array.push("delicioso ");
}
}return n_array;
}
console.log(`resultado 1 de siempre hambriento `+comida_array());
 
var arr = [4, 1, 5, 7, 2];
var n_arr = [];
count= 0;
function hambre_array(){
for(let i=0; i<=arr.length; i++){
    if(array[i]=="comida"){
        count++;
    }
    }if(count==0){
        n_arr.push("tengo hambre");
}return n_arr;
}

console.log(`resultado 2 de siempre hambriento `+hambre_array());
console.log("-------------------------------------------------------------------------------------");
//Dado un arreglo y un valor cutoff, devuelve un nuevo arreglo que contenga solo los valores mayores a cutoff.
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i=0; i<=arr.length; i++){
        if(arr[i]>cutoff){
            
            filteredArr.push(arr[i]);

        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(`nuevo arreglo con cutoff es ` +result); 
console.log("-------------------------------------------------------------------------------------");
/*Dado un arreglo de números, devuelve un recuento de cuántos de los números son mayores que el promedio.*/
function betterThanAverage(numeros){
    var sum = 0;
    var count = 0;
    for(let i = 0; i<numeros.length; i++){
        sum= sum + numeros[i];
    }
    promedio = sum/numeros.length;
    for(let i=0; i<numeros.length; i++){
        if(numeros[i] >promedio){
            count++;
        }
    }return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9])
console.log(`resultado de promedio `+result);

console.log("-------------------------------------------------------------------------------------");
//Arreglo Fibonacci
function fibonacci(num){
    var arr = [0, 1];
    for (let i=2; i<num; i++){
        var nuevo_num = arr[i-2] + arr[i-1];
        arr.push(nuevo_num);

    }
    return arr;
}
console.log(`resultado de fibonacci `+fibonacci(10));

console.log("-------------------------------------------------------------------------------------");
//Arreglo reversa
function reverse(array){
    return array.reverse();
}
array=["a", "b", "c", "d", "e"];
var result= reverse([6, 8, 3, 10, -2, 5, 9]);
console.log(`resultado reverse `+result);
console.log("-------------------------------------------------------------------------------------");
