class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = '';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando uma instância da classe Heroi
let heroi = new Heroi('Alexandre', 25, 'guerreiro');

// Chamando o método atacar
heroi.atacar();
