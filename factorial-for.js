let numero = 10;
let factorial = 0;
for (let i = 9; i >= 1; i--) {
  console.log(i);
  factorial = numero * i;
  numero = factorial;
  console.log(factorial);
}
console.log(`El factorial de 10 con bucle for es ${factorial}`);
