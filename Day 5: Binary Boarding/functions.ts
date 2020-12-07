const rowSize = 128
const rowLineSize = 7
const columnSize = 8
const columnLineSize = 3

export function getPosition(line: string): Position {

    const rowString = line.substr(0, rowLineSize)
    const columnString = line.substr(rowLineSize, columnLineSize)
    return {
        row: getRow(rowString),
        column: getColumn(columnString)
    }
}

function getRow(rowString: string): number {
    return getGenericValue(rowString, 'F', rowSize, rowLineSize)
}

function getColumn(columnString: string): number {
    return getGenericValue(columnString, 'L', columnSize, columnLineSize)
}

function getGenericValue(valueString: string, lowerCharDiscriminator: string, size: number, lineSize: number): number {
    let i = 0
    let lower = 0
    let upper = size
    do {
        const char = valueString[i++]
        const half = ((upper - lower) / 2) + lower
        if (char === lowerCharDiscriminator) upper = half
        else lower = half
    } while (i <= lineSize - 2);

    return valueString[i] === lowerCharDiscriminator ? lower : upper - 1
}

export function getId(position: Position): number {
    return position.row * 8 + position.column
}

interface Position {
    row: number
    column: number
}
