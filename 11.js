let resultado = 0
let inicio = Number(prompt("inisra o inicio do filtro: "))
let fim = Number(prompt("inisra o fim do filtro: "))
for(let i=inicio;i<=fim;i++){
  if((i % 3 == 0) || (i % 5 == 0)){
    resultado = resultado + i
  }
}
console.log(resultado)
