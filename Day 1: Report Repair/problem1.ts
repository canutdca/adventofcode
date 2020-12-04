export {}
const data = await Deno.readTextFile('input.txt')
const numbers = data.split('\n').map(n => parseInt(n))

// console.log(numbers)

const expectedSum = 2020

let result = 0
let index = 0
do {
    const number = numbers[index++]
    const substraction = expectedSum - number
    const number2 = numbers.find(n => n === substraction)
    if (number2) result = number * number2
} while(index < numbers.length && !result)

console.log('Result of first problem: ' + result)

// result for 'input-test.txt' is 514579
// result for 'input.txt' is 73371