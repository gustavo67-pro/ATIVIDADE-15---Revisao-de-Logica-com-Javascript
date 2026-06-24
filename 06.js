let numero = Number(prompt("Digite um número, se o número for par ele triplica, se for ímpar, ele quadruplica."))
if (numero % 2 ==0){
    par = numero*3
    console.log("O número é par e o resultado foi: "+par)
} else {
    impar = numero*4
    console.log("O número é ímpar e o resultado foi: "+impar)
}
