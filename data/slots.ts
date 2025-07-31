import type {Slot} from "~/model";

export const slots: Map<string, Slot> = new Map([
        ['openspace', {
            speakers: [
                'ana'
            ],
            content: {
                title: 'Open Space',
                description: [
                    'An open space is a non-conference format. No agenda, no predefined topics. Attendants decide the agenda at the start, using a collaborative process. No topic is banned.',
                    'It is an opportunity to explore new perspectives on whatever topic matters to you. Have you ever tried to empathize with someone on an issue you were sure you fully understood?',
                    'In this openspace, participants will propose topics that will later be voted on by everyone. Once the topics of interest are defined, we will dive into enriching discussions, allowing every voice to be heard. The idea is to learn collectively, in an environment of respect and collaboration.'
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
                title: 'Talk Title',
                lang: 'en',
                description: ['TBD'],

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
                title: 'Your testing strategy is broken- let’s fix it!',
                lang: 'en',
                description: ['Testing is essential for delivering reliable software, but too often, teams fall into the trap of testing everything and testing it poorly. Endless unit tests for trivial code create a false sense of security while ignoring the areas that matter most—like how your system behaves when it really counts. This session takes a hard look at what makes a good testing strategy. Instead of chasing meaningless metrics like 100% coverage, learn how to test behaviors, focus on integration points, and embrace a leaner, smarter approach to quality assurance. Your users don’t care about how many tests you’ve written—they care about software that works. This is your guide to writing fewer tests, but better ones, that actually make a difference.'],
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
                    'lorena','ben'
                ],
            content: {
                title: 'Module 1',
                lang: 'es',
                description:
                    [
                        'A full-day workshop for the introduction or improvement of agile technical practices.',
                        'Including TDD, refactoring, pair programming, code reviews, etc.',
                    ],
            },
            track: 'Crafter Starter Workshop',
            schedule: 'Thursday 9:30-11:30',
        }],
        ['workshop-newbie-02', {
            speakers:
                [
                    'lorena','ben'
                ],
            content: {
                title: 'Module 2',
                lang: 'es',
                description: ['...'],
            },
            track: 'Crafter Starter Workshop',
            schedule: 'Thursday 9:30-11:30',
        }],
        ['workshop-newbie-03', {
            speakers:
                [
                    'lorena','ben'
                ],
            content: {
                title: 'Module 3',
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
                title: 'Module 1. State of the AI',
                lang: 'es',
                description: [
                    'IA Tools ecosystem'
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
                title: 'Building IA products',
                lang: 'es',
                description: ['TBD'],
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
                title: 'Programming kata, helped with IA',
                lang: 'es',
                description: ['TBD'],
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
                title: 'Don\'t Let Your Code Skip Leg Day - Train your coding skills like your gym routine',
                description: [
                    'Developing well crafted code is not an unicorn, is something easy to achieve, but requires discipline and commitment. The workshop will show tips and examples of how to achieve the goal of coding high quality code based on three pillars. Simple Design, easy to test and easy to read'
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
                title: 'Workshop Title',
                description: [
                    'Description of your workshop'
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
                    '¿Alguna vez has sentido que algo no iba bien, pero no sabrías decir el qué? El proyecto ha crecido. Funciona, pero… ¿a qué precio? Nadie entiende el sistema completo, añadir una feature sencilla es cada vez más difícil, y cada nuevo developer se adapta rápido… al dolor. El enfoque que nos ha traído hasta aquí puede que no nos lleve más lejos, ¿y ahora qué? En esta charla veremos cómo dar nuestros primeros pasos hacia una mejor Developer eXperience: detectar fricciones, diseñar defensivamente, desmontar cultos, implicar a negocio... Todo ello usando el universo de The Matrix como excusa. Yo puedo mostrarte la puerta, cruzarla depende de ti.'
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
                title: 'Backend: Hexagonal Architecture by the Book',
                description: [
                    'Let\'s build a little application by following the book "Hexagonal Architecture Explained" by Dr. Alistair Cockburn and Juan Manuel Garrido.',
                    'Discover what makes this pattern great and how to apply it to your projects.',
                    'Fix the numerous misconceptions about Hexagonal Architecture and how to avoid them.',
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
                title: 'Frontend: TBD',
                description: [
                    'TBD'
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
                title: 'Devops: Continuous Deployment in Kubernetes with GitOps and FluxCD',
                description: [
                    'This workshop is aimed at providing a practical experience in the implementation of Continuous Deployment in Kubernetes through a GitOps approach with FluxCD.',
                    'Throughout the session, work will be done on automating the deployment of dockerized applications, managing infrastructure and services in a declarative way from Git, and enabling continuous updates that ensure the automated delivery of new versions, without affecting the availability of the service.'
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
                title: 'Workshop Title',
                description: [
                    'Description of your workshop'
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
                title: 'Workshop Title',
                description: [
                    'Description of your workshop'
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
                title: 'Workshop Title',
                description: [
                    'Description of your workshop'
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
                title: 'Talk Title',
                description: [
                    'Description of your talk'
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
                title: 'Talk Title',
                description: [
                    'Description of your talk'
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
                title: 'Talk Title',
                description: [
                    'Description of your talk'
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
                title: 'Talk Title',
                description: [
                    'Description of your talk'
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
                title: 'Talk Title',
                description: [
                    'Description of your talk'
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
                title: 'Talk Title',
                description: [
                    'Description of your talk'
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
                title: 'Talk Title',
                description: [
                    'Description of your talk'
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
                title: 'Talk Title',
                description: [
                    'Description of your talk'
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

