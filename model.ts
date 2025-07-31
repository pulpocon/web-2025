export type Speaker = {
    name: string
    position: string
    company: string
    country?: string
    bio: string
    image: string
    show: boolean
    social?: {
        linkedin?: string
        twitter?: string
        website?: string
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
