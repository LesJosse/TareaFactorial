let numero = 10;
let factorial = 0;
let i = 9;

while(i >= 1){
    console.log(i);
    factorial = numero * i;
    numero = factorial;
    console.log(numero);
    i --;
}

console.log(`El factorial de 10 con bucle while es ${factorial}`);
