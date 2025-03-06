//Quando declaramos uma variável fora de um bloco de função por exemplo chamamos essa variável de global.
//Por que ela pode ser acessada globalmente no documento.

//exemplo

let global = 'Pode ser acessada em qualquer local do documento';

console.log(global);


//mas quando declaramos a mesma variável dentro de um bloco de função isso mudo e ela não poderá mais ser acessada
//fora do escopo dessa função, e ela passa a ser chamada de variavel local.

//exemplo

function exemplo() {
    let local = 'só pode ser acessada dentro da função.'

    console.log(local);
}

exemplo();

console.log(local) //ocorrerá o seguinte erro no console do navegador: Uncaught ReferenceError: local is not defined.


//estes exemplos englobam somente variáveis do tipo let e as constantes, a variável do tipo var não obedece essa lei
//e mesmo sendo declarada dentro de um bloco de função ela pode ser acessada fora do escopo.



//exemplo
if(true) {
    var globalVar = 'acessada em qualquer lugar do documento.'
}


console.log(globalVar)