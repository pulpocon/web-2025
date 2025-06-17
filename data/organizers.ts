export type Organizer = {
  name: string
  position: string
  bio: string
  image: string
  social?: {
    linkedin?: string
    twitter?: string
  }

}

const organizers: Organizer[] = [
  {
    name: 'Ángela Falque',
    position: 'Product & Graphic Designer',
    bio: '',
    image: '/i/organizers/angela-falque.jpeg',
    social: {
      linkedin: 'https://www.linkedin.com/in/angelafalque-graphicdesigner/'
    }
  },
  {
    name: 'Fran Iglesias',
    position: 'Senior Software Engineer',
    bio: '',
    image: '/i/organizers/fran-iglesias.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/franiglesias/'
    }
  },
  {
    name: 'Lorena Abalde',
    position: 'Frontend Software Engineer',
    bio: '',
    image: '/i/organizers/lorena-abalde.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/lorenaabalde/'
    }
  },
  {
    name: 'Rolando Caldas',
    position: 'Crafter & Agile Software Engineer',
    bio: '',
    image: '/i/organizers/rolando-caldas.jpeg',
    social: {
      linkedin: 'https://www.linkedin.com/in/rolandocaldas/'
    }
  }
]

export default organizers
