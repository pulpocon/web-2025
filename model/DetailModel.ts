import type {Speaker} from "~/model";
import {getFlag} from "~/utils/getFlag";

export class DetailModel {
    title: string
    lang: string
    speakers: Speaker[]
    description: string[]
    schedule: string
    track: string

    constructor(title: string,
                lang: string,
                speakers: Speaker[],
                description: string[],
                schedule: string,
                track: string) {
        this.title = title
        this.lang = lang
        this.speakers = speakers
        this.description = description
        this.schedule = schedule
        this.track = track
    }

    static placeholder(): DetailModel {
        return new DetailModel(
            'Not Defined',
            'xx',
            [{
                name: 'Not Defined',
                image: '/i/speakers/your-photo.jpg',
                position: 'Developer',
                company: 'Acme Inc.',
                bio: 'Unknown',
                social: {
                    linkedin: 'https://www.not-defined.com'
                },
                show: true
            }],
            ['Content to be defined'],
            '',
            ''
        )
    }

    getSpeakers(): Speaker[] {
        return this.speakers || []
    }

    getTitle(): string {
        return this.title
    }

    getTrack(): string {
        return this.track
    }

    getLangAsFlag(): string {
        return getFlag(this.lang)
    }
}
