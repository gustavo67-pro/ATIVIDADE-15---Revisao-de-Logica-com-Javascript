let matriz = [[],[],[]]
for (let l=0;l<3;l++){
    for(let c=0; c<3;c++){
    matriz[l][c] = Number(prompt("Digite o valor da matriz "+l+","+c))
    }
}
let multiplicador = Number(prompt("Agora digite um fator multiplicador para toda a matriz"))
for (let l=0;l<3;l++){
    for(let c=0; c<3;c++){
    matriz[l][c] = matriz[l][c]*multiplicador
    }
}
console.log("Exibindo a matriz")
for (let l=0;l<3;l++){
    console.log(" | "+matriz[l][0]+" | "+matriz[l][1]+" | "+matriz[l][2]+" | ")
}
