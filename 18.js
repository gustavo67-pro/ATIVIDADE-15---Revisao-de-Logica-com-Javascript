let vetorA = []
let vetorB = []
let vetorC = []
for(let i=0;i<5;i++){
vetorA[i] = prompt("Digite o valor "+i+" do vetor A.")
}for(i=0;i<5;i++){
vetorB[i] = prompt("Digite o valor "+i+" do vetor B.")
}
for(i=0;i<5;i++){
vetorC[i * 2] = vetorA[i]
vetorC[(i * 2) + 1] = vetorB[i]
}
for(let i=0;i<10;i++){
console.log(vetorC[i])
}
