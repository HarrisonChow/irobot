// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question(`Place your robot`, (xPosition, yPosition, direction) => {
//     // console.log(`Hi ${name}!`)

//     readline.close()
// })


module.exports = class IRobot {
    constructor(xPosition, yPosition, direction) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.direction = direction;
    }

    left() {
        switch (this.direction) {
            case "NORTH":
                this.direction = "WEST";
                break;
            case "EAST":
                this.direction = "NORTH";
                break;
            case "WEST":
                this.direction = "SOUTH";
                break;
            case "SOUTH":
                this.direction = "EAST";
                break;
        }
        return;
    }

    right() {
        switch (this.direction) {
            case "NORTH":
                this.direction = "EAST";
                break;
            case "EAST":
                this.direction = "SOUTH";
                break;
            case "WEST":
                this.direction = "NORTH";
                break;
            case "SOUTH":
                this.direction = "WEST";
                break;
        }
        return;
    }

    nextStep() {
        var x, y;
        switch (this.direction) {
            case "NORTH":
                y = this.yPosition + 1;
                break;
            case "EAST":
                x = this.xPosition + 1;
                break;
            case "WEST":
                x = this.xPosition - 1;
                break;
            case "SOUTH":
                y = this.yPosition - 1;
                break;
        }
        return [x, y];
    }

    move() {
        switch (this.direction) {
            case "EAST":
                this.xPosition < 5 ? this.xPosition = this.xPosition + 1 : this.xPosition;
                break;
            case "WEST":
                this.xPosition > 0 ? this.xPosition = this.xPosition - 1 : this.xPosition;
                break;
            case "NORTH":
                this.yPosition < 5 ? this.yPosition = this.yPosition + 1 : this.yPosition;
                break;
            case "SOUTH":
                this.yPosition > 0 ? this.yPosition = this.yPosition - 1 : this.yPosition;
                break;
        }
    }
}