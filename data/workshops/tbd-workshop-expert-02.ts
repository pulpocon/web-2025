import {getSpeaker} from "~/data/speakers";

const speaker = getSpeaker('Fancy Speaker');

export default {
  title: 'Crafter Expert Session 2',
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
  schedule: 'Thursday 12:00-14:00',
  track: 'Backend',
  twitter: [
    ''
  ]
}
