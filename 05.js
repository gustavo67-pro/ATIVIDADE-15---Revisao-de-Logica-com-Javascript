let saldoatual = Number(prompt("inisira o saldo atual da sua conta: "))
let saque = Number(prompt("qunato deseja sacar? "))
if(saque > saldoatual){
    console.log("ERRO saque maior que saldo!!!")
}
else{
    console.log("saldo realizado com sucesso!")
}
