import {add} from './functions.js'
import chalk from "chalk"
console.log(add(12,2))
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  sleep(1000)
console.log(chalk.blue("Hello world!"))
sleep(1000)
console.log(chalk.yellow("Yooo World !"))
sleep(1000)
console.log(chalk.magenta("Namaste Hyderabadd!"))