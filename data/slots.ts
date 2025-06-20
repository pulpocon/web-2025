import type {Slot} from "~/model";

export const slots: Map<string, Slot> = new Map([
        ['talk-sat-02', {
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
        ['workshop-backend-01', {
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
            schedule: 'Friday 09:30-11:30',
            track: 'Backend',
        }],
        ['workshop-backend-02', {
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
            track: 'Backend',
        }]
    ])
;

