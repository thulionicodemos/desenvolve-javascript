/*Construa uma página HTML com um campo de texto, um botão "Curtir" e um parágrafo que exibe a lista de pessoas que clicaram no botão curtir. Toda vez que se preencher um nome no campo de texto e clicar em curtir, seu código Javascript deve armazenar o nome em um array (verifique se o nome já está lá) e alterar o parágrafo final da página de acordo com as regras:

* Lista vazia: "Ninguém curtiu"

* 1 pessoa curtiu: "[Nome da pessoa] curtiu"

* 2 pessoas curtiram: "[Pessoa 1] e [Pessoa 2] curtiram"

* 3 ou mais pessoas curtiram: 
"[Pessoa 1], [Pessoa 2] e mais [tamanho da lista - 2] pessoas curtiram"*/

let listaDeCurtidas = [];

const curtidas = document.getElementById('curtidas');
const botao1 = document.getElementById('botao1');
// Atualizar o parágrafo
function atualizarCurtidas() {
    const pessoas = listaDeCurtidas.length;

    if (pessoas === 0)
        curtidas.innerText = 'Ninguém curtiu';
    else if (pessoas === 1)
        curtidas.innerText = `${listaDeCurtidas[0]} curtiu`;
    else if (pessoas === 2)
        curtidas.innerText = `${listaDeCurtidas[0]} e ${listaDeCurtidas[1]} curtiram`;
    else
        curtidas.innerText = `${listaDeCurtidas[0]} e ${listaDeCurtidas[1]} e mais ${pessoas - 2} curtiram`;
}

// Capturar o nome diditado ao clicar no botão
botao1.addEventListener('click', () => {
    const texto = document.getElementById('texto');
    // Utilizei a propriedade ".trim" para excluir os espaços no inicio e no fim do texto, evitando assim, um nome composto somente por espaços
    const nome = texto.value.trim();

    // Verifica se o campo de texto não está vazio e se o nome não está no array
    if (nome && !listaDeCurtidas.includes(nome)) {
        listaDeCurtidas.push(nome);
        atualizarCurtidas();
    }

    // Limpa o campo de texto
    texto.value = '';
});
