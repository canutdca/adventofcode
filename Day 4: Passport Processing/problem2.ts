import { importFile, separateAtributes, separateDocuments } from "./file.utils.ts";
import { instanceOfPassport, Passport, IPassport} from "./passport.ts";


const data = await importFile('input.txt')
const listPassportsString = separateDocuments(data)

const result: Passport[] = []
listPassportsString.forEach(pps => {

    const atributes = separateAtributes(pps);
    const passportData = atributes.reduce( (acc: any, attribute: string) => {
        const numberOfColons = attribute.length - attribute.replace(".", "").length;
        if (numberOfColons) throw new Error('attibute not valid')

        let [key, value] = attribute.split(':')
        acc[key] = value
        return acc
    }, {})

    if (instanceOfPassport(passportData)) {
        const passport = new Passport(passportData as IPassport)
        if (passport.isValid()) result.push(passport)
    }
})

console.log("Result of second problem is " + result.length)

// result for 'input-test-2.txt' is 4
// result for 'input.txt' is 257
