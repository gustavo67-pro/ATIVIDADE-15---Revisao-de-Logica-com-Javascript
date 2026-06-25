const linhasA = 2;
const colunasA = 3;
let matrizA = [];
let matrizB = [];

for (let i = 0; i < linhasA; i++) {
    matrizA[i] = []; 
    for (let j = 0; j < colunasA; j++) {
        let entrada = prompt("Digite o valor para a posição A["+i+"]"+j+"]");
        matrizA[i][j] = Number(entrada);
    }
}
for (let i = 0; i < colunasA; i++) {
    matrizB[i] = [];
    for (let j = 0; j < linhasA; j++) {
        
        matrizB[i][j] = matrizA[j][i];
    }
}
console.log("=== Matriz A Original (2x3) ===");
console.log(matrizA);

console.log("=== Matriz B Transposta (3x2) ===");
console.log(matrizB);
