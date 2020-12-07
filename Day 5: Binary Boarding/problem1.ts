import { getId, getPosition } from "./functions.ts"

const data = Deno.readTextFileSync('input.txt')
const result = data.split('\n').reduce( (acc: number, line: string) => {
    const position = getPosition(line)
    const id = getId(position)
    return id >= acc ? id : acc
}, 0)

console.log('Result of first problem: ' + result)

// result for 'input-test.txt' is 820
// result for 'input.txt' is 801