import { Me, Position } from './me.model.ts';
import { BaseMap } from './baseMap.model.ts'
import { CurrentMap } from './currentMap.ts'

const routes: Position[] = [ { x: 1, y: 1 }, { x: 3, y: 1 }, { x: 5, y: 1 }, { x: 7, y: 1 }, { x: 1, y: 2 }, ]
const map: BaseMap = new BaseMap(await Deno.readTextFile('./input.txt'))
let currentMap: CurrentMap
let me: Me
let count: number

const results: number[] = []
const getTrees = () => {
    const myPosition = me.getPosition()
    if (myPosition.y >= currentMap.height) return results.push(count);
    if (myPosition.x >= currentMap.width) currentMap.extendMap()
    const element = currentMap.getElement(myPosition.x, myPosition.y)
    if (element === '#') count ++
    me.next()
    getTrees()
} 

routes.forEach( route => {
    currentMap = new CurrentMap(map)
    me = new Me(route.x, route.y)
    count = 0
    getTrees()
})

console.log('Result of second problem: ' + results.reduce((acc, el) => acc * el))
