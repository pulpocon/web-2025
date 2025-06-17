import {getSpeaker} from "~/data/speakers";

const speaker = getSpeaker('Krisztina Hirth');


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
  schedule: 'Friday 09:30-11:30',
  track: 'Backend',
  twitter: [
    ''
  ]
}
