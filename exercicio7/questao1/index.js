/*1 - Crie uma aplicação web que possua um campo de busca e pesquise usuários da API no GitHub (https://api.github.com/) e exiba os dados em uma lista. 
Caso não encontre, exiba "Não foram encontrados usuários para esta pesquisa". A busca na API deve iniciar com o clique no botão.*/

// Pesquisar usuário pelo botão
const botaoPesquisar = document.getElementById('botao-pesquisar');
botaoPesquisar.addEventListener('click', pesquisarUsuario);

// Pesquisar usuário pressionando enter
document.getElementById('pesquisa').addEventListener('keypress', (e) => {
	if (e.key === 'Enter') pesquisarUsuario();
});

// Função para pesquisar um usuário no github
function pesquisarUsuario() {
	// .trim remove espaços em branco das extremidades
	const usuario = document.getElementById('pesquisa').value.trim();
	const listaDeUsuarios = document.getElementById('lista-de-usuarios');
	const usuarioNaoEncontrado = document.getElementById('nao-encontrado');
	listaDeUsuarios.innerHTML = '';
	usuarioNaoEncontrado.style.display = 'none';

	// Verifica se o campo está vazio após remover os espaços
	if (usuario === '') {
		alert('Por favor, insira um usuário válido.');
		return;
	}

	fetch(`https://api.github.com/search/users?q=${usuario}`)
		.then((response) => response.json())
		.then((data) => {
			if (data.items && data.items.length > 0) {
				data.items.forEach((user) => {
					const usuarios = document.createElement('li');
					usuarios.textContent = user.login;
					listaDeUsuarios.appendChild(usuarios);
				});
			} else {
				usuarioNaoEncontrado.style.display = 'block';
			}
		})
		.catch((error) => {
			console.error('Erro ao buscar os usuários:', error);
		});
}
