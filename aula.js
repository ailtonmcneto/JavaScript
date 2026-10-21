class Pessoa {
  constructor() {
    this.nome = "";
    this.idade = 0;
  }
  falar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
  }
}

const pessoa1 = new Pessoa();
pessoa1.nome = "Alice";
pessoa1.idade = 30;
const pessoa2 = new Pessoa();
pessoa2.nome = "Bob";
pessoa2.idade = 25;
pessoa1.falar();   
pessoa2.falar(); 

