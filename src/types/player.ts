export interface Player {
    id: number
    name: string
    age: number
    level: number
    mainGame: string
    rank: string
    availability: string
    avatar: string
    description: string
    games: string[]
    playstyle: string
    region: string
    languages: string[]
    winRate: number
    hoursPlayed: number
    preferences: string[]
}

export interface PlayerCardProps {
    player: Player
    animation: "none" | "like" | "pass"
}
