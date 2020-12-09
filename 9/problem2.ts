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

const dirtyNumber = numbers[index - 1 + countNumberForTest]
let firstValue = 0
let lastValue = 0
let isFound2 = false

console.log('-------' + dirtyNumber)
// for (let firstIndex = 3; firstIndex < numbers.length && !isFound2; firstIndex++) {
    const firstIndex = 2
    const firstElement = numbers[firstIndex];
    const lastIndexOfCandidates = numbers.length - 1
    // console.log('first element: ' + firstElement)
    // console.log(lastIndexOfCandidates)
    for (let lastIndex = lastIndexOfCandidates; lastIndex > firstIndex && !isFound2; lastIndex--) {
        const candidates = numbers.slice(firstIndex, lastIndex)
        // console.log(candidates)
        const sum = candidates.reduce((a, b) => a + b, 0)
        // console.log(`${firstElement} - ${numbers[lastIndex]} --> ${sum}`)
        if (sum === dirtyNumber)
        {
            firstValue = firstElement
            lastValue = numbers[lastIndex - 2]
            isFound2 = true
        }
    }
    
// }

const result = firstValue + lastValue
console.log('Result of second problem: ' + result)
console.log(firstValue)
console.log(lastValue)

// result for 'input-test.txt' and countNumberForTest = 5 is 127
// result for 'input.txt' and countNumberForTest = 25 is 22477624
