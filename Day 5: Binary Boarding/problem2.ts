import { getId, getPosition } from "./functions.ts"

const data = Deno.readTextFileSync('input.txt')
const ids: number[] = data.split('\n').reduce( (acc: number[], line: string) => {
    const position = getPosition(line)
    const id = getId(position)
    return acc = [ ...acc, id ]
}, [])

const sort = ids.sort((a, b) => a - b)

let myId = 0
for (let i = 0; i < sort.length; i++) {
    const element = sort[i];
    const nextElement = sort[i + 1]
    if (nextElement === element + 2) {
        myId = element + 1
        break;
    }
}

console.log('Result of second problem: ' + myId)

// result for 'input.txt' is 597