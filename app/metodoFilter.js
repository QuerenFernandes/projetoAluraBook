const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elelmentoBtn = document.getElementById(this.id);
    const categoria = elelmentoBtn.value;


    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0 ) :livros.filter(livro => livro.categoria == categoria);


    exibirOsLivrosNaTela(livrosFiltrados);
}

let  livrosFiltrados  =  categoria  ==  'disponivel' ? livros . filter ( livro  =>  livro . volume  >  0 ) : livros . filtro ( livro  =>  livro . categoria  ==  categoria )
exibirOsLivrosNaTela ( livrosFiltrados )