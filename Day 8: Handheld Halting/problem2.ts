export {}

const data = Deno.readTextFileSync('input.txt')
const lines = data.split('\n')

let executions: number[] = []
const changed: number[] = []
let count = 0
let index = 0
let firstChange = false

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
			if (isValidForChange()) {
				reverseOrder(index)
				index = isNop(index)
			}
			else index += parseInt(value)
			break;
		default:
			if (isValidForChange()) {
				reverseOrder(index)
				index = isJmp(value, index)
			}
			else index++
			break;
	}
	if (isAlreadyOrder()) initState()
} while (index < lines.length);

function isValidForChange() {
	return !firstChange && !changed.includes(index)
}
function isJmp(value: string, index: number): number {
	return index + parseInt(value)
}
function isNop(index: number):number {
	return index + 1
}
function reverseOrder(index: number) {
	changed.push(index)
	firstChange = true
}
function isAlreadyOrder(): boolean {
	return executions.includes(index)
}
function initState(): void {
	count = 0
	index = 0
	executions = []
	firstChange = false
}

console.log('Result of second problem: ' + count)

// result for 'input-test.txt' is 8
// result for 'input.txt' is 509