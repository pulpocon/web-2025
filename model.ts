export type Speaker = {
    name: string
    position: string
    company: string
    bio: string
    image: string
    social?: {
        linkedin?: string
        twitter?: string
    }
}

export type Content = {
    lang: string
    title: string
    description: string[]
}

export type Slot = {
    speakers: SpeakerID[]
    content: Content
    track: string
    schedule: string
}

export type SpeakerID = string
