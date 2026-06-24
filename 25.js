let nome = []
let produtos = [[],[],[],[]]
for (let l = 0 ; l<4; l++){
    nome [l] = prompt("Escreva o nome do produto "+l)
}
for (l = 0 ; l<4; l++){
    for (let c = 0; c<2; c++){
     if (c==0){
         produtos[l][c] = Number(prompt("Digite a quantidade de "+nome[l]+" em estoque da filial 1."));
     }else if (c==1){
         produtos[l][c] = Number(prompt("Digite a quantidade de "+nome[l]+" em estoque da filial 2."));
     }
    }
}
for (l = 0 ; l<4; l++){
    console.log(nome[l]+" | "+produtos[l][0]+" | "+produtos[l][1]+" | ")
}
somaprodutos(produtos, l)
function somaprodutos(produtos, l){
let total = []
for (l = 0 ; l<4; l++){
    if (l==0){
        total [1] = produtos[0][0] + produtos[0][1]
        console.log("A quantidade total em estoque do produto "+nome[l]+" é "+total[1]+".")
    }else if (l==1){
        total [2] = produtos[1][0] + produtos[1][1]
        console.log("A quantidade total em estoque do produto "+nome[l]+" é "+total[2]+".")
    }else if (l==2){
        total [3] = produtos[2][0] + produtos[2][1]
        console.log("A quantidade total em estoque do produto "+nome[l]+" é "+total[3]+".")
    }else if (l==3){
        total [4] = produtos[3][0] + produtos[3][1]
        console.log("A quantidade total em estoque do produto "+nome[l]+" é "+total[4]+".")
    }
    }
    
}
