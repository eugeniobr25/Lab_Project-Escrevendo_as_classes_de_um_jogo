class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  attack() {
    let atancando;
    switch (this.tipo) {      
      case "Guerreiro":
        atancando = "espada";
        break;
      case "Mago":
        atancando = "magia";
        break;
      case "Monje":
        atancando = "artes marciais";
        break;
      case "Ninja":
        atancando = "shuriken";
        break;
      default:
        atancando = "não atacou";
    }
    console.log(`O ${this.tipo} atacou usando ${atancando}`);
  }
}

const myHero = new Hero("John", 25, "Mago");
myHero.attack();
