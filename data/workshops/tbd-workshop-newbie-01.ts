import {getSpeaker} from "~/data/speakers";

const speaker = getSpeaker('Fancy Speaker');

export default {
  title: 'Crafter Newbie Session 1',
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
  schedule: 'Thursday 09:30-11:30',
  track: 'Backend',
  twitter: [
    ''
  ]
}
