import Personaje from "./classPersonaje.js";
import chalk from "chalk";

class Guerrero extends Personaje {
  constructor() {
    super("Guerrero Valiente", 100, 15, 5);
  }

  ataqueNormal() {
    console.log(`                                                                ${chalk.green(this.nombre)} lanza un golpe rápido!`);
    return this.ataque;
  }

  ataqueEspecial() {
    console.log(`                                                                ${chalk.green(this.nombre)} realiza un golpe de espada poderoso!`);
    return this.ataque + 10;
  }
}

export default Guerrero;
