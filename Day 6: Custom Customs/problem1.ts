export {}

const data = Deno.readTextFileSync('input-test.txt')

// const groups: Group[] = data.split('\n\n').reduce((acc: Group[], group: string) => {
//     const answers: string[] = group.replaceAll('\n', '').split('')
//     const uniqueAnswers = [...new Set(answers)]
//     return [...acc, { answers: uniqueAnswers } ]
// }, [])

const sumCount: number = data.split('\n\n').reduce((sumCount: number, group: string) => {
    const answers: string[] = group.replaceAll('\n', '').split('')
    const uniqueAnswers = [...new Set(answers)]
    return sumCount + uniqueAnswers.length
}, 0)


console.log('Result of first problem: ' + sumCount)

// result for 'input-test.txt' is 11
// result for 'input.txt' is 6742


interface Group {
    answers: string[]
}