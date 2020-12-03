import { Me } from './me.model.ts';
import { BaseMap } from './baseMap.model.ts'
import { CurrentMap } from './currentMap.ts'

const map = new BaseMap(await Deno.readTextFile('./input-test.txt'))
const currentMap = new CurrentMap(map)
const me = new Me()

let countFirstProblem = 0

const getTrees = () => {
    const myPosition = me.getPosition()
    if (myPosition.y >= currentMap.height) return;
    if (myPosition.x >= currentMap.width) currentMap.extendMap()
    const element = currentMap.getElement(myPosition.x, myPosition.y)
    if (element === '#') countFirstProblem ++
    me.next()
    getTrees()
}

getTrees()
console.log('Result of first problem: ' + countFirstProblem)

