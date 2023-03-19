function calculadora(){
    const operacao = Number(prompt('escolha uma operação:\n 1 - soma (+)\n 2 - subtração(-)\n 3 - multiplicação(*)\n 4 - divisão real(/)\n 5 - divisão inteira(%)\n 6 - potenciação(**)'));
    console.log(operacao);

    if(!operacao || operacao > 7){
        alert(' ERRO - OPERAÇÃO INVALIDA!')
        calculadora();
    }

    let n1 = Number(prompt('Insira o primeiro Valor: '));
    let n2 = Number(prompt('Insira o segundo Valor: '));
    let resultado;

    function novaOperacao(){
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim \n 2 - Não')
    }
    
    if(novaOperacao == 1) {
        calculadora();

    }else if(novaOperacao == 2) {
            alert('até mais! volte sempre')
    }
    
    
    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao();
  
    }

    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperacao();
  
    }

    function Mult(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao();
  
    }

    function diviReal(){
        resultado = n1 / n2;
        alert(`Os numeros são ${n1} e ${n2}, e sua divisão é ${resultado}`)
        novaOperacao();
  
    }

    function diviInte(){
        resultado = n1 % n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao();
  
    }

    function potencia(){
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a: ${resultado}`)
        novaOperacao();
    }
  
   if(operacao == 1){
        soma();
    }else if(operacao == 2){
        subtracao();
    } else if(operacao == 3){
        Mult();
    } else if(operacao == 4){
        diviReal();
    } else if(operacao == 5){
        diviInte();
    } else if(operacao == 6){
        potencia();

    }


    
}

calculadora();