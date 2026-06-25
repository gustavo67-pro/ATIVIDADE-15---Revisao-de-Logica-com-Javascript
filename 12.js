let peso = Number(prompt("Digite o peso da pessoa"))
let altura = Number(prompt("Digite a altura da pessoa"))
medirfinal(peso, altura)
function medirfinal(peso, altura){
let total = peso/(altura*altura)
if (total<18.5){
    console.log("A pessoa está abaixo do peso.")
} else if (total>18.5 && total<24.9){
    console.log("A pessoa está com o peso normal.")
} else if(total>25 && total<29.9){
    console.log("A pessoa está em sobrepeso.")
} else if (total>=30){
    console.log("A pessoa está com obesidade.")
}
}
