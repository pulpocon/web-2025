import {getSpeaker} from "~/data/speakers";

const speaker = getSpeaker('Clare Sudbery');

export default {
    title: '🇬🇧 Talk Title 🇬🇧',
    speaker:
        [
            {
                image: speaker?.image,
                name: speaker?.name,
                link: speaker?.social?.linkedin ?? '#'
            }
        ],
    description: [
        'Abstract of your talk'
    ],
    schedule: 'Sat 10:40-11:20',
    twitter: ''
}
