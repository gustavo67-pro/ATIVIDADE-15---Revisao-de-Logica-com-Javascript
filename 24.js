let matriz = [[],[],[],[]]
for (let l=0;l<4;l++){
    for(let c=0;c<3;c++){
        if (l == 0){
            if (c==0){
    matriz[l][c] = Number(prompt("Digite a nota da primeira equipe no primeiro trimestre"))
            } else if (c==1){
    matriz[l][c] = Number(prompt("Digite a nota da primeira equipe no segundo trimestre"))
            } else if (c==2){
    matriz[l][c] = Number(prompt("Digite a nota da primeira equipe no terceiro trimestre"))
            }
        }else if (l == 1){
            if (c==0){
    matriz[l][c] = Number(prompt("Digite a nota da segunda equipe no primeiro trimestre"))
            } else if (c==1){
    matriz[l][c] = Number(prompt("Digite a nota da segunda equipe no segundo trimestre"))
            } else if (c==2){
    matriz[l][c] = Number(prompt("Digite a nota da segunda equipe no terceiro trimestre"))
            }
        } else if (l == 2){
            if (c==0){
    matriz[l][c] = Number(prompt("Digite a nota da terceira equipe no primeiro trimestre"))
            } else if (c==1){
    matriz[l][c] = Number(prompt("Digite a nota da terceira equipe no segundo trimestre"))
            } else if (c==2){
    matriz[l][c] = Number(prompt("Digite a nota da terceira equipe no terceiro trimestre"))
            }
        } else if (l == 3){
            if (c==0){
    matriz[l][c] = Number(prompt("Digite a nota da quarta equipe no primeiro trimestre"))
            } else if (c==1){
    matriz[l][c] = Number(prompt("Digite a nota da quarta equipe no segundo trimestre"))
            } else if (c==2){
    matriz[l][c] = Number(prompt("Digite a nota da quarta equipe no terceiro trimestre"))
            }
        }
    }
}
let mediaequipes = []
for (l=0;l<4;l++){
        if (l == 0){
            mediaequipes[l] = Number(matriz[l][0]+matriz[l][1]+matriz[l][2])/3
        } else if (l == 1){
            mediaequipes[l] = Number(matriz[l][0]+matriz[l][1]+matriz[l][2])/3
        } else if (l == 2){
            mediaequipes[l] = Number(matriz[l][0]+matriz[l][1]+matriz[l][2])/3
        } else if (l == 3){
            mediaequipes[l] = Number(matriz[l][0]+matriz[l][1]+matriz[l][2])/3
        }
    }
for (l=0;l<4;l++){
        if (l == 0){
        console.log("equipe 1 = "+mediaequipes[l])
        } else if (l == 1){
        console.log("equipe 2 = "+mediaequipes[l])
        } else if (l == 2){
        console.log("equipe 3 = "+mediaequipes[l])
        } else if (l == 3){
        console.log("equipe 4 = "+mediaequipes[l])
        }
    }
