//cria uma array onde sera armazenado os valores
let arr1 = [];
//inicia a variavel chamando um prompt dentro de uma cadeia condicional 
function conc() {
  if (arr1.length < 5) {
    let x = prompt('Insira um número:');
    
    if (x === null) {
      console.log('Operação cancelada, tente novamente.');
        alert('Operação cancelada, tente novamente.')
    } else {
      let e = Number(x);
      //apos verificar se um numero foi inserido, da um .push na array e mostra no console
      if (!isNaN(e)) {
        arr1.push(e);
        console.log(arr1);
      } else {
        console.log('Valor inválido. Insira um número válido.');
      }
    }
    //quando valor for atingido ele finaliza o loop
    if (arr1.length === 5) {
      console.log('Finalizado');
    } else {
      conc();
//senão, chama a função fazendo a recursividade
    }
  }
}

conc();
