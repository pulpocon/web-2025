import {getSpeaker} from "~/data/speakers";

const speaker = getSpeaker('Sandro Mancuso');


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
  schedule: 'Sat 16:50-17:30',
  twitter: ''
}
