function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;

    this.exibirProduto = function () {
        console.log(`Produto: ${this.nome} | Preço: R$ ${this.preco.toFixed(2)}`);
    };
}

const produto1 = new Produto("Notebook", 3500);
const produto2 = new Produto("Mouse", 79.9);
const produto3 = new Produto("Teclado", 150.5);

produto1.exibirProduto();
produto2.exibirProduto();
produto3.exibirProduto();
