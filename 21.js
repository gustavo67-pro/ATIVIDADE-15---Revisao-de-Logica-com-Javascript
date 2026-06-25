let resultado = 0
let num = [
  [],
  [],
  [],
  []
]
for(let l=0;l<4;l++){
  for(let c=0;c<4;c++){
    
    num[l][c] = Number(prompt("insira o valor daposiçao: ["+l+"] ["+c+"]"))
    if(l == 1){
       resultado = resultado + num[1][c]

    }
  }
}
console.log("resultado final: "+ resultado)
