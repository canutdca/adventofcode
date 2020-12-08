export {}

const data = Deno.readTextFileSync('input.txt')
const lines = data.split('\n')

const executions: number[] = []
let count = 0
let index = 0

do {
	const current = lines[index]
	const [ order, value ] = current.split(' ')
	executions.push(index)
	switch (order) {
		case 'acc':
			count += parseInt(value)
			index++
			break;
		case 'jmp':
			index += parseInt(value)
			break;
		default:
			index++
			break;
	}
} while (!executions.includes(index));

console.log('Result of first problem: ' + count)

// result for 'input-test.txt' is 5
// result for 'input.txt' is 1501