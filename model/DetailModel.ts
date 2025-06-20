import type {Speaker} from "~/model";
import {makeList} from "~/utils/getList";

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

    speakersNames(): string {
        return makeList(this.speakers.map((s: Speaker) => s.name))
    }

    getSpeakers(): Speaker[] {
        return this.speakers || []
    }

    getTitle(): string {
        return langTitle(this.title, this.lang)
    }

    getTrack(): string {
        return this.track
    }
}
