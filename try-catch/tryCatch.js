//No javascript o Try Catch nos ajuda a capturar e tratar erros inesperados
// Uma declaração e inserida dentro do bloco Try e caso essa declaração em algum momento lance uma excessão.
// O controle é passado para o bloco catch que deverá ter os devidos tratamentos de excessões

function getMonthName(mo) {
    mo = mo - 1; // Ajusta o número do mês para o índice do array (1 = Jan, 12 = Dec)
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    if (months[mo]) {
      return months[mo];
    } else {
      throw "InvalidMonthNo"; //lança uma palavra-chave aqui usada.
    }
  }
  
  try {
    // statements to try
    monthName = getMonthName(myMonth); // função poderia lançar uma exceção
  } catch (e) {
    monthName = "unknown";
    logMyErrors(e); // passa a exceção para o manipulador de erro -> sua função local.
  }
  

  function logMyErrors(e) {
    console.log(e)
  }


  function f() {
    try {
      throw "bogus";
    } catch (e) {
      console.log('captura interior "falso"');
      throw e; // essa instrução throw é suspensa até
      // que o bloco finally seja concluído
    } finally {
      return false; // substitui "throw" anterior
    }
    // "return false" é executado agora
  }
  
  try {
    f();
  } catch (e) {
    // isto nunca é executado porque o throw dentro
    // do catch é substituído
    // pelo return no finally
    console.log('captura exterior "falso"');
  }
  
  // SAIDA
  // captura interior "falso"
  