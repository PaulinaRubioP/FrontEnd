//Impresión de Numeros impares
for(let i=2; i<=100; i++){
    if(i%2==!0){
        console.log("imprime numero impar "+i);
    }
    }
//Disminuir multiplos de 3
let i = 0;  
for (let i = 101; i>0; i--) {
        if (i % 3 == 0) {
            console.log("Disminuye a "+i);
    }
}
//Imprimir secuencia
let sec=[4,]
let num=4;
for(i=0; i<5; i++){
    num=num-1.5;
    sec.push(num);
}
console.log(sec);

//4, 2.5, 1, -0.5, -2, -3.5


//suma de numeros hasta el 100
let sum =0;
for(let i=1; i<=100; i++){
    sum+=i;
}
console.log("La suma del numero es "+sum);

//multiplicación 12 numeros
let product = 1;
for(let i=1; i<=12; i++){
    product= product *i;
}
console.log("La multiplicación es "+product);