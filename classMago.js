import Personaje from "./classPersonaje.js";
import chalk from "chalk";

class Mango extends Personaje {
  constructor() {
    super("Mango Místico", 50, 12, 3);
  }

  ataqueNormal() {
    console.log(chalk.magenta(`                                                                ${this.nombre} lanza una semilla!`));
    return this.ataque;
  }

  ataqueEspecial() {
    console.log(`                                                                ${chalk.green(this.nombre)} lanza jugo ácido!`);
    return this.ataque + 5;
  }
}

export default Mango;
