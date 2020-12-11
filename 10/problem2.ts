export {}

const data = Deno.readTextFileSync('input.txt')
let numbers: number[] = data.split('\n').map(d => Number(d))

numbers = numbers.sort((a, b) => a - b)
