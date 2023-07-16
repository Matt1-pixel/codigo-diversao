let arr1 = [];

function conc() {
  if (arr1.length < 5) {
    let x = prompt('Insira um número:');
    
    if (x === null) {
      console.log('Operação cancelada, tente novamente.');
        alert('Operação cancelada, tente novamente.')
    } else {
      let e = Number(x);
      
      if (!isNaN(e)) {
        arr1.push(e);
        console.log(arr1);
      } else {
        console.log('Valor inválido. Insira um número válido.');
      }
    }
    
    if (arr1.length === 5) {
      console.log('Finalizado');
    } else {
      conc();
    }
  }
}

conc();
