import chalk from "chalk";
class Personaje {
  nombre;
  #vida;
  #ataque;
  defensa;
  constructor(nombre, vida, ataque, defensa) {
    this.nombre = nombre;
    this.#vida = vida;
    this.#ataque = ataque;
    this.defensa = defensa;
  }

  recibirDanio(danio) {
    const danioReal = Math.max(danio - this.defensa, 0);
    this.#vida -= danioReal;
    console.log(`                                                                ${chalk.green(this.nombre)} recibe ${chalk.red(danioReal)} de daño. Vida restante: ${chalk.green(this.#vida)}`);
  }

  estaVivo() {
    return this.#vida > 0;
  }
}

export default Personaje;
