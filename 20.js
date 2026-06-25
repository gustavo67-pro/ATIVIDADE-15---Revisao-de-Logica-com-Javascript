let matriz = [[],[],[]]
for (let l=0;l<3;l++){
    for(let c=0; c<3;c++){
    matriz [l][c] = prompt("Digite o valor da matriz "+l+","+c)
    }
}
let maiormatriz = 0
for (l=0;l<3;l++){
    for(c=0; c<3;c++){
      if (matriz[l][c]>maiormatriz){
          maiormatriz = matriz[l][c]
      }
    }
}
for (l=0;l<3;l++){
    for(c=0; c<3;c++){
        if (maiormatriz == matriz[l][c]){
            console.log("O maior valor digitado na matiz foi: "+maiormatriz+", ele está localizado na linha "+l+", e na coluna "+c)
        }
    }
}
