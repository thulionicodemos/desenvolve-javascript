//1.1 - Mudar o texto do título.
const tituloPrincipal = document.getElementById('titulo-principal');
const mudaTextoTitulo = () => {
    setTimeout(() => {
        tituloPrincipal.innerText = 'Mudei o Título';
    }, 3000)
}
mudaTextoTitulo();

//2.1 - Alterar o estilo dos itens da lista.
const lista = document.getElementById('lista');
const alteraEstiloLista = () => {
    setTimeout(() => {
        lista.style.color = 'red';
    }, 3000)
}
alteraEstiloLista();

//3.1 - Adicionar uma classe a todos os parágrafos.
const paragrafos = document.getElementsByTagName('p')

setTimeout(() => {
    for (let paragrafo of paragrafos) {
        paragrafo.classList = 'alterar-paragrafo';
    }
}, 3000)

//4.1 - Alterar o texto do botão.
const botao = document.getElementsByName('botao');
const alteraTextoBotao = () => {
    setTimeout(() => {
        botao[0].innerText = 'Mudei o texto do Botão';
    }, 3000)
}
alteraTextoBotao();
