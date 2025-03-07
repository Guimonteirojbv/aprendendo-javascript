//Objetos literais são objetos que são declarados no documento e podem ter suas propriedades acessadas.
//Não devemos declarar os objetos literais no início do documento pois podem ocorrer erros inesperados.

var vendas = "Toyota";

function tipoCarro(nome) {
  if (nome == "Fiat") {
    return nome;
  } else {
    return "Desculpa, não vendemos carros " + nome + ".";
  }
}

var carro = {
  meuCarro: "Punto",
  getCarro: tipoCarro("Fiat"),
  especial: vendas,
};

console.log(carro.meuCarro); // Punto
console.log(carro.getCarro); // Fiat
console.log(carro.especial); // Toyota
