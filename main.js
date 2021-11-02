const IRobot = require('./irobot.js');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const aIRobot = new IRobot(0, 0, 'EAST');

const question = () => {
    readline.question("command: ", (command) => {
        if (command.trim().toLocaleLowerCase() === "exit") {
            readline.close();
            return;
        }

        if (command.toLowerCase().startsWith("place")) {
            let x = parseInt(command.toLowerCase().replace('place', '').split(",")[0]);
            let y = parseInt(command.toLowerCase().replace('place', '').split(",")[1]);
            let direction = command.toLowerCase().replace('place', '').split(",")[2].trim().toUpperCase();

            aIRobot.place(x, y, direction)
        }

        if (command.trim().toLocaleLowerCase() === "report") {
            console.log("I am at ", aIRobot.status());
        }
        if (command.trim().toLocaleLowerCase() === "left") {
            aIRobot.left();
        }
        if (command.trim().toLocaleLowerCase() === "right") {
            aIRobot.right();
        }
        if (command.trim().toLocaleLowerCase() === "move") {
            aIRobot.move();
        }

        question();
    })
}
question();
