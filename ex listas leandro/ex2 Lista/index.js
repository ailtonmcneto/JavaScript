const paciente = {
    nome: "",
    idade: 0,

    getNome: function () {
        return this.nome;
    },
    setNome: function (novoNome) {
        this.nome = novoNome;
    },

    getIdade: function () {
        return this.idade;
    },
    setIdade: function (novaIdade) {
        this.idade = novaIdade;
    }
};

const inputNome = document.getElementById("nome");
const inputIdade = document.getElementById("idade");
const btnAtualizar = document.getElementById("btnatualizar");
const resultado = document.getElementById("resultado");

btnAtualizar.addEventListener("click", function () {
    paciente.setNome(inputNome.value);
    paciente.setIdade(Number(inputIdade.value));

    resultado.textContent = `Paciente: ${paciente.getNome()}, Idade: ${paciente.getIdade()}`;
    console.log(`Paciente: ${paciente.getNome()}, Idade: ${paciente.getIdade()}`);
});
