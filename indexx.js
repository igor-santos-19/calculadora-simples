let num1 = prompt('digite um numero')
num1 = parseFloat(num1)

function somar(){
    let num2 = prompt('Digite outro numero para somar')
    num2 = parseFloat(num2)
    let resultadoSoma = (num1+num2)
    resultado = document.querySelector('#resultado').innerHTML = ('A soma de ' + num1 + ' com ' + num2 + ' é '+ resultadoSoma)
}

function diminuir(){
    let num3 = prompt('Digite um numero para diminuir') 
    num3 = parseFloat(num3)
    let resultadoSubtracao = (num1 - num3)
    resultado = document.querySelector('#resultado').innerHTML= ('A subtração de ' + num1 + ' com ' + num3 + ' é '+ resultadoSubtracao)
}

function divisao(){
    let num4 = prompt('Digite um numero para dividir')
    num4 = parseFloat(num4)
    let resultadoDivisao =  num1 / num4
    resultado = document.querySelector('#resultado').innerHTML=('A divisão de ' + num1 + ' com ' + num4 + ' é '+ resultadoDivisao)
}

function multiplicacao(){
    let num5 = prompt('Digite um numero para multiplicar')
    num5 = parseFloat(num5)
    let resultadoMult = num1 * num5
    resultado = document.querySelector('#resultado').innerHTML=('A multiplicação de ' + num1 + ' com ' + num5 + ' é '+resultadoMult)
}







