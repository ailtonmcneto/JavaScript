
const contato = {
    nome: "",
    telefone: "",

    
    getNome() {
        return this.nome;
    },
    getTelefone() {
        return this.telefone;
    },

    
    setNome(novoNome) {
        this.nome = novoNome;
    },
    setTelefone(novoTelefone) {
        this.telefone = novoTelefone;
    }
};


const inputNome = document.getElementById("nome");
const inputTelefone = document.getElementById("telefone");
const btnSalvar = document.getElementById("btnSalvar");
const btnMostrar = document.getElementById("btnMostrar");
const resultado = document.getElementById("resultado");


function salvarContato() {
    contato.setNome(inputNome.value);
    contato.setTelefone(inputTelefone.value);

    const paragrafo = document.createElement("p");
    paragrafo.textContent = "Contato salvo";
    resultado.appendChild(paragrafo);
}


function mostrarContato() {
    const paragrafo = document.createElement("p");
    paragrafo.textContent = "Nome: " + contato.getNome() + " | Telefone: " + contato.getTelefone();
    resultado.appendChild(paragrafo);
}


btnSalvar.addEventListener("click", salvarContato);
btnMostrar.addEventListener("click", mostrarContato);