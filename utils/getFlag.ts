export const getFlag = (lang: string) => {
    const flags = new Map<string, string>([
        ['en', '🇬🇧'],
        ['es', '🇪🇸']
    ])
    return flags.get(lang) || '🇺🇳'
}
