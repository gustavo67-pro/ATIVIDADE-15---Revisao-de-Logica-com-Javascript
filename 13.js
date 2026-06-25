let opçao = 0
while(opçao !==3){
  let opçao = Number(prompt("(1)converter dólar (2)converter euro (3)sair"))
  
  if(opçao == 1){
   let real = Number(prompt("inisra o valor em reais: "))
    resultado = real / 5.20
     alert("resultado: " + resultado)
  }
  else if(opçao == 2){
  let real = Number(prompt("inisra o valor em reais: "))
   let resultado = real / 5.90
    alert("resultado: " + resultado)
  }
  else if(opçao == 3){
    break
  }
}
