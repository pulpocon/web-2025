export type Speaker = {
  name: string
  position: string
  bio: string
  image: string
  social?: {
    linkedin?: string
    twitter?: string
  }

}

const organizers: Speaker[] = [
  {
    name: 'Clare Sudbery',
    position: 'Sudbery Soft. Eng.',
    bio: 'Samman technical coach',
    image: '/i/speakers/clareSudbery.jpeg',
    social: {
      linkedin: 'https://www.linkedin.com/in/clare-sudbery-she-her-35939540/'
    }
  },
  {
    name: 'Sandro Mancuso',
    position: 'Codurance',
    bio: 'Software Craftsman / Managing Director at Codurance',
    image: '/i/speakers/sandroMancuso.jpeg',
    social: {
      linkedin: 'https://www.linkedin.com/in/sandromancuso/'
    }
  },
  {
    image: '/i/speakers/krisztinaHirth.png',
    name: 'Krisztina Hirth',
    position: 'PayFit',
    bio: 'Staff Architect',
    social: {
      linkedin: 'https://www.linkedin.com/in/christina-hirth-yellowbrickcode/'
    }
  },
  {
    image: '/i/speakers/jesusVillarVazquez.jpg',
    name: 'Jesús M. Villar',
    position: 'Apipana.io',
    bio: 'Engineering Lead',
    social: {
      linkedin: 'https://www.linkedin.com/in/geeksusma/'
    }
  }
]

export default organizers
