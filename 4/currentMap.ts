import { BaseMap } from './baseMap.model.ts';

export class CurrentMap {
    private baseMap: string[][]
    private currentMap: string[][]
    
    get height(): number {
        return this.currentMap.length
    }

    get width(): number {
        return this.currentMap[0].length
    }

    constructor(map: BaseMap) {
        this.baseMap = this.currentMap = map.getMap();
    }

    extendMap() {
        for(let line = 0; line < this.currentMap.length; line ++) {
            this.currentMap[line] = this.currentMap[line].concat(this.baseMap[line])
        }
    }

    getElement(x: number, y: number): string {
        return this.currentMap[y][x]
    }
}