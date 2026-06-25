let numero = []
let par = []
let impar = []
for(let i=0;i<10;i++){
numero[i] = prompt("Digite o numero do vetor "+i+".")
}
for(i=0;i<10;i++){
    if (numero[i] % 2 == 0){
    par[i] = numero[i]
    } else {
    par[i] = "----"
    }
     if (numero[i] % 2 != 0){
    impar[i] = numero[i]
    } else {
    impar[i] = "----"
    }
}
console.log("Exibindo vetor")
for (i=0; i<10; i++){
    console.log(numero[i])
}
console.log("Exibindo vetor impar e par")
for (i=0; i<10; i++){
    console.log(impar[i]+" | "+par[i])
}
