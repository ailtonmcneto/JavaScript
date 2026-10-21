class ContaBancaria {
    constructor(saldoInicial = 0) {
        this.saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log("Erro: o valor do depósito deve ser maior que 0.");
            return;
        }

        this.saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado.`);
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log(`Erro: saque de R$ ${valor.toFixed(2)} negado. Saldo insuficiente.`);
            return;
        }

        this.saldo -= valor;
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado.`);
    }

    getSaldo() {
        return this.saldo;
    }
}

const conta = new ContaBancaria();

// Depósito
conta.depositar(500);

// Tentativa de saque inválido
conta.sacar(800);

// Saque válido
conta.sacar(200);

// Saldo final
console.log(`Saldo final: R$ ${conta.getSaldo().toFixed(2)}`);
