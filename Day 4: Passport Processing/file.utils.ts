export async function importFile(nameFile: string) {
    return await Deno.readTextFile(nameFile)
}

export function separateDocuments(info: string): string[] {
    return info.split('\n\n')
}

export function separateAtributes(document: string): string[] {
    return document.split(/[\s\n]+/)
}