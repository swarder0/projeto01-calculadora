//calculadora em js
const prompt = require('prompt-sync')({sigint: true});

function iniciarcalc(){
    let iniciar;
    console.log('Bem vindo a calculadora!!');
    iniciar = prompt('Digite (1) para iniciar ou (0) para sair ');
    if(iniciar === "1"){
        console.log('Iniciando a calculadora');
        operacoes();
    }else if(iniciar === "0"){
        console.log('Encerrando calculadora');
        return;
    }else{
        console.log('Opção invalida, encerrando aplicação.');
        return;
    }
}
function novocalc(){
    let novocalculo
    console.log('Gostaria de fazer um novo calculo?');
    novocalculo = prompt('Digite (1) para realizar um novo calculo ou (0) para sair: ');
    if(novocalculo ==="1"){
        operacoes();
    }else if(novocalculo ==="0"){
        console.log('Calculadora encerrada!')
        return;
    }else{
        console.log('Opção invalidade encerrando calculadora.');
        return;
    }
}
function soma(){
    let num1, num2, result;
    entrada = prompt('Digite os números a serem calculados: ');
        let valores = entrada.split('+');
        num1 =Number(valores[0]);
        num2 = Number(valores[1]);
        if(entrada !== `${num1}+${num2}`){
            console.log('Fórmula incorreta, digite novamente ou escolha uma outra fórmula.');
            retorno = prompt('Digite (1) para dividir novamente, (2) para escolher outra operação ou digite(0) para encerrar a calculadora: ');
            if(retorno ==="1"){
                soma();
            }else if(retorno ==="2"){
                operacoes();
            }else if(retorno ==="0"){
                console.log('Calculadora encerrada.');
                return;
            }else{
                console.log('Opção invalida, encerrando calculadora!');
                return;
            }

        }else{
            result = num1+num2;
            console.log(`${num1} + ${num2} = ${result}`);
            novocalc();
        }
            
}
function subtracao(){
    let num1, num2, result;
    entrada = prompt('Digite os números a serem calculados: ');
        let valores = entrada.split('-');
        num1 =Number(valores[0]);
        num2 = Number(valores[1]);
        if(entrada !== `${num1}-${num2}`){
            console.log('Fórmula incorreta, digite novamente ou escolha uma outra fórmula.');
            retorno = prompt('Digite (1) para dividir novamente, (2) para escolher outra operação ou digite(0) para encerrar a calculadora: ');
            if(retorno ==="1"){
                subtracao();
            }else if(retorno ==="2"){
                operacoes();
            }else if(retorno ==="0"){
                console.log('Calculadora encerrada.');
                return;
            }else{
                console.log('Opção invalida, encerrando calculadora!');
                return;
            }

        }else{
            result = num1-num2;
            console.log(`${num1} - ${num2} = ${result}`);
            novocalc();
        }
            
}
function multiplicao(){
    let num1, num2, result;
    entrada = prompt('Digite os números a serem calculados: ');
        let valores = entrada.split('*');
        num1 =Number(valores[0]);
        num2 = Number(valores[1]);
        if(entrada !== `${num1}*${num2}`){
            console.log('Fórmula incorreta, digite novamente ou escolha uma outra fórmula.');
            retorno = prompt('Digite (1) para dividir novamente, (2) para escolher outra operação ou digite(0) para encerrar a calculadora: ');
            if(retorno ==="1"){
                multiplicao();
            }else if(retorno ==="2"){
                operacoes();
            }else if(retorno ==="0"){
                console.log('Calculadora encerrada.');
                return;
            }else{
                console.log('Opção invalida, encerrando calculadora!');
                return;
            }

        }else{
            result = num1*num2;
            console.log(`${num1} * ${num2} = ${result}`);
            novocalc();
        }
            
}
function divisao(){
    let num1, num2, result;
    entrada = prompt('Digite os números a serem calculados: ');
        let valores = entrada.split('/');
        num1 =Number(valores[0]);
        num2 = Number(valores[1]);
        if(entrada !== `${num1}/${num2}`){
            console.log('Fórmula incorreta, digite novamente ou escolha uma outra fórmula.');
            retorno = prompt('Digite (1) para dividir novamente, (2) para escolher outra operação ou digite(0) para encerrar a calculadora: ');
            if(retorno ==="1"){
                divisao();
            }else if(retorno ==="2"){
                operacoes();
            }else if(retorno ==="0"){
                console.log('Calculadora encerrada.');
                return;
            }
            else{
                console.log('Opção invalida, encerrando calculadora!');
                return;
            }

        }else{
            result = num1/num2;
            console.log(`${num1} / ${num2} = ${result}`);
            novocalc();
        }
            
}
function operacoes(){
    let operacao = prompt('Escolha umas das operações, (+), (-), (*), (/), para realizar a conta: ');
    if(operacao === '+'){
        soma();
    }else if(operacao === '-'){
        subtracao();
    }else if(operacao === "*"){
        multiplicao();
    }else if(operacao ==='/'){
        divisao();
    }else{
        encerrarsemvalor()
    }
}
function encerrarsemvalor(){
    console.log('O valor digitado é invalido, gostaria de sair da calculadora ou fazer uma nova operação?');
        let escolha = prompt('Digite (1) para uma nova operação ou (0) para sair ');
        if(escolha === "1"){
            operacoes();
        }else if(escolha === "0"){
            console.log('Calculadora encerrada, volte sempre!!');
            return;
        }else{
            console.log('Opção invalida, calculadora encerrada.');
            return;
        }

}
iniciarcalc();

