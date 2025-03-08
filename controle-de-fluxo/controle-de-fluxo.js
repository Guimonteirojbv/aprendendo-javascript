// No javascript temos os controles de fluxos que nos dão a habilidade de adicionar interações poderosas em nossos sistemas.
// Eles nos permitem definir a decisão que o sistema deve tomar a partir de uma condição.

// No javascript temos dois controles de fluxo, o if e o switch.
// eles avaliam uma expressão booleana e executam o bloco de declaração correspondente ao resultado true ou false.


// if 

 var idade = 18;

 if(idade > 18) {
    console.log('Pode ter CNH');
 } else {
    console.log('Não pode ter CNH');
 }

// O if vai avaliar se a expressão passada dentro dos parenteses é verdadeira, caso seja ele vai executar
// o primeiro bloco de declarações, caso seja falsa ele executa o bloco else de declarações que é opcional.
// caso desejamos verificar varias expressões podemos também adicionar o else if para uma nova verificação.


var peso = 78

if(peso < 78 ) {
    console.log('Magro')
} else if (peso == 78) {
    console.log('Peso ideal')
} else if (peso > 78) {
    console.log('Acima do peso ideal')
} else {
    console.log('Peso de risco')
}

//Note que fizemos diversas verificações de expressão, o bloco de declaração de expressões que forem consideradas
//verdadeira será executado, caso nenhuma expressão seja verdadeira o bloco de código else será executado.


//Switch


//No switch ele receberá um valo na expressão e procurará um rótulo denominado 'case' que seja igual a expressão recebida.
// e então ele entregará o controle ao 'case' específico e executará o bloco de declaração.

var carro = 'Polo';

switch(carro) {
    case 'Palio': 
        console.log('Carro da marca FIAT');
        break
    case 'C4': 
        console.log('Carro da marca Citroen');
        break
    case 'Corola':
        console.log('Carro da marca toyota');
        break
    case 'Polo':
        console.log('Carro da marca volkswagen');
        break
    default: 
        console.log('Carro desconhecido');
        break
}

//note que ao final de todas as declarações temos uma palavra reservada 'break' que indica ao switch
//o fim da execução do block, caso seja omitido o 'break' ao fim da execução do bloco de execução ele passará 
//para o próximo case do switch e executará.

//temos também uma cláusula default onde casó nenhum dos rótulos seja correspondente a expressão passada ao switch.
//o default será executado.