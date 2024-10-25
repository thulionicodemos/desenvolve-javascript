/*2 - Crie um feed para uma rede social similar ao Twitter. Seu feed deve conter:
	2.1 - Um formulário com uma textarea para suas postagens e um botão Postar. O formulário deve ficar fixo no topo da página.
	
	2.2 - Uma lista com as postagens já feitas, organizadas da mais recente para a mais antiga. Cada postagem deve conter:
		- seu nome de usuário;
		- seu avatar;
		- o texto da postagem;
		- uma imagem aleatória de gatinhos fofos, que você deve pegar fazendo uma requisição para a API (https://api.thecatapi.com/v1/images/search);
		- o botão de curtir;

	Obs.: Seu feed terá a estrutura de um array de objetos. Cada objeto deverá conter: data, nome de usuário, avatar, o texto que você postou, a imagem trazida da API e o número de likes, como apresentado na imagem a seguir. 
	A contagem de likes de um determinado post deve ser incrementada (alterada em tela) cada vez que o respectivo botão curtir for pressionado.*/

let postagens = [];

const formPostagem = document.getElementById('form-postagem');
const textoPostagem = document.getElementById('texto-postagem');
const listaPostagens = document.getElementById('lista-postagens');

// Função para obter imagem aleatória de gatinho
async function obterImagemGatinho() {
	const resposta = await fetch('https://api.thecatapi.com/v1/images/search');
	const dados = await resposta.json();
	return dados[0].url;
}

// Função para renderizar a lista de postagens
function renderizarPostagens() {
	listaPostagens.innerHTML = ''; // Limpa lista antes de renderizar
	postagens.forEach((post, index) => {
		const postagemElemento = document.createElement('div');
		postagemElemento.classList.add('postagem');
		postagemElemento.innerHTML = `
      <img src="${post.avatar}" class="avatar">
      <div class="toda-postagem">
        <div class="cabecalho-postagem">
          <strong>${post.nomeUsuario}</strong>
        </div>
        <p class="texto-postagem">${post.texto}</p>
        <img src="${post.imagemGatinho}" class="gatinho">
        <div class="botao-curtir" onclick="curtirPostagem(${index})">
          <img src="./botao_like.png" id="botao-like"> <span>${post.likes}</span>
        </div>
      </div>
    `;
		listaPostagens.appendChild(postagemElemento);
	});
}

// Função para curtir uma postagem
function curtirPostagem(indice) {
	postagens[indice].likes += 1; // Incrementa o número de likes
	renderizarPostagens(); // Atualiza a lista
}

// Adiciona um evento de envio ao formulário
formPostagem.addEventListener('submit', async (evento) => {
	evento.preventDefault(); // Previne recarregamento

	const texto = textoPostagem.value;
	if (!texto.trim()) return; // Verifica se o texto não está vazio

	const novaPostagem = {
		nomeUsuario: 'thulionicodemos',
		avatar: './avatar.jpg',
		texto: texto,
		imagemGatinho: await obterImagemGatinho(),
		likes: 0,
	};

	// Adiciona a nova postagem no início do array e renderiza
	postagens.unshift(novaPostagem);
	renderizarPostagens();

	// Limpa o campo de texto após postar
	textoPostagem.value = '';
});
