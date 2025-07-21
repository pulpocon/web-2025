import {getFlag} from "~/utils/getFlag";

export function langTitle(title: string, lang: string | undefined): string {
    const flags = new Map<string, string>([
        ['en', '🇬🇧'],
        ['es', '🇪🇸']
    ])
    if (!lang) {
        return title;
    }

    return `${getFlag(lang) || '🇺🇳'} ${title} ${getFlag(lang) || '🇺🇳'}`
}
