export class Me {
    
    private readonly initialXPosition = 0
    private readonly initialYPosition = 0

    private xPosition: number;
    private yPosition: number;

    constructor(private right: number = 3, private down: number = 1) {
        this.xPosition = this.initialXPosition
        this.yPosition = this.initialYPosition
    }

    next() {
        this.xPosition = this.xPosition + this.right
        this.yPosition = this.yPosition + this.down
    }

    getPosition(): Position {
        return {
            x: this.xPosition,
            y: this.yPosition
        }
    }
}

export interface Position {
    x: number
    y: number
}