export {}

interface State {
    currentValue: number,
    [diff: string]: number
}

const data = Deno.readTextFileSync('input.txt')
let numbers: number[] = data.split('\n').map(d => Number(d))

numbers = numbers.sort((a, b) => a - b)
const initialState: State = {
    currentValue: 0,
    '1': 0,
    '2': 0,
    '3': 0

}

const result = numbers.reduce((acc, value) => {
    const diff = value - acc.currentValue
    if (diff > 3) return acc
    const state = { ...acc }
    state.currentValue = value
    state[diff] += 1
    return state
}, initialState)

result[3] += 1
console.log(result)
console.log('Result of first problem is ' + result[1] * result[3])

// result for 'input-test-1.txt' is 35
// result for 'input-test-2.txt' is 220
// result for 'input.txt' is 2232
