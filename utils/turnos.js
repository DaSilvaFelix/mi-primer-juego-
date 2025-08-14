import rl from "./readline.js";
2;
import chalk from "chalk";
import elegirAtaque from "./elegirAtaque.js";

function turno(jugador1, jugador2) {
  if (!jugador1.estaVivo() || !jugador2.estaVivo()) {
    const ganador = jugador1.estaVivo() ? jugador1.nombre : jugador2.nombre;
    console.log(`\n${chalk.blue("                                                               🔥 El combate ha terminado!")}${chalk.green(` ${ganador} ha ganado el combate!`)}`);
    rl.close();
    return;
  }

  elegirAtaque(jugador1, (danio1) => {
    jugador2.recibirDanio(danio1);

    if (!jugador2.estaVivo()) return turno(jugador1, jugador2);

    elegirAtaque(jugador2, (danio2) => {
      jugador1.recibirDanio(danio2);
      turno(jugador1, jugador2);
    });
  });
}
export default turno;
