export {}

interface Line {
    firstPosition: number
    secondPosition: number
    char: string
    password: string
}

function isValidLine(line: Line): boolean {
    return line.password[line.firstPosition - 1] === line.char && line.password[line.secondPosition - 1] !== line.char
        || line.password[line.firstPosition - 1] !== line.char && line.password[line.secondPosition - 1] === line.char
}

const data = Deno.readTextFileSync('input.txt')
const result = data.split('\n').reduce( (acc: number, lineString: string) => {
    const [rule, password] = lineString.split(': ')
    const [counts, char] = rule.split(' ')
    const [firstPosition, secondPosition] = rule.split('-')
    const line: Line = {
        firstPosition: parseInt(firstPosition),
        secondPosition: parseInt(secondPosition),
        char,
        password
    }
    return isValidLine(line) ? acc + 1 : acc
}, 0)

console.log(result)


// result for 'input-test.txt' is 1
// result for 'input.txt' is 634
