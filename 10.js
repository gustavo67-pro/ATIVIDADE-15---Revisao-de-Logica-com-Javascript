function calcularMediaPonderada(n1, n2, p1, p2){
let poderada1 = n1*p1
let poderada2 = n2*p2
let media = (poderada1+poderada2)/2
console.log ("A média é: "+media)
}
let n1 = Number(prompt("Digite a primeira nota: "))
let p1 = Number(prompt("Agora digite o peso dela: "))
let n2 = Number(prompt("Digite a segunda nota: "))
let p2 = Number(prompt("Agora digite o peso dela: "))
calcularMediaPonderada(n1, n2, p1, p2);
