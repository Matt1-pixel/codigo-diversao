let armz = [];
let id = 0;

function testObjt() {
    function makeId() {
        let novoObj = new Object();

        let nome = prompt('nome');
        let idade = prompt('idade');
        let cidade = prompt('cidade');

        novoObj.nomeObj = nome;
        novoObj.idadeObj = idade;
        novoObj.cidadeObj = cidade;

        id++;
        novoObj.id = id;

        armz.push(novoObj);
        verif();
    }

    function verif() {
        let resposta = window.confirm('Gostaria de salvar mais dados de outra pessoa?');
        if (resposta) {
            testObjt();
        } else {
            console.log(armz);
            alert('Ok, bye :)');
        }
    }

    makeId();
}

testObjt();
