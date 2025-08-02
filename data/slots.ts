import type {Slot} from "~/model";

export const slots: Map<string, Slot> = new Map([
        ['openspace', {
            speakers: [
                'ana'
            ],
            content: {
                title: 'Open Space',
                description: [
                    'Un open space es un formato no conferencial. Sin agenda, sin temas predefinidos. Los asistentes deciden la agenda al inicio, utilizando un proceso colaborativo. Ningún tema está prohibido.',
                    'Es una oportunidad para explorar nuevas perspectivas sobre cualquier tema que te importe. ¿Alguna vez has intentado empatizar con alguien sobre un tema que estabas seguro de entender completamente?',
                    'En este open space, los participantes propondrán temas que luego serán votados por todos. Una vez definidos los temas de interés, nos sumergiremos en discusiones enriquecedoras, permitiendo que cada voz sea escuchada. La idea es aprender colectivamente, en un ambiente de respeto y colaboración.'
                ],
                lang: 'es',
            },
            schedule: 'Thursday 16:00-19:00',
            track: 'Open Space',
        }],
        ['talk-sat-01', {
            speakers:
                [
                    'annegret'
                ],
            content: {
                title: 'Can an AI design elegant APIs?',
                lang: 'en',
                description: [
                    'This presentation demonstrates how LLMs can support the design of understandable and domain-appropriate APIs based on DDD practices such as Domain Storytelling, Event Storming, and Context Mapping.',
                    'Using the Synergetic Blueprint process, it explains where AI provides real value—and where human judgment remains irreplaceable.'
                ],

            },
            track: 'Main Day',
            schedule: 'Sat 10:00-10:40',
        }],
        ['talk-sat-02', {
            speakers:
                [
                    'dorra'
                ],
            content: {
                title: 'Talk Title',
                lang: 'en',
                description: ['TBD'],

            },
            track: 'Main Day',
            schedule: 'Sat 10:00-10:40',
        }],
        ['talk-sat-04', {
            speakers:
                [
                    'clare'
                ],
            content: {
                title: 'Talk Title',
                lang: 'en',
                description: ['TBD'],

            },
            track: 'Main Day',
            schedule: 'Sat 10:00-10:40',
        }],
        ['talk-sat-05', {
            speakers:
                [
                    'luise'
                ],
            content: {
                title: 'Your testing strategy is broken. Let’s fix it!',
                lang: 'en',
                description: [
                    'Testing is essential for delivering reliable software, but too often, teams fall into the trap of testing everything and testing it poorly. Endless unit tests for trivial code create a false sense of security while ignoring the areas that matter most—like how your system behaves when it really counts. This session takes a hard look at what makes a good testing strategy. Instead of chasing meaningless metrics like 100% coverage, learn how to test behaviors, focus on integration points, and embrace a leaner, smarter approach to quality assurance. Your users don’t care about how many tests you’ve written—they care about software that works. This is your guide to writing fewer tests, but better ones, that actually make a difference.'],
            },
            track: 'Main Day',
            schedule: 'Sat 16:00-16:40',
        }],
        ['talk-sat-06', {
            speakers:
                [
                    'sandro'
                ],
            content: {
                title: 'Talk Title',
                lang: 'en',
                description: ['TBD'],
            },
            track: 'Main Day',
            schedule: 'Sat 16:50-17:30',
        }],
        ['fireside-chat', {
            speakers:
                [
                    'tbd',
                    'tbd',
                    'tbd'
                ],
            content: {
                title: 'Fireside Chat',
                lang: 'en',
                description: ['TBD'],
            },
            track: 'Pulpito',
            schedule: 'Friday 18:30-19:30',
        }],
        ['workshop-newbie-01', {
            speakers:
                [
                    'lorena', 'ben'
                ],
            content: {
                title: 'Módulo 1',
                lang: 'es',
                description:
                    [
                        'Un taller de día completo para la introducción o mejora de prácticas técnicas ágiles.',
                        'Incluyendo TDD, refactorización, programación en parejas, revisiones de código, etc.',
                    ],
            },
            track: 'Crafter Starter Workshop',
            schedule: 'Thursday 9:30-11:30',
        }],
        ['workshop-newbie-02', {
            speakers:
                [
                    'lorena', 'ben'
                ],
            content: {
                title: 'Módulo 2',
                lang: 'es',
                description: ['...'],
            },
            track: 'Crafter Starter Workshop',
            schedule: 'Thursday 9:30-11:30',
        }],
        ['workshop-newbie-03', {
            speakers:
                [
                    'lorena', 'ben'
                ],
            content: {
                title: 'Módulo 3',
                lang: 'es',
                description: ['...'],
            },
            track: 'Crafter Starter Workshop',
            schedule: 'Thursday 9:30-11:30',
        }],
        ['workshop-expert-01', {
            speakers:
                [
                    'david',
                    'alex'
                ],
            content: {
                title: 'Módulo 1. Estado de la IA',
                lang: 'es',
                description: [
                    'Ecosistema de herramientas de IA'
                ],
            },
            track: 'Crafter + AI Workshop',
            schedule: 'Thursday 9:30-11:30',
        }],
        ['workshop-expert-02', {
            speakers:
                [
                    'david',
                    'alex'
                ],
            content: {
                title: 'Construyendo productos de IA',
                lang: 'es',
                description: ['Por determinar'],
            },
            track: 'Crafter + AI Workshop',
            schedule: 'Thursday 9:30-11:30',
        }],
        ['workshop-expert-03', {
            speakers:
                [
                    'david',
                    'alex'
                ],
            content: {
                title: 'Kata de programación, asistida con IA',
                lang: 'es',
                description: ['Por determinar'],
            },
            track: 'Crafter + AI Workshop',
            schedule: 'Thursday 9:30-11:30',
        }],
        ['workshop-crafter-en-01', {
            content: {
                title: 'Workshop Title',
                description: [
                    'Description of your workshop'
                ],
                lang: 'en',
            },
            speakers: [
                'tbd',
            ],
            schedule: 'Friday 09:30-11:30',
            track: '🇬🇧 Crafter 🇬🇧',
        }],
        ['workshop-crafter-en-02', {
            content: {
                title: 'Impact Mapping',
                description: [
                    'Impact mapping is a lightweight, collaborative planning technique for teams that want to make a big impact with software products. It is based on user interaction design, outcome-driven planning and mind mapping. Impact maps help delivery teams and stakeholders visualise roadmaps, explain how deliverables connect to user needs and communicate how user outcomes relate to higher-level organisational goals. (source: https://www.impactmapping.org/)',
                    'Impact Mapping is a unique technique (described in a book by Gojko Adzic) which enables every organisation or team facing a new problem, a new challenge to not only find unexpected ideas but also to make sure that these ideas address those challenges instead of fulfilling other interests.',
                    'By following the steps, Impact Mapping helps find ways to experiment, innovate, and compare possible ideas by focusing on the outcome rather than the output. It gives the group the means to verify the progress the whole time - to fail fast or stop investing because they have reached their goal.',
                    'In this workshop, we will discuss and map a fictive problem. At the end of the workshop, you will know how the technique works and when to use it, how much fun such Impact Mapping can be and how creative people are when the only constraint is time :)',
                    'There are no prerequisites but curiosity :) '
                ],
                lang: 'en',
            },
            speakers: [
                'krisztina',
            ],
            schedule: 'Friday 12:00-14:00',
            track: '🇬🇧 Crafter 🇬🇧',
        }],
        ['workshop-crafter-en-03', {
            content: {
                title: 'Workshop Title',
                description: [
                    'Description of your workshop'
                ],
                lang: 'en',
            },
            speakers: [
                'clare',
            ],
            schedule: 'Friday 16:30-18:30',
            track: '🇬🇧 Crafter 🇬🇧',
        }],
        ['workshop-crafter-es-01', {
            content: {
                title: 'No dejes que tu código se salte el día de piernas - Entrena tus habilidades de codificación como tu rutina de gimnasio',
                description: [
                    'Desarrollar código bien elaborado no es un unicornio, es algo fácil de lograr, pero requiere disciplina y compromiso. El taller mostrará consejos y ejemplos de cómo lograr el objetivo de codificar código de alta calidad basado en tres pilares. Diseño simple, fácil de probar y fácil de leer'
                ],
                lang: 'es',
            },
            speakers: [
                'jesus',
            ],
            schedule: 'Friday 09:30-11:30',
            track: '🇪🇸 Crafter 🇪🇸',
        }],
        ['workshop-crafter-es-02', {
            content: {
                title: 'Título del Taller',
                description: [
                    'Descripción de tu taller'
                ],
                lang: 'es',
            },
            speakers: [
                'tbd',
            ],
            schedule: 'Friday 12:00-14:00',
            track: '🇪🇸 Crafter 🇪🇸',
        }],
        ['workshop-crafter-es-03', {
            content: {
                title: 'Wake up, Neo: Primeros pasos en Developer eXperience',
                description: [
                    '¿Alguna vez has sentido que algo no iba bien, pero no sabrías decir el qué? El proyecto ha crecido. Funciona, pero… ¿a qué precio? Nadie entiende el sistema completo, añadir una feature sencilla es cada vez más difícil, y cada nuevo developer se adapta rápido… al dolor.',
                    'El enfoque que nos ha traído hasta aquí puede que no nos lleve más lejos, ¿y ahora qué? En esta charla veremos cómo dar nuestros primeros pasos hacia una mejor Developer eXperience: detectar fricciones, diseñar defensivamente, desmontar cultos, implicar a negocio... ',
                    'Todo ello usando el universo de The Matrix como excusa. Yo puedo mostrarte la puerta, cruzarla depende de ti.'
                ],
                lang: 'es',
            },
            speakers: [
                'berny',
            ],
            schedule: 'Friday 16:30-18:30',
            track: '🇪🇸 Crafter 🇪🇸',
        }],
        ['workshop-fullstack-01', {
            content: {
                title: 'Backend: Arquitectura Hexagonal según el libro',
                description: [
                    'Construyamos una pequeña aplicación siguiendo el libro "Hexagonal Architecture Explained" de Dr. Alistair Cockburn y Juan Manuel Garrido.',
                    'Descubre qué hace que este patrón sea excelente y cómo aplicarlo a tus proyectos.',
                    'Corrige las numerosas ideas erróneas sobre la Arquitectura Hexagonal y cómo evitarlas.',
                ],
                lang: 'es',
            },
            speakers: [
                'fran',
            ],
            schedule: 'Friday 9:30-11:30',
            track: 'FullStack',
        }],
        ['workshop-fullstack-02', {
            content: {
                title: 'Frontend: No Solo una Cara Bonita',
                description: [
                    'Construiremos una aplicación utilizando TanStack Query, para crear un frontend eficiente en la obtención de datos.',
                    'Juntos, navegaremos por las mejores prácticas en el desarrollo frontend para aplicaciones serias (y tontas) y descubriremos por qué los frontends modernos son mucho más que "solo una cara bonita".'
                ],
                lang: 'es',
            },
            speakers: [
                'anna',
            ],
            schedule: 'Friday 12:30-14:30',
            track: 'FullStack',
        }],
        ['workshop-fullstack-03', {
            content: {
                title: 'Devops: Despliegue Continuo en Kubernetes con GitOps y FluxCD',
                description: [
                    'Este taller está dirigido a proporcionar una experiencia práctica en la implementación de Despliegue Continuo en Kubernetes a través de un enfoque GitOps con FluxCD.',
                    'A lo largo de la sesión, se trabajará en la automatización del despliegue de aplicaciones dockerizadas, gestionando infraestructura y servicios de forma declarativa desde Git, y habilitando actualizaciones continuas que aseguren la entrega automatizada de nuevas versiones, sin afectar la disponibilidad del servicio.'
                ],
                lang: 'es',
            },
            speakers: [
                'tbd',
            ],
            schedule: 'Friday 16:30-18:30',
            track: 'FullStack',
        }],
        ['workshop-management-01', {
            content: {
                title: 'Título del Taller',
                description: [
                    'Descripción de tu taller'
                ],
                lang: 'es',
            },
            speakers: [
                'joseCarlos',
            ],
            schedule: 'Friday 09:30-11:30',
            track: 'Management',
        }],
        ['workshop-management-02', {
            content: {
                title: 'Título del Taller',
                description: [
                    'Descripción de tu taller'
                ],
                lang: 'es',
            },
            speakers: [
                'helder',
            ],
            schedule: 'Friday 12:00-14:00',
            track: 'Management',
        }],
        ['workshop-management-03', {
            content: {
                title: 'Título del Taller',
                description: [
                    'Descripción de tu taller'
                ],
                lang: 'es',
            },
            speakers: [
                'tbd',
            ],
            schedule: 'Friday 16:30-18:30',
            track: 'Management',
        }],
        ['talk-pulpito-01', {
            content: {
                title: 'Título de la Charla',
                description: [
                    'Descripción de tu charla'
                ],
                lang: 'es',
            },
            speakers: [
                'innatial',
            ],
            schedule: 'Friday 10:10-10:50',
            track: 'Pulpito',
        }],
        ['talk-pulpito-02', {
            content: {
                title: 'Título de la Charla',
                description: [
                    'Descripción de tu charla'
                ],
                lang: 'es',
            },
            speakers: [
                'paula',
                'gradiant',
            ],
            schedule: 'Friday 10:50-11:30',
            track: 'Pulpito',
        }],
        ['talk-pulpito-03', {
            content: {
                title: 'Título de la Charla',
                description: [
                    'Descripción de tu charla'
                ],
                lang: 'es',
            },
            speakers: [
                'jesus',
            ],
            schedule: 'Friday 12:00-12:40',
            track: 'Pulpito',
        }],
        ['talk-pulpito-04', {
            content: {
                title: 'Título de la Charla',
                description: [
                    'Descripción de tu charla'
                ],
                lang: 'es',
            },
            speakers: [
                'maryna',
                'crafters'
            ],
            schedule: 'Friday 12:40-13:20',
            track: 'Pulpito',
        }],
        ['talk-pulpito-05', {
            content: {
                title: 'Título de la Charla',
                description: [
                    'Descripción de tu charla'
                ],
                lang: 'es',
            },
            speakers: [
                'adria',
                'lambda'
            ],
            schedule: 'Friday 13:20-14:00',
            track: 'Pulpito',
        }],
        ['talk-pulpito-06', {
            content: {
                title: 'Título de la Charla',
                description: [
                    'Descripción de tu charla'
                ],
                lang: 'es',
            },
            speakers: [
                'tbd',
            ],
            schedule: 'Friday 16:00-16:40',
            track: 'Pulpito',
        }],
        ['talk-pulpito-07', {
            content: {
                title: 'Título de la Charla',
                description: [
                    'Descripción de tu charla'
                ],
                lang: 'es',
            },
            speakers: [
                'tbd',
            ],
            schedule: 'Friday 16:40-17:20',
            track: 'Pulpito',
        }],
        ['talk-pulpito-08', {
            content: {
                title: 'Título de la Charla',
                description: [
                    'Descripción de tu charla'
                ],
                lang: 'es',
            },
            speakers: [
                'grafana',
            ],
            schedule: 'Friday 17:30-18:00',
            track: 'Pulpito',
        }],
    ])
;
