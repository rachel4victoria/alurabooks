function calcularValorTotalDisponiveis (livro){
    return livros.reduce((acc, livro) => acc + livro.preco, 0 )

}