import {getSpeaker} from "~/data/speakers";

const speaker = getSpeaker('Clare Sudbery');

export default {
  title: '🇬🇧 Workshop Title 🇬🇧',
  speaker: [
    {
      image: speaker?.image,
      name: speaker?.name,
      link: speaker?.social?.linkedin ?? '#'
    }
  ],
  description: [
    'Description of your workshop \n'
  ],
  schedule: 'Friday 16:30-18:30',
  track: 'Backend',
  twitter: [
    ''
  ]
}
