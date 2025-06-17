import {getSpeaker} from "~/data/speakers";

const speaker = getSpeaker('Fancy Speaker');

export default {
  title: 'Crafter Newbie Session 3',
  speaker:
      [
        {
          image: speaker?.image ?? '/i/speakers/your-photo.jpg',
          name: speaker?.name ?? 'Your Name',
          link: speaker?.social?.linkedin ?? '#'
        }
      ],
  description: [
    'Description of your workshop \n'
  ],
  schedule: 'Thursday 15:30-17:30',
  track: 'Backend',
  twitter: [
    ''
  ]
}
