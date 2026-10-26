class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    emitirSom() {
        return "Som genérico";
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome);
        this.raca = raca;
    }

    emitirSom() {
        return "Latido";
    }

    compararSom() {
        return `Animal: ${super.emitirSom()} | Cachorro: ${this.emitirSom()}`;
    }
}

const animal = new Animal("Animal qualquer");
const cachorro = new Cachorro("Rex", "Labrador");

console.log(`${animal.nome}: ${animal.emitirSom()}`);
console.log(`${cachorro.nome} (${cachorro.raca}): ${cachorro.emitirSom()}`);
console.log(cachorro.compararSom());
