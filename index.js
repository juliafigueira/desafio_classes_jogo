// Definindo a classe Heroi
class Heroi {
    // Construtor da classe que inicializa as propriedades
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para realizar o ataque
    atacar() {
      let ataque;
  
      // Definindo o ataque de acordo com o tipo de herói
      if (this.tipo === "mago") {
        ataque = "magia";
      } else if (this.tipo === "guerreiro") {
        ataque = "espada";
      } else if (this.tipo === "monge") {
        ataque = "artes marciais";
      } else if (this.tipo === "ninja") {
        ataque = "shuriken";
      } else {
        ataque = "ataque desconhecido";  // Caso o tipo não seja reconhecido
      }
  
      // Exibindo a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Função principal para testar a classe Heroi
  function jogar() {
    // Criando objetos de heróis com diferentes tipos
    let heroi1 = new Heroi("Merlin", 40, "mago");
    let heroi2 = new Heroi("Arthur", 30, "guerreiro");
    let heroi3 = new Heroi("Bodhi", 25, "monge");
    let heroi4 = new Heroi("Shiro", 28, "ninja");
  
    // Chama o método atacar para cada herói
    heroi1.atacar();  // Saída: O mago atacou usando magia
    heroi2.atacar();  // Saída: O guerreiro atacou usando espada
    heroi3.atacar();  // Saída: O monge atacou usando artes marciais
    heroi4.atacar();  // Saída: O ninja atacou usando shuriken
  }
  
  let continuar = true;

  // Inicia o jogo
  while(continuar){
    jogar();
   let resposta = prompt("Deseja continuar? S/N")
   
   if (resposta == "S" || "s") {
        continuar = true
    } else {
        continuar = false
    }
} 