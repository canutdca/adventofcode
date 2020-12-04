export class Passport  {
    private byr: number
    private iyr: number
    private eyr: number
    private hgt: string 
    private hcl: string
    private ecl: string
    private pid: string
    private cid: string

    constructor(data: IPassport) {
        this.byr = parseInt(data.byr)
        this.iyr = parseInt(data.iyr)
        this.eyr = parseInt(data.eyr)
        this.hgt = data.hgt
        this.hcl = data.hcl
        this.ecl = data.ecl
        this.pid = data.pid
        this.cid = data.cid ? data.cid : ''
    }

    isValid() {
        return this.isValidBirthYear()
        && this.isValidIssueYear()
        && this.isValidExpirationYear()
        && this.isValidHeight()
        && this.isValidHairColor()
        && this.isValidEyeColor()
        && this.isValidPasswortId()
    }

    private isValidBirthYear(): boolean {
        return this.byr >= 1920 && this.byr <= 2002
    }

    private isValidIssueYear(): boolean {
        return this.iyr >= 2010 && this.iyr <= 2020
    }

    private isValidExpirationYear(): boolean {
        return this.eyr >= 2020 && this.eyr <= 2030
    }

    private isValidHeight(): boolean {
        const value = parseInt(this.hgt.substr(0, this.hgt.length - 2))
        const unit = this.hgt.substr(this.hgt.length - 2, 2)
        switch (unit) {
            case 'cm': return value >= 150 && value <= 193
            case 'in': return value >= 59 && value <= 76
            default:
                return false
        }
    }

    private isValidHairColor(): boolean {
        return /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(this.hcl)
    }

    private isValidEyeColor(): boolean {
        const listColorsValidForEyes = [ 'amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth' ]
        return listColorsValidForEyes.some(c => c === this.ecl)
    }

    private isValidPasswortId(): boolean {
        return /^[0-9]{9}$/.test(this.pid)
    }
}

export interface IPassport {
    byr: string
    iyr: string
    eyr: string
    hgt: string 
    hcl: string
    ecl: string
    pid: string
    cid?: string 
}

export function instanceOfPassport(object: any): object is IPassport {
    return 'byr' in object
        && 'iyr' in object
        && 'eyr' in object
        && 'hgt' in object
        && 'hcl' in object
        && 'ecl' in object
        && 'pid' in object
}
