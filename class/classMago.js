import Personaje from "./classPersonaje.js";
import chalk from "chalk";

class Mago extends Personaje {
  constructor() {
    super("Mago Místico", 80, 12, 3);
  }

  ataqueNormal() {
    console.log(chalk.magenta(`                                                                ${this.nombre} lanza una semilla!`));
    return this.ataque;
  }

  ataqueEspecial() {
    console.log(`                                                                ${chalk.green(this.nombre)} lanza jugo ácido!`);
    return this.ataque + 30;
  }
}

export default Mago;
