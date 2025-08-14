import chalk from "chalk";
import turno from "./utils/turnos.js";
import elegirPersonajes from "./utils/elegirPersonajes.js";

function iniciarCombate(jugador1, jugador2) {
  console.log(
    chalk.green(`\n         
                                               ¡Comienza el combate entre ${jugador1.nombre} y ${jugador2.nombre}!`)
  );

  turno(jugador1, jugador2);
}

elegirPersonajes(iniciarCombate);
