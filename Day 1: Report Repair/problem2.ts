export {}
const data = await Deno.readTextFile('input-test.txt')
const numbers = data.split('\n').map(n => parseInt(n))

// console.log(numbers)

const expectedSum = 2020

let result = 0
let index = 0
do {
    const number1 = numbers[index++]
    const substraction1 = expectedSum - number1
    let subIndex = index
    do {
        const number2 = numbers[subIndex++]
        const substraction2 = substraction1 - number2
        const number3 = numbers.find(n => n === substraction2)
        if (number3) {
            console.log(number1)
            console.log(number2)
            console.log(number3)
            result = number1 * number2 * number3
        }
    } while(subIndex < numbers.length && !result)

} while(index < numbers.length && !result)

console.log('Result of second problem: ' + result)

// result for 'input-test.txt' is 241861950
// result for 'input.txt' is 127642310