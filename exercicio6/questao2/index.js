/*2 - Altere a questão 3 do exercício anterior (Eventos) para que as tarefas (com descrição e status) sejam armazenadas no localStorage e persistam ao recarregar a página.
Ao lado de cada tarefa crie um botão para excluir essa tarefa da lista (e portanto do localStorage).

A questao 3 era:
    3 - Vamos construir uma lista de tarefas. Você deve criar um array de objetos Tarefa com as propriedades descrição (string) e status (boolean). Sua página HTML deve conter:

    * Um campo de texto para cadastrar a descrição de uma nova tarefa.

    * Um botão "adicionar" que inclui a nova tarefa no array (inicialize o status).

    * Uma sequência de checkboxes acompanhados das descrições das tarefas já adicionadas. O checkbox será usado para alterar o status da respectiva tarefa. 

    O usuário pode adicionar novas tarefas preenchendo o campo de texto e clicando em adicionar. Também deve poder clicar no checkbox de cada tarefa para alterar o seu status entre Concluído e Não concluído. 

    * Você deve estilizar as descrições das tarefas adicionadas para diferenciar as concluídas das não concluídas (use a criatividade no CSS).*/

let tarefas = [];

// Recupera as tarefas salvas do localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const tarefasSalvas = localStorage.getItem('tarefas');
    
    if (tarefasSalvas) {
        tarefas = JSON.parse(tarefasSalvas);
        atualizarTarefas();
    }
});

const descricaoDaTarefa = document.getElementById('tarefa');
const botao = document.getElementById('botao-adicionar-tarefa');
const listaDeTarefas = document.getElementById('lista-de-tarefas');

// Função adicionar tarefa ao array
function adicionarTarefa() {
    const descricao = descricaoDaTarefa.value.trim();

    if (descricao) {
        // Cria o objeto para nova tarefa
        const novaTarefa = {
            descricao: descricao,
            status: false
        };

        // Adiciona ao array de tarefas
        tarefas.push(novaTarefa);

        // Atualiza a lista de tarefas no HTML
        atualizarTarefas();

        // Limpa o campo de texto
        descricaoDaTarefa.value = '';

        // Salva as tarefas no localStorage
        salvarTarefas();
    }
}

// Função atualizar lista de tarefas
function atualizarTarefas() {
    // Limpa a lista antes de atualizar
    listaDeTarefas.innerHTML = '';

    // Itera sobre o array de tarefas
    tarefas.forEach((tarefa, indice) => {
        //Cria os elementos da tarefa
        const li = document.createElement('li');
        li.classList.add('item-da-tarefa')
        if (tarefa.status)
            li.classList.add('concluida');

        // Adiciona o checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.status;
        checkbox.classList.add('checkbox');
        checkbox.addEventListener('change', () => {
            alterarStatus(indice);
        });

        // Adiciona a descrição da tarefa
        const span = document.createElement('span');
        span.textContent = tarefa.descricao;
        span.classList.add('descricao-tarefa');

        // Adiciona o botão de remover tarefa à lista
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'X';
        botaoRemover.classList.add('botao-remover');
        botaoRemover.addEventListener('click', () => {
            removerTarefa(indice);
        });

        // Anexa os elementos aos itens da lista
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(botaoRemover);

        // Adiciona tarefa à lista
        listaDeTarefas.appendChild(li);
    });
}

// Função alterar o status da tarefa
function alterarStatus(indice) {
    // Inverte o status da tarefa
    tarefas[indice].status = !tarefas[indice].status;

    // Atualiza o HTML
    atualizarTarefas();
    
    // Salva as tarefas atualizadas no localStorage
    salvarTarefas();
}

// Função para remover uma tarefa
function removerTarefa(indice) {
    // Remove a tarefa do array
    tarefas.splice(indice, 1);

    // Atualiza a lista de tarefas e o localStorage
    atualizarTarefas();
    salvarTarefas();
}

// Função para salvar as tarefas no localStorage
function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Evento para adicionar tarefa ao clicar no botão
botao.addEventListener('click', adicionarTarefa);

// Evento para adicionar tarefa pressionando "enter"
descricaoDaTarefa.addEventListener('keypress', (e) => {
    if (e.key === 'Enter')
        adicionarTarefa();
});
