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
        show: true
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
        show: true
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
        show: true
    }],
    ['fran', {
        image: '/i/speakers/franIglesias.jpg',
        name: 'Fran Iglesias',
        company: 'Qualifyze',
        position: 'Staff Software Engineer',
        bio: 'PulpoCon and Crafters-Vigo organizer',
        social: {
            linkedin: 'https://www.linkedin.com/in/franiglesias/'
        },
        show: false
    }],
    ['anna', {
        image: '/i/speakers/annaSala.jpg',
        name: 'Anna Sala Mercade',
        company: 'IFCO Systems',
        position: 'Frontend Developer',
        bio: 'I am a Frontend developer passionate about learning more every day, and I have a peculiar obsession with rubber ducks.',
        social: {
            linkedin: 'https://www.linkedin.com/in/anna-sala/'
        },
        show: true
    }],
    ['juan', {
        image: '/i/speakers/your-photo-grayscale.jpg',
        name: 'Juan Pontón Rodríguez',
        company: 'Gradiant',
        position: '',
        bio: '',
        social: {
            linkedin: ''
        },
        show: false
    }],
    ['manuel', {
        image: '/i/speakers/your-photo-grayscale.jpg',
        name: 'Manuel Landín',
        company: 'Gradiant',
        position: 'Research Engineer',
        bio: '',
        social: {
            linkedin: 'https://www.linkedin.com/in/manuellandin/'
        },
        show: false
    }],
    ['paula', {
        image: '/i/speakers/your-photo-grayscale.jpg',
        name: 'Paula Domínguez',
        company: 'Gradiant',
        position: 'Project Manager',
        bio: '',
        social: {
            linkedin: 'https://www.linkedin.com/in/paula-dom%C3%ADnguez-v%C3%A1zquez-889585178/'
        },
        show: false
    }],
    ['adria', {
        name: 'Adriá Batllé',
        image: '/i/speakers/adriaBatlle.png',
        company: 'LambdaLoopers',
        position: 'CEO',
        bio: 'Apasionado de la tecnología, siempre buscando el mejor martillo para cada clavo.',
        social: {
            linkedin: 'https://www.linkedin.com/in/adri%C3%A0-batlle/'
        },
        show: true
    }],
    ['alex', {
        name: 'Alex Cáceres',
        image: '/i/speakers/alexCaceres.png',
        company: 'LambdaLoopers',
        position: 'Senior Software Engineer',
        bio: 'Geek por naturaleza, curioso, experimentador y siempre con ganas de aprender sobre cualquier ámbito de la tecnología. De los que sienten que programar es jugar, crear y contribuir.',
        social: {
            linkedin: 'https://www.linkedin.com/in/acaceresgomez/'
        },
        show: true
    }],
    ['david', {
        name: 'David Pravos',
        image: '/i/speakers/davidPravos.jpeg',
        company: 'LambdaLoopers',
        position: 'Senior Software Engineer',
        bio: 'Físico de formación, entusiasmado por la ciencia y tecnología. Le encanta combinar la teoría con el pragmatismo.',
        social: {
            linkedin: 'https://www.linkedin.com/in/dpravos/'
        },
        show: true
    }],
    ['berny', {
        name: 'Berny Cantos',
        image: '/i/speakers/berny-cantos.jpg',
        company: 'Reverse Tech',
        position: 'Senior Server Developer',
        bio: '',
        social: {
            linkedin: 'https://www.linkedin.com/in/bernycantos/'
        },
        show: true
    }],
    // These are basically sponsors. I added them here for showing sponsorship in La Pulpito track
    ['crafters', {
        image: '/i/sps/craftersVigo.png',
        name: 'Crafters Vigo',
        company: 'Crafters Vigo',
        position: '',
        bio: '',
        social: {
            linkedin: 'https://www.linkedin.com/company/craftersvigo/'
        },
        show: false
    }],
    ['lambda', {
        image: '/i/sps/lambdaloopersPulpito.jpeg',
        name: 'LambdaLoopers',
        company: 'LambdaLoopers',
        position: '',
        bio: '',
        social: {
            linkedin: 'https://www.linkedin.com/company/lambdaloopers/'
        },
        show: false
    }],
    ['innatial', {
        image: '/i/sps/innatialPulpito.png',
        name: 'Innatial Developers',
        company: 'Innatial Developers',
        position: '',
        bio: '',
        social: {
            linkedin: 'https://www.linkedin.com/company/innatial'
        },
        show: false
    }],
    ['grafana', {
        image: '/i/sps/grafanaPulpito.jpeg',
        name: 'Grafana Labs',
        company: 'Grafana Labs',
        position: '',
        bio: '',
        social: {
            linkedin: 'https://www.linkedin.com/company/grafana-labs/'
        },
        show: false
    }],
    ['gradiant', {
        image: '/i/sps/gradiantPulpito.png',
        name: 'Gradiant',
        company: 'Gradiant',
        position: '',
        bio: '',
        social: {
            linkedin: 'https://www.linkedin.com/company/gradiant/'
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
