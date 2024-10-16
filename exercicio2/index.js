/*Crie um sistema simples para gerenciar o estoque de uma livraria. 
O sistema deve permitir adicionar livros ao estoque, remover livros, atualizar 
a quantidade de livros e listar todos os livros disponíveis.

Passos:
1 - Defina um array de objetos para armazenar os livros no estoque.
    Cada livro deve ser representado por um objeto com propriedades titulo, autor e quantidade.

2 - Crie funções para gerenciar o estoque:
    adicionarLivro(titulo, autor, quantidade) - Adiciona um novo livro ao estoque.
    removerLivro(titulo) - Remove um livro do estoque pelo título.
    atualizarQuantidade(titulo, novaQuantidade) - Atualiza a quantidade de um livro no estoque.
    listarLivros() - Lista todos os livros no estoque.

3 - Use condicionais para verificar se um livro já existe antes de adicioná-lo ou removê-lo.

4 - Use laços de repetição para iterar sobre o array de livros quando necessário.*/

const livros = [
    {titulo: 'Dom Casmurro', autor: 'Machado de Assis', quantidade: 2},
    {titulo: 'Grande Sertão: Veredas', autor: 'Guimarães Rosa', quantidade: 5},
    {titulo: 'O Cortiço', autor: 'Aluísio Azevedo', quantidade: 1},
    {titulo: 'Pai Rico, Pai Pobre', autor: 'Robert Kyosaki', quantidade: 3},
];

// Lista todos os livros no estoque
function listarLivros() {
    if (livros.length === 0) {
        console.log("Não há livros no estoque.");
    } else {
        console.log("Livros disponíveis no estoque:");
        for (let i = 0; i < livros.length; i++) {
            const livro = livros[i];
            console.log(`Título: "${livro.titulo}", Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
        }
    }
}

// Adicionando livro ao estoque
function adicionarLivro(titulo, autor, quantidade) {
    if (livros.some(livro => livro.titulo === titulo)) {
        console.log(`O livro "${titulo}" já está no acervo.`);
    } else if (quantidade <= 0) {
        console.log('Quantidade inválida. A quantidade deve ser maior que zero.');
    } else {
        livros.push({titulo, autor, quantidade});
        console.log('Livro adicionado com sucesso!');
    }
}

// Remover livro do acervo
function removerLivro(titulo) {
    const indice = livros.findIndex(livro => livro.titulo === titulo);
    if (indice !== -1) {
        livros.splice(indice, 1);
        console.log('Livro removido com sucesso!')
    }
    else {
        console.log(`O livro "${titulo}" não existe no acervo.`)
    }
}

// Atualizar quantidade de livros
function atualizarQuantidade(titulo, novaQuantidade) {
    const livro = livros.find(livro => livro.titulo === titulo);
    
    if (livro) {
        if (novaQuantidade <= 0) {
            console.log('Quantidade inválida. A quantidade deve ser maior que zero.');
        } else {
            livro.quantidade = novaQuantidade;
            console.log(`Quantidade do livro "${titulo}" atualizada para: ${novaQuantidade}`);
        }
    } else {
        console.log(`O livro "${titulo}" não foi encontrado.`);
    }
}

// Função para executar uma ação e mostrar a lista de livros
const executaEMostraLivros = (acao, mostrarLista) => {
    console.log('Executando ação');
    acao();
    console.log('Executei ação');
    mostrarLista();
    console.log('--------------------------------');
}

//Testes
executaEMostraLivros(() => adicionarLivro('Pai Rico, Pai Pobre', 'Fulano', 2), () => listarLivros());
executaEMostraLivros(() => adicionarLivro('A Rosa do Povo', 'Carlos Drummond de Andrade', 8), () => listarLivros());
executaEMostraLivros(() => removerLivro('Dom Casmurro'), () => listarLivros());
executaEMostraLivros(() => removerLivro('Harry Potter'), () => listarLivros());
executaEMostraLivros(() => atualizarQuantidade('A Rosa do Povo', 20), () => listarLivros());
executaEMostraLivros(() => atualizarQuantidade('Harry Potter', 5), () => listarLivros());

// listarLivros();
// console.log('_____________________');

// adicionarLivro('Pai Rico, Pai Pobre', 'Fulano', 2);
// adicionarLivro('A Rosa do Povo', 'Carlos Drummond de Andrade', 8);
// listarLivros();
// console.log('_____________________');

// removerLivro('Dom Casmurro');
// removerLivro('Harry Potter');
// listarLivros();
// console.log('_____________________');

// atualizarQuantidade('A Rosa do Povo', 20);
// atualizarQuantidade('Harry Potter', 5);
// listarLivros();
