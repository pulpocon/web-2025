import {getSpeaker} from "~/data/speakers";

const speaker = getSpeaker('Fancy Speaker');

export default {
  title: 'Workshop Title',
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
  schedule: 'Friday 12:30-14:30',
  track: 'Backend',
  twitter: [
    ''
  ]
}
