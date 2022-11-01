class Personagem {
  nome: string = "";
  energia: number = 0;
  vida: number = 0;
  ataque: number = 0;
  defesa: number = 0;
  constructor(nome: string,energia:number,vida:number,ataque:number,defesa:number) {
    this.nome = nome;
    this.energia = energia;
    this.vida = vida;
    this.ataque = ataque;
    this.defesa = defesa
  }
}
let sansa: Personagem;
sansa = new Personagem('sansa stark',50,100,30,50);
/* sansa.defesa = 20;
sansa.energia = 50 */
console.log("person :>> ", sansa);


// a declaração pode ser feita diretamente no construtor
