/*Exercício - Datas e temporizadores

Neste exercício, você criará um temporizador de contagem regressiva 
que aceita uma data futura e conta o tempo restante até essa data. 
O temporizador exibirá os dias, horas, minutos e segundos restantes 
e será atualizado a cada segundo.

Passos:
    1 - Defina uma função para calcular o tempo restante até uma data futura:
calcularTempoRestante(dataFutura)

    2 - Defina uma função para atualizar o temporizador na tela:
atualizarTemporizador()

    3 -  Use setInterval para atualizar o temporizador a cada segundo.

    4 - Manipule o objeto Date para calcular a diferença entre a data atual e a data futura.*/

const dataFutura = new Date('2024-12-25T00:00:01');
const objetivo = 'Natal'

function calcularTempoRestante(dataFutura) {
    const dataAtual = new Date();
    const difData = dataFutura - dataAtual;

    if (difData < 0) {
        return null
    }

    // Como a diferença entre as data é dada em milisegundos, é necessário converter cada um dos elemento desejados

    const dias = Math.floor(difData / (1000 * 60 * 60 * 24)); //extraindo e convertendo os dias restantes
    const horas = Math.floor((difData % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //extraindo e convertendo as horas
    const minutos = Math.floor((difData % (1000 * 60 * 60)) / (1000 * 60)); //extraindo e convertendo os minutos
    const segundos = Math.floor((difData % (1000 * 60)) / 1000); //extraindo e convertendo os segundos


    return {dias, horas, minutos, segundos};
}

function atualizarTemporizador() {
    const tempoRestante = calcularTempoRestante(dataFutura);

    if (tempoRestante) {
        console.log(`Faltam ${tempoRestante.dias} dias, ${tempoRestante.horas} horas,
            ${tempoRestante.minutos} minutos, ${tempoRestante.segundos} segundos até o ${objetivo}!`);
    }

    else {
        console.log(`O ${objetivo} já passou!`)
    }
}

//Atualizando o temporizador
setInterval(atualizarTemporizador, 1000);
