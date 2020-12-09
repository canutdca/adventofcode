export {}
const ISearch = 'shiny gold'
const data = Deno.readTextFileSync('input-test.txt')
const rules: Rule[] = data.replaceAll('.', '').split('\n')
    .map(ruleString => {
        const [ container, contains ] = ruleString.split(' contain ')
        let contain: Contain[] | null = null
        if (contains !== 'no other bags')
        {
            contain = contains.split(', ').map(x => {
                const description = x.substr(2, x.length - 2)
                return {
                    quantity: parseInt(x.substr(0, 1)),
                    description: cleanBagsName(description)
                }
            })
        }
        return {
            container: cleanBagsName(container),
            contain
        }
    })

// const bagsDirectlyContains: string[] = rules
//     .filter(r => r.contain.some(x => x.description === ISearch))
//     .map(r => r.container)
// const otherBags: string[] = rules
//     .filter(r => bagsDirectlyContains.some(bdc => r.contain.some(x => x.description === bdc)))
//     .map(t => t.container)

// const bagsResult = [ ...bagsDirectlyContains, ...otherBags ]
// const cleanBagsResult = [ ...new Set(bagsResult) ]
// console.log(bagsDirectlyContains)
// console.log(otherBags)
// console.log('Result of first problem is ' + cleanBagsResult.length)

function cleanBagsName(text: string): string {
    return text.replace(' bags', '').replace(' bag', '')
}

const result: any = []
rules.forEach(rule => {
    if (asd(rule.contain)) result.push(rule)
});

console.log(result)

function asd(contain: Contain[] | null): boolean {
    if (!contain) return false
    if (contain!.some(c => c.description === ISearch)) return true
    else {
        let lala = false
        rules!.forEach(iterationContain => {
            lala = asd(iterationContain.contain)
            if (lala) return
        });
        return lala
    }
}

interface Rule {
    container: string
    contain: Contain[] | null
}

interface Contain {
    quantity: number
    description: string
}