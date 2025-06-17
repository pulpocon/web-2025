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
  schedule: 'Sat 16:00-16:40',
  twitter: ''
}
