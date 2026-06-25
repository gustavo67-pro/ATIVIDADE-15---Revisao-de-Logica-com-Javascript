let notas = []
let media = 0
for(let i=0;i<8;i++){
   notas[i] = Number(prompt("inisra a nota do aluno " + i))
    media = media + notas[i]
}
media = media / 8
console.log("media da sala: "+ media)
console.log("media dos alunos: ")
for(i=0;i<8;i++){
  if(notas[i] < 7){
    console.log("o aluno "+ i +" nao pegou media com: "+ notas[i])
  }
  else{
    console.log("o aluno "+ i +" pegou media com: "+ notas[i])
  }
}
