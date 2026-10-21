class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }

    verificarAprovacao() {
        if (this.nota >= 7) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }
}

const aluno1 = new Aluno("Ana", 8.5);
const aluno2 = new Aluno("Bruno", 7);
const aluno3 = new Aluno("Carla", 5.5);

const situacao1 = aluno1.verificarAprovacao();
const situacao2 = aluno2.verificarAprovacao();
const situacao3 = aluno3.verificarAprovacao();

console.log(`${aluno1.nome} - Nota: ${aluno1.nota} - ${situacao1}`);
console.log(`${aluno2.nome} - Nota: ${aluno2.nota} - ${situacao2}`);
console.log(`${aluno3.nome} - Nota: ${aluno3.nota} - ${situacao3}`);
