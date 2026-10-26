class Contato {
    constructor() {
        this.nome = "";
        this.telefone = "";
    }

    setNome(nome) {
        this.nome = nome;
    }

    setTelefone(telefone) {
        this.telefone = telefone;
    }

    getDados() {
        return `Nome: ${this.nome} | Telefone: ${this.telefone}`;
    }
}

const contatos = [];

const inputNome = document.getElementById("nome");
const inputTelefone = document.getElementById("telefone");
const btnSalvar = document.getElementById("btnsalvar");
const mensagem = document.getElementById("mensagem");
const listaContatos = document.getElementById("listaContatos");

btnSalvar.addEventListener("click", function () {
    const nome = inputNome.value.trim();
    const telefone = inputTelefone.value.trim();

    if (nome === "" || telefone === "") {
        mensagem.textContent = "Preencha o nome e o telefone.";
        return;
    }

    mensagem.textContent = "";

    const contato = new Contato();
    contato.setNome(nome);
    contato.setTelefone(telefone);

    contatos.push(contato);

    const item = document.createElement("li");
    item.textContent = contato.getDados();
    listaContatos.appendChild(item);

    inputNome.value = "";
    inputTelefone.value = "";
});
