import readline from "readline";
import chalk from "chalk";
import Mango from "./classMago.js";
import Guerrero from "./classGuerrero.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function crearPersonaje(eleccion) {
  if (eleccion === "1") return new Mango();
  if (eleccion === "2") return new Guerrero();
  console.log(chalk.red("Opción inválida. Se asignará Mango por defecto."));
  return new Mango();
}

function elegirPersonajes(callback) {
  rl.question(
    `\n${chalk.cyan("                                                               Jugador 1, elige tu personaje:")}\n${chalk.yellow(
      "                                                               1. Mango Místico"
    )}\n${chalk.yellow("                                                               2. Guerrero Valiente")}\n> `,
    (p1) => {
      rl.question(
        `\n${chalk.cyan("                                                               Jugador 2, elige tu personaje:")}\n${chalk.yellow(
          "                                                               1. Mango Místico"
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

function iniciarCombate(jugador1, jugador2) {
  console.log(
    chalk.green(
      `\n                                                               🔥 ¡Comienza el combate entre ${jugador1.nombre} y ${jugador2.nombre}!`
    )
  );

  function turno() {
    if (!jugador1.estaVivo() || !jugador2.estaVivo()) {
      const ganador = jugador1.estaVivo() ? jugador1.nombre : jugador2.nombre;
      console.log(
        `\n${chalk.blue("                                                               🔥 El combate ha terminado!")}${chalk.green(
          ` ${ganador} ha ganado el combate!`
        )}`
      );
      rl.close();
      return;
    }

    elegirAtaque(jugador1, (danio1) => {
      jugador2.recibirDanio(danio1);

      if (!jugador2.estaVivo()) return turno();

      elegirAtaque(jugador2, (danio2) => {
        jugador1.recibirDanio(danio2);
        turno();
      });
    });
  }

  turno();
}

elegirPersonajes(iniciarCombate);
