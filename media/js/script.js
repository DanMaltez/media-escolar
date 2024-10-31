const nome = document.querySelector('#nome')
const unidade1 = document.querySelector('#unidade1')
const unidade2 = document.querySelector('#unidade2')
const unidade3 = document.querySelector('#unidade3')
const unidade4 = document.querySelector('#unidade4')
const botao = document.querySelector('#botaoresultado')
const resultado = document.querySelector('#resultado')

botao.addEventListener('click', calcular)

function calcular(){
    und1 = Number(unidade1.value)
    und2 = Number(unidade2.value)
    und3 = Number(unidade3.value)
    und4 = Number(unidade4.value)
    n = nome.value

    const calculo = (und1+und2+und3+und4)/4;
    
    let resultado;
    if (calculo>=6){
        resultado="aprovado!"
    } else if(calculo<6){
        resultado="reprovado."
    }
    document.getElementById('resultado').innerText=`Sr(a). ${n},\nA sua média foi ${calculo.toFixed(2)}. Portanto, você foi ${resultado}.`;

}