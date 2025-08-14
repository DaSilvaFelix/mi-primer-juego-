import chalk from "chalk";
import Mago from "../class/classMago.js";
import Guerrero from "../class/classGuerrero.js";

function crearPersonaje(eleccion) {
  if (eleccion === "1") return new Mago();
  if (eleccion === "2") return new Guerrero();
  console.log(chalk.red("Opción inválida. Se asignará Mango por defecto."));
  return new Mago();
}

export default crearPersonaje;
