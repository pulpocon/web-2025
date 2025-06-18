export function makeList(names: string[]): string {
    if (names.length === 1) {
        return names[0]
    }
    if (names.length === 2) {
        return names.join(' & ')
    }
    const last = names.pop()

    return names.join(', ') + ' & ' + last
}
