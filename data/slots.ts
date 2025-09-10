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
                    'helder'
                ],
            content: {
                title: 'Testing: from mess to success',
                lang: 'en',
                description: [
                    'Many software teams invest heavily in testing, yet still face fragile test suites, long delivery times, and a lack of trust in their results. If your tests slow you down instead of giving you confidence, chances are your testing strategy is broken.' +
                    'In this talk, we’ll explore what it really means for a testing strategy to be “broken”, not only from a technical perspective but also from a business and leadership lens. We’ll use the Agile Testing Quadrant as a map to understand where tests belong, why strategies fail when they over-invest in one area, and what a balanced, value-driven approach looks like.'],
            },
            track: 'Main Day',
            schedule: 'Sat 10:00-10:40',
        }],
        ['talk-sat-02', {
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
            schedule: 'Sat 10:50-11:30',
        }],
        ['talk-sat-03', {
            speakers:
                [
                    'dorra'
                ],
            content: {
                title: 'Improving feature flags implementation to achieve flow\n',
                lang: 'en',
                description: ['You might be using feature flags in your projects and consider this technique indispensable. However, developers often face frustration when managing the myriad combinations of feature flags, especially as projects evolve. This complexity can make flags hard to maintain and even hated by developers. The code is full with invasive if/else statements, with no time to clean up obsolete feature flags.\n' +
                'In this talk, I will present alternatives to traditional feature flag. Depending on the context, we will explore solutions involving work organization, prioritization, and design techniques such as legacy management strategies (e.g., the strangler application pattern or branch by abstraction), circuit breakers, and even Domain-Driven Design.'],

            },
            track: 'Main Day',
            schedule: 'Sat 12:30-13:10',
        }],
        ['talk-sat-04', {
            speakers:
                [
                    'susanne'
                ],
            content: {
                title: 'Evolving a Legacy System with Architecture for Flow\n',
                lang: 'en',
                description: [
                    'Legacy systems are often double-edged: They contain years of accumulated business knowledge and value and they pay your salaries. But at the same time, they can feel like a burden, slowing down innovation and making organizations less adaptive to change.',
                    'A full rewrite or big-bang reorganization is rarely an option. So how do we evolve a legacy system incrementally without breaking what works?',
                    'This talk explores a pragmatic approach to optimizing legacy systems for flow. It introduces Architecture for Flow, a structured yet flexible approach that integrates Wardley Mapping, Domain-Driven Design (DDD), and Team Topologies. This approach focuses on identifying suitable streams of change, modularizing step by step, and evolving teams alongside the system; ensuring sustainable, low-risk transition from the status quo to an envisioned future.'
                ],

            },
            track: 'Main Day',
            schedule: 'Sat 13:20-14:00',
        }],
        ['talk-sat-05', {
            speakers:
                [
                    'clare'
                ],
            content: {
                title: 'Let\'s Stop Making Each Other Feel Stupid',
                lang: 'en',
                description: [
                    'We work in an industry where we have to prove how much we know. And yet, there are a million different paths through software development. On a day-to-day level we have to specialise on one task at a time. The skills we don’t need now are necessarily forgotten, or delegated to someone else. And that’s fine. \n' +
                    'Instead of judging people for their ignorance, let’s help them to feel excited about all the new things they’ll discover. Instead of saying “How come you don’t know that?” let’s say “Fantastic! Lucky you. You get to learn something. What can I do to help?”'
                ],

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
                title: 'Software Craftsmanship: Quality vs Productivity',
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
                title: 'Módulo 1. Aprende las formas y reglas fundamentales de TDD',
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
                title: 'Módulo 2. Dale cuerpo y ritmo a tu desarrollo con estrategias de TDD',
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
                title: 'Módulo 3. Ponlo todo en práctica con una kata',
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
        ['workshop-crafter-en-03', {
            content: {
                title: 'Optimizing for a fast flow of value with the Architecture for Flow Canvas',
                description: [
                    'In today’s fast paced business environment, organizations have to continuously adapt and evolve in order to remain competitive and stay relevant in the market To be amenable to change organizations need to design, build, and evolve adaptive, socio-technical systems that are optimized for a fast flow of value and constant feedback. \n' +
                    'In this interactive 2-hour workshop, you’ll get hands-on experience with the Architecture for Flow Canvas - a lightweight yet powerful tool that combines insights from Wardley Mapping, Domain-Driven Design, and Team Topologies into a holistic approach.'
                ],
                lang: 'en',
            },
            speakers: [
                'susanne',
            ],
            schedule: 'Friday 16:00-18:00',
            track: '🇬🇧 Crafter 🇬🇧',
        }],
        ['workshop-crafter-en-01', {
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
            schedule: 'Friday 09:30-11:30',
            track: '🇬🇧 Crafter 🇬🇧',
        }],
        ['workshop-crafter-en-02', {
            content: {
                title: '“Lift-up conditional” – The magical refactoring',
                description: [
                    'The first time I saw this powerful refactoring technique demonstrated, I was confused. It seemed like some dark magic indeed. But then I tried a practical example for myself, got my head around it and fell in love. “Lift up conditional” allows you to take messy code filled with nested conditionals and repetitious code, and detangle it into something simple and beautiful that will suddenly be easier to understand and cheaper to maintain. Join me for a hands-on example and your own moment of revelation.'
                ],
                lang: 'en',
            },
            speakers: [
                'clare',
            ],
            schedule: 'Friday 12:00-14:00',
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
                title: 'Arquitectura Hexagonal según el libro',
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
            schedule: 'Friday 16:00-18:00',
            track: '🇪🇸 Crafter 🇪🇸',
        }],
        ['workshop-fullstack-01', {
            content: {
                title: 'Backend: Entendiendo la Arquitectura Hexagonal',
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
                'manuel',
                'juan'
            ],
            schedule: 'Friday 16:00-18:00',
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
                title: 'Crafter Manager, el juego',
                description: [
                    'Un juego serio para liderar como un artesano.\n' +
                    '¿Y si liderar bien fuera tan desafiante (y tan satisfactorio) como escribir buen código?\n' +
                    'En este workshop vivirás un juego de simulación donde formarás parte de un equipo técnico enfrentando decisiones difíciles en un entorno en constante cambio: cambios de prioridades, presión de negocio, dilemas éticos, conflictos humanos y tensiones entre velocidad y calidad.\n' +
                    'Si alguna vez te nombraron manager como en la Edad Media se nombraban caballeros con una palmada en la espalda y cero entrenamiento, este workshop es para ti.\n' +
                    'Basado en principios de Software Craftsmanship y liderazgo ágil, este taller está diseñado para desarrolladores, tech leads y managers que quieran aumentar su impacto sin perder el alma técnica por el camino.\n' +
                    'Decidirás, lanzarás los dados del caos, y descubrirás que liderar bien también es una forma de arte.'
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
                'ana',
            ],
            schedule: 'Friday 16:00-18:00',
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
                title: 'No entiendo tus corchetes, pero sí tus necesidades',
                description: [
                    'Cómo sobrevivir (y disfrutar) en un mundo tech sin ser técnica. En esta charla hablaré de como ayuda una visión de gestión de talento a la gestión de equipos y proyectos'
                ],
                lang: 'es',
            },
            speakers: [
                'paula'
            ],
            schedule: 'Friday 10:50-11:30',
            track: 'Pulpito',
        }],
        ['talk-pulpito-03', {
            content: {
                title: 'The Lazy Dev’s Guide to Beautiful APIs',
                description: [
                    'Como diseñar APIs de las que puedas enorgullecerte.'
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
                title: 'Chat with Your Data: When Your Files Start Talking Back',
                description: [
                    'What if you could ask questions about your own files, like PDFs, meeting notes, or research papers, and get clear, accurate answers using AI? We’ll explore how a chatbot can respond based on the actual content of your documents, not just what it learned during training. You’ll see how vector search, document embeddings, and retrieval make this possible. We’ll look at real use cases that show how this approach can save time and make information instantly accessible.'
                ],
                lang: 'es',
            },
            speakers: [
                'maryna'
            ],
            schedule: 'Friday 12:40-13:20',
            track: 'Pulpito',
        }],
        ['talk-pulpito-05', {
            content: {
                title: 'La muerte del middle manager, el ascenso del ingeniero poliédrico',
                description: [
                    'TBD'
                ],
                lang: 'es',
            },
            speakers: [
                'adria'
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
                'joseCarlos',
            ],
            schedule: 'Friday 16:00-16:40',
            track: 'Pulpito',
        }],
        ['talk-pulpito-07', {
            content: {
                title: 'OpenTelemetry eBPF Profiler',
                description: [
                    'Descripción de tu charla'
                ],
                lang: 'es',
            },
            speakers: [
                'elastic',
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
                'nadia',
            ],
            schedule: 'Friday 17:30-18:00',
            track: 'Pulpito',
        }],
    ])
;
