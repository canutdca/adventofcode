export {}

interface Line {
    minCount: number
    maxCount: number
    char: string
    password: string
}

function isValidLine(line: Line): boolean {
    const count = line.password.match(new RegExp(line.char, 'g'))?.length
    return !!count
        && count >= line.minCount && count <= line.maxCount
}

const data = Deno.readTextFileSync('input.txt')
const result = data.split('\n').reduce( (acc: number, lineString: string) => {
    const [rule, password] = lineString.split(': ')
    const [counts, char] = rule.split(' ')
    const [minCount, maxCount] = rule.split('-')
    const line: Line = {
        minCount: parseInt(minCount),
        maxCount: parseInt(maxCount),
        char,
        password
    }
    return isValidLine(line) ? acc + 1 : acc
}, 0)

console.log('Result of first problem: ' + result)

// result for 'input-test.txt' is 2
// result for 'input.txt' is 550
