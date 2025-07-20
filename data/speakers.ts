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
        },
        show: true
    }],
    ['sandro', {
        name: 'Sandro Mancuso',
        company: 'Codurance',
        bio: '',
        position: 'Managing Director',
        image: '/i/speakers/sandroMancuso.jpeg',
        social: {
            linkedin: 'https://www.linkedin.com/in/sandromancuso/'
        },
        show: true
    }],
    ['krisztina', {
        image: '/i/speakers/krisztinaHirth.png',
        name: 'Krisztina Hirth',
        bio: '',
        company: 'PayFit',
        position: 'Staff Architect',
        social: {
            linkedin: 'https://www.linkedin.com/in/christina-hirth-yellowbrickcode/'
        },
        show: true
    }],
    ['jesus', {
        image: '/i/speakers/jesusVillarVazquez.jpg',
        name: 'Jesús M. Villar',
        company: 'Apipana.io',
        position: 'Engineering Lead',
        bio: '',
        social: {
            linkedin: 'https://www.linkedin.com/in/geeksusma/'
        },
        show: true
    }],
    ['dorra', {
        image: '/i/speakers/dorraBartaguiz.png',
        name: 'Dorra Bartaguiz',
        company: 'Arolla',
        position: 'CTO',
        bio: 'co-author "Software Craft" Dunod editions, coach, speaker',
        social: {
            linkedin: 'https://www.linkedin.com/in/💎dorra-bartaguiz-457b5315/'
        },
        show: true
    }],
    ['helder', {
        image: '/i/speakers/helderDeOliveira.jpeg',
        name: 'Helder de Oliveira',
        company: 'Codurance',
        position: 'Engineering Manager',
        bio: 'Driving Agile Transformations & Building Scalable Platforms',
        social: {
            linkedin: 'https://www.linkedin.com/in/hemarque/'
        },
        show: true
    }],
    ['annegret', {
        image: '/i/speakers/annegretJunker.png',
        name: 'Dr. Annegret Junker',
        company: 'codecentric AG',
        position: 'Chief Software Architect',
        bio: 'Author of Mastering Domain-Driven Design',
        social: {
            linkedin: 'https://www.linkedin.com/in/dr-annegret-junker-141a99a4/'
        },
        show: false
    }],
    ['lorena', {
        image: '/i/speakers/lorenaMartinez.jpeg',
        name: 'Lorena Martínez',
        company: 'Qualifyze',
        position: 'Fullstack Software Engineer',
        bio: '',
        social: {
            linkedin: 'https://www.linkedin.com/in/lorenamartinezmoledo/'
        },
        show: false
    }],
    ['ben', {
        image: '/i/speakers/benjaminRae.jpeg',
        name: 'Benjamin A. Rae',
        company: 'Qualifyze',
        position: 'Software Engineer',
        bio: '',
        social: {
            linkedin: 'https://www.linkedin.com/in/benjamin-alexander-rae/'
        },
        show: false
    }],
    ['tbd', {
        image: '/i/speakers/your-photo-grayscale.jpg',
        name: 'Speaker TBD',
        company: 'Acme Inc.',
        position: 'Developer',
        bio: '',
        social: {
            linkedin: 'https://www.not-defined.com'
        },
        show: false
    }]
])

export default speakersList

