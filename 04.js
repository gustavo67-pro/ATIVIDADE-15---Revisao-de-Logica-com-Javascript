let lado = []
lado[0] = Number(prompt("Digite o valor do primeiro lado do triângulo"))
lado[1] = Number(prompt("Digite o valor do psegundo lado do triângulo"))
lado[2] = Number(prompt("Digite o valor do terceiro lado do triângulo"))
if ((lado[0]==lado[1] && lado[0]!=lado[2]) || (lado[0]==lado[2] && lado[0]!=lado[1]) || (lado[1]==lado[2] && lado[1]!=lado[0])){
 console.log("O triângulo é um triângulo Isósceles")
}
else if (lado[0]==lado[1] && lado[0]==lado[2]){
 console.log("O triângulo é um triângulo Equilátero")
}
else{
 console.log("O triângulo é um triângulo Escaleno")
}
