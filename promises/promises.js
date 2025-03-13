// const esperarSegundos = (segundos) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve(segundos), segundos)

        
//     })
// }

// esperarSegundos(2).then((segundos) => console.log(`Passaram-se ${segundos} segundos.`))


// const verificarNumero = (num) => {
//     return new Promise((resolve, reject) => {
//         if(typeof num != 'number') {
//             return reject('Não é um número');
//         }

//         if(num > 10) {
//             return resolve('Número válido');
//         }

//         reject('Número muito baixo');
//     })
// }

// const numero = 11

// verificarNumero(numero)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));


// const dobraNumero = (num) => {
//     return new Promise((resolve, reject) => {
//         if(typeof num !== 'number' || num < 0) {
//             return reject('Insira um número válido');
//         }

//         resolve(num * 2);
//     })
// }


// dobraNumero(2)
//     .then(dobraNumero)
//     .then(dobraNumero)
//     .then(console.log)
//     .catch(console.error)
    

// const buscarUser = async () => {
//     return new Promise((resolve) => {
//         const users = {id: 1, nome: 'Alice'};
//         setTimeout(resolve(users), 1 * 1000);
//     }) 
// }


// const buscarPedidos = async () => {
//     return new Promise((resolve) => {
//         const pedidos = ["Pedido 1", "Pedido 2"];
//         setTimeout(resolve(pedidos), 2 * 1000);
//     })
// }

// const buscarPagamentos = async () => {
//     return new Promise((resolve) => {
//         const pagamentos = [{id: 1, status: "Pago"}];
//         setTimeout(resolve(pagamentos), 3 * 1000)
//     })
// }


// const teste = async () => {
//     const result = await Promise.all([buscarUser(), buscarPedidos(), buscarPagamentos()]);
//     console.log(result)
// }


// teste()



// var p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p1_resolução_atrasada"), 1000);
//   });
  
//   var p2 = new Promise((resolve, reject) => {
//     reject(new Error("p2_rejeição_imediata"));
//   });
  
//   Promise.all([
//     p1.catch((erro) => {
//       return erro;
//     }),
//     p2.catch((erro) => {
//       return erro;
//     }),
//   ]).then((valores) => {
//     console.log(valores[0]); // "p1_resolução_atrasada"
//     console.log(valores[1]); // "Erro: p2_rejeição_imediata"
//   });
  

/*
    O PROMISE.ALL NOS PERMITE PASSARMOS UMA MATRIZ DE PROMISES QUE SERÃO RESOLVIDAS JUNTAS, E RETORNADA
    OUTRA MATRIZ COM OS RESULTADOS.

    CASO ALGUMA DAS PROMISES PASSADAS SEJAM REJEITADAS O MÉTODO RETORNAR IMEDIATAMENTE A PROMISE REJEITADA.

    MAS COMO NO EXEMPLO ABAIXO PODEMOS TRATAR ISSO.



*/ 


//PROMISE.ALL
// const p1 = new Promise((resolve) => {
//     setTimeout(resolve('Resolução atrasada'), 1000);
// })

// const p2 = new Promise((_, reject) => {
//     return reject('Rejeitada imediatamente');
// })


// Promise.all([
//     p1.catch(error => {
//         return error
//     }),
//     p2.catch(error => {
//         return error
//     })
// ])
// .then((valores) => {
//     console.log(valores[0]);
//     console.log(valores[1]);
// })


//PROMISE.ALLSETTLED

// var ArrayPromises = [Promise.resolve(33), Promise.reject(20)];


// const valores = Promise.allSettled(ArrayPromises).then(result => result)

