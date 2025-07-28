import type {Slot} from "~/model";

export const slots: Map<string, Slot> = new Map([
        ['openspace', {
            speakers: [
                'tbd'
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
                title: 'Workshop Title',
                description: [
                    'Description of your workshop'
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
                title: 'Don\'t Let Your Code Skip Leg Day',
                description: [
                    '🏋️ Train your coding skills like your gym routine'
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
                title: 'Workshop Title',
                description: [
                    'Description of your workshop'
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
                'tbd',
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

