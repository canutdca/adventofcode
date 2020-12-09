export {}

const data = Deno.readTextFileSync('input.txt')

const sumCount: number = data.split('\n\n').reduce((sumCount: number, group: string) => {
    const answers: string[] = group.replaceAll('\n', '').split('')
    const uniqueAnswers = [ ...new Set(answers) ]

    const answersByPerson: string[] = group.split('\n')
    const countByGroup = uniqueAnswers.reduce((acc: any, answer: string) => {
        const answerValid = answersByPerson.every(abp => abp.includes(answer))
        return acc + (answerValid ? 1 : 0)
    }, 0)
    return sumCount + countByGroup
}, 0)

console.log('Result of second problem: ' + sumCount)

// result for 'input-test.txt' is 1
// result for 'input.txt' is 3447


interface Group {
    answers: string[]
}