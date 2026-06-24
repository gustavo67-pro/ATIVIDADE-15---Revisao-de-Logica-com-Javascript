let senha = false
for(let i=0;i<3;i++){
    
      let senhanova = prompt("insira a senha da conta: ")
        if(senhanova == "segredo123"){
            senha = true
            break
    }
}
if(senha === true){
    console.log('Acesso Permitido')
}
else{
    console.log('conta bloqueada')
}

//senha = 'segredo123'
