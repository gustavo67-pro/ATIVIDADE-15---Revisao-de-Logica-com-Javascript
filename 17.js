let produtos = [1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427];

for(let i=0;i<8;i++){
  console.log("produto ["+i+"] codigo "+produtos[i]);
}
let objetivo = prompt("qual codigo deseja remover dos sistema? ");
console.log("sucesso: ")
for(let i=0;i<8;i++){
    if((objetivo == i)){
  produtos[i] = 0;
}
else if((objetivo > 7) || (objetivo < 0)){
    alert("valor nao encontrado")
    break
  }
 
  console.log("produto ["+i+"] codigo "+produtos[i]);
}

//Carregue um vetor com 8 números de códigos de produtos. Pergunte ao usuário qual código ele deseja
//remover do sistema. Faça uma busca pelo vetor: se encontrar o código, substitua o seu valor por 0 e
//informe o sucesso. Caso contrário, informe que o produto não existe.
