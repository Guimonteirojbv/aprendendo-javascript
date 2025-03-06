//O hoisting do javascript é popularmente conhecido pela ideia de que quando compilado o código ele 'iça'
//todas as funções e variáveis declaradas para o topo do documento, mas na verdade não é isso o que acontece.
//o que de fato acontece é que as variáveis e funções declaradas são armazenadas em memória no momento da compilação
//fazendo assim ser possível de acessa-las antes mesmo de sua declaração.

//exemplo 1

console.log(nome); //o resultado aqui será undefined.

var nome = 'Anônimo';

console.log(nome); //o resultado aqui será 'Anônimo'.


//isso é permitido por que o hoisting nesse caso funciona da seguinte maneira.

    var nome = undefined //joga a variável para o topo do documento inicializando ela como undefined.

    nome = 'Anônimo'; // aqui ele atribui o valor para a variável.


//exemplo 2

    mostrarNome('Anônimos'); //irá exibir 'Anônimos' no console do navegador. 

    function mostrarNome(nome) {
        console.log(nome)
    }


