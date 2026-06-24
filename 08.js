let numero = Number(prompt("Digite um número para saber quantos digitos ele tem."))
let numerocont = numero
let digitos = 0
if (numero == 0){
    digitos = 1
}
while (numerocont > 0){
   numerocont = Math.floor(numerocont/10)
    digitos = digitos + 1
}
console.log("O número ("+numero+") tem "+digitos+" dígitos.")
