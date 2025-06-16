export type Speaker = {
  name: string
  position: string
  bio: string
  image: URL
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
    image: new URL('../public/i/speakers/clareSudbery.jpeg', import.meta.url),
    social: {
      linkedin: 'https://www.linkedin.com/in/clare-sudbery-she-her-35939540/'
    }
  },
  {
    name: 'Sandro Mancuso',
    position: 'Codurance',
    bio: 'Software Craftsman / Managing Director at Codurance',
    image: new URL('../public/i/speakers/sandroMancuso.jpeg', import.meta.url),
    social: {
      linkedin: 'https://www.linkedin.com/in/sandromancuso/'
    }
  },
  {
    image: new URL('../public/i/speakers/krisztinaHirth.png', import.meta.url),
    name: 'Krisztina Hirth',
    position: 'PayFit',
    bio: 'Staff Architect',
    social: {
      linkedin: 'https://www.linkedin.com/in/christina-hirth-yellowbrickcode/'
    }
  }

]

export default organizers
