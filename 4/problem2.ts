import { Me, Position } from './me.model.ts';
import { BaseMap } from './baseMap.model.ts'
import { CurrentMap } from './currentMap.ts'

const routes: Position[] = [ { x: 1, y: 1 }, { x: 3, y: 1 }, { x: 5, y: 1 }, { x: 7, y: 1 }, { x: 1, y: 2 }, ]
const map: BaseMap = new BaseMap(await Deno.readTextFile('./input.txt'))
let currentMap: CurrentMap
let me: Me

const getTrees = (count: number): number => {
    const myPosition = me.getPosition()
    if (myPosition.y >= currentMap.height) return count
    if (myPosition.x >= currentMap.width) currentMap.extendMap()
    const element = currentMap.getElement(myPosition.x, myPosition.y)
    if (element === '#') count ++
    me.next()
    return getTrees(count)
} 

const result = routes.reduce( (acc: number, route: Position) => {
    currentMap = new CurrentMap(map)
    me = new Me(route.x, route.y)
    const count = getTrees(0)
    if (count && !acc) acc = 1
    return count * acc
}, 0)

console.log('Result of second problem: ' + result)
