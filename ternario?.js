let a = Number(prompt('numero maior que 5 ou nao '))
console.log(a)
let b = 5 ;
//aqui ha uma redução sintatica 
let x = a<b ? 'variavel A menor que B' : 'variavel A maior que B'
console.log(x);

//forma mais comum de fazer a mesma função, houve melhoria 
if (a < b){
    console.log('variavel A menor que B');
} else {
    console.log("variavel A maior que B")
}
