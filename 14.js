let numero = []
for(let i=0;i<10;i++){
numero[i] = prompt("Digite o numero do vetor "+i+".")
}
console.log("Exibindo o vetor invertido.")
for (i=9; i>-1; i--){
    console.log(numero[i])
}
