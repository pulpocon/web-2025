import {makeList} from "~/utils/getList";

import {TeaserSpeakerModel} from "~/model/TeaserSpeakerModel";
import type {Slot, Speaker, SpeakerID} from "~/model";

export class TeaserModel {
    title: string
    lang: string
    speakers: TeaserSpeakerModel[]

    constructor(title: string, lang: string, speakers: TeaserSpeakerModel[]) {
        this.title = title;
        this.lang = lang;
        this.speakers = speakers;
    }

    static placeholder(): TeaserModel {
        return new TeaserModel('TBD', 'xx', [
            new TeaserSpeakerModel('Speaker TBD', '/i/speakers/your-photo-grayscale.jpg')
        ])
    }

    static fromSlot(slot: Slot, speakersList: Map<string, Speaker>): TeaserModel {
        const speakers: Speaker[] = slot.speakers.map((id: SpeakerID):Speaker => {
            const speaker = speakersList.get(id);
            // Default to tbd if speaker name is not in the list. Probably waiting for confirmation
            if (!speaker) {
                return speakersList.get('tbd')!
            }
            return speaker;
        })!

        return new TeaserModel(
            slot.content.title ?? 'TBD',
            slot.content.lang ?? 'on',
            speakers,
        )
    }

    speakersNames(): string {
        return makeList(this.speakers.map((s: TeaserSpeakerModel) => s.name))
    }

    getSpeakers(): TeaserSpeakerModel[] {
        return this.speakers || []
    }

    getTitle(): string {
        return this.title
    }
}
