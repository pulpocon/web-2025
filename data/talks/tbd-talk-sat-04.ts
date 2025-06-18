import {getSpeaker} from "~/data/speakers";

const speaker = getSpeaker('Dorra Bartaguiz');

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
  schedule: 'Sat 13:20-14:00',
  twitter: ''
}
