const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elelmentoBtn = document.getElementById(this.id);
    const categoria = elelmentoBtn.value;
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
}