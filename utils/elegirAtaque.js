import chalk from "chalk";
import rl from "./readline.js";

function elegirAtaque(personaje, callback) {
  rl.question(
    `\n                                                               ${chalk.green(personaje.nombre)}, elige tu ataque:\n${chalk.yellow(
      "                                                               1. Ataque normal"
    )}\n${chalk.yellow("                                                               2. Ataque especial")}\n> `,

    (opcion) => {
      let danio;

      if (opcion === "1") {
        danio = personaje.ataqueNormal();
      } else if (opcion === "2") {
        danio = personaje.ataqueEspecial();
      } else {
        console.log(chalk.red("                                                               Opción inválida. Usando ataque normal por defecto.\n"));
        danio = personaje.ataqueNormal();
      }
      callback(danio);
    }
  );
}

export default elegirAtaque;
