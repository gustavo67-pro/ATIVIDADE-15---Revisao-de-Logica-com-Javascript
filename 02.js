let preco = Number(prompt("Digite o valor real do produto"))
let porcentagem = Number(prompt("Digite quantos % a mais voce quer para revender esse produto (digite apenas numeros)"))
let revenda = (porcentagem/100)*preco+preco
alert("O valor do produto é: "+preco+"R$")
alert("O valor do produto na revenda com um aumento de "+porcentagem+"% é: "+revenda+"R$")
