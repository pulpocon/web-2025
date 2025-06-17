import {getSpeaker} from "~/data/speakers";

const speaker = getSpeaker('Fancy Speaker');

export default {
    title: '🇬🇧 Talk Title 🇬🇧',
    speaker:
        [
            {
                image: speaker?.image ?? '/i/speakers/your-photo.jpg',
                name: speaker?.name ?? 'Your Name',
                link: speaker?.social?.linkedin ?? '#'
            }
        ],
    description: [
        'Abstract of your talk'
    ],
    schedule: 'Fri 13:50-14:30',
    twitter: ''
}
