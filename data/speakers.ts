import type {Speaker} from "~/model";

const speakersList: Map<string, Speaker> = new Map([
    ['clare', {
        name: 'Clare Sudbery',
        company: 'Sudbery Soft. Eng.',
        position: 'Samman technical coach',
        bio: '',
        image: '/i/speakers/clareSudbery.jpeg',
        social: {
            linkedin: 'https://www.linkedin.com/in/clare-sudbery-she-her-35939540/'
        }
    }],
    ['sandro', {
        name: 'Sandro Mancuso',
        company: 'Codurance',
        bio: '',
        position: 'Managing Director',
        image: '/i/speakers/sandroMancuso.jpeg',
        social: {
            linkedin: 'https://www.linkedin.com/in/sandromancuso/'
        }
    }],
    ['krisztina', {
        image: '/i/speakers/krisztinaHirth.png',
        name: 'Krisztina Hirth',
        bio: '',
        company: 'PayFit',
        position: 'Staff Architect',
        social: {
            linkedin: 'https://www.linkedin.com/in/christina-hirth-yellowbrickcode/'
        }
    }],
    ['jesus', {
        image: '/i/speakers/jesusVillarVazquez.jpg',
        name: 'Jesús M. Villar',
        company: 'Apipana.io',
        position: 'Engineering Lead',
        bio: '',
        social: {
            linkedin: 'https://www.linkedin.com/in/geeksusma/'
        }
    }],
    ['dorra', {
        image: '/i/speakers/dorraBartaguiz.png',
        name: 'Dorra Bartaguiz',
        company: 'Arolla',
        position: 'CTO',
        bio: 'co-author "Software Craft" Dunod editions, coach, speaker',
        social: {
            linkedin: 'https://www.linkedin.com/in/💎dorra-bartaguiz-457b5315/'
        }
    }],
    ['tbd', {
        image: '/i/speakers/your-photo-grayscale.jpg',
        name: 'Speaker TBD',
        company: 'Acme Inc.',
        position: 'Developer',
        bio: '',
        social: {
            linkedin: 'https://www.not-defined.com'
        }
    }]
])

export default speakersList

