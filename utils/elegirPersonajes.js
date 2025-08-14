import chalk from "chalk";
import rl from "./readline.js";
import crearPersonaje from "./crearPersonaje.js";

function elegirPersonajes(callback) {
  rl.question(
    `\n${chalk.cyan("                                                               Jugador 1, elige tu personaje:")}\n${chalk.yellow(
      "                                                               1. Mago Místico"
    )}\n${chalk.yellow("                                                               2. Guerrero Valiente")}\n> `,
    (p1) => {
      rl.question(
        `\n${chalk.cyan("                                                               Jugador 2, elige tu personaje:")}\n${chalk.yellow(
          "                                                               1. Mago Místico"
        )}\n${chalk.yellow("                                                               2. Guerrero Valiente")}\n> `,
        (p2) => {
          const jugador1 = crearPersonaje(p1);
          const jugador2 = crearPersonaje(p2);
          callback(jugador1, jugador2);
        }
      );
    }
  );
}

export default elegirPersonajes;
