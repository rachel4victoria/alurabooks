const elementoParaInserirLivros = document.getElementById('livros')
const elementoTotalLivros = document.getElementById('valor_total_livros_disponiveis')

function exibirOsLivrosNaTela(listaDeLivros) {
    elementoTotalLivros.innerHTML = ''
    elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
       // let disponibilidade = verificarDisponibilidade(livro)
       let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livros__imagens indisponivel'
        elementoParaInserirLivros.innerHTML += `
                <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}"/>
            <h2 class="livro__titulo"> ${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
            </div>        
        `

    })

}


