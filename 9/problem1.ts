export {}

const countNumberForTest = 25

const data = Deno.readTextFileSync('input.txt')
const numbers: number[] = data.split('\n').map(n => Number(n))

let isFound = false
let index = 0
do {
    const numbersForTest: number[] = numbers.slice(index, index + countNumberForTest)
    const result = numbers[index + countNumberForTest]
    isFound = false
    for (let j = 0; j < countNumberForTest && !isFound; j++) {
        const element = numbersForTest[j];
        const substraction = result - element
        if (numbersForTest.includes(substraction)) {
            isFound = true
        }
    }
    index++
} while (isFound);

const result = numbers[index - 1 + countNumberForTest]

console.log('Result of first problem: ' + result)

// result for 'input-test.txt' and countNumberForTest = 5 is 127
// result for 'input.txt' and countNumberForTest = 25 is 22477624
