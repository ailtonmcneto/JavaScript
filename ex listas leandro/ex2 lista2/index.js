class Usuario {
    constructor() {
        this.email = "";
    }

    setEmail(email) {
        if (email.includes("@")) {
            this.email = email;
        } else {
            console.error(`Erro: o e-mail "${email}" é inválido. O valor não foi alterado.`);
        }
    }

    getEmail() {
        return this.email;
    }
}

const usuario = new Usuario();

// Teste 1: e-mail válido
console.log("Teste 1 - e-mail válido");
usuario.setEmail("ailton@gmail.com");
console.log("E-mail armazenado:", usuario.getEmail());

// Teste 2: e-mail inválido
console.log("Teste 2 - e-mail inválido");
usuario.setEmail("ailtongmail.com");
console.log("E-mail armazenado:", usuario.getEmail());
