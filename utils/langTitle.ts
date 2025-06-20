export function langTitle(title: string, lang: string | undefined): string {
    const flags = new Map<string, string>([
        ['en', '🇬🇧'],
        ['es', '🇪🇸']
    ])
    if (!lang) {
        return title;
    }

    return `${flags.get(lang) || '🇺🇳'} ${title} ${flags.get(lang) || '🇺🇳'}`
}
