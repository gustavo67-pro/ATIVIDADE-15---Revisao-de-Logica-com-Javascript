let num = []
let contador = 0

verificaçao(num);

console.log("no vetor existe "+ contador +" numeros positivos maiores que 50!")

function verificaçao(num){
    for(let i = 0; i<7;i++){
  num[i] = Number(prompt("inisra o valor da posiçao "+ i))
  if((num[i] >= 0) && (num[i] > 50)){
   contador = contador + 1
  }
}
 return contador   
}
