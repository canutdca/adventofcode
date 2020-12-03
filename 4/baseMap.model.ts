export class BaseMap {
    private map: string[][]
    
    constructor(input: string) {
        if (!input) throw Error('Input not valid')

        this.map = []
        const lines: string[] = input.split('\n')
        lines.forEach(line => {
            this.map.push(line.split(''))
        });
    }

    getMap() {
        return this.map;
    }
}
