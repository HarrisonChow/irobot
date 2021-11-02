
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

    status() {
        return `${this.xPosition}, ${this.yPosition}, ${this.direction}`;
    }

    place(x, y, direction) {

        if (x < 0 || x > 5 || y < 0 || y > 5) {
            throw new Error("Invalid Position! Please input number between 0 - 5");
        }

        if (direction != "NORTH" && direction != "EAST" && direction != "SOUTH" && direction != "WEST") {
            throw new Error("Invalid direction! Please input 'EAST','WEST','NORTH' or 'SOUTH'");
        }

        this.xPosition = x;
        this.yPosition = y;
        this.direction = direction;
    }
}