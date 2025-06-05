"use client"

import { useState } from "react"
import { MatchHeader } from "@/components/match/match-header"
import { PlayerCard } from "@/components/match/player-card"
import { MatchActions } from "@/components/match/match-actions"
import { MatchModal } from "@/components/match/match-modal"

// Mock data para demonstração
const mockPlayers = [
    {
        id: 1,
        name: "GamerPro2024",
        age: 23,
        level: 85,
        mainGame: "Valorant",
        rank: "Immortal 2",
        availability: "Noites e fins de semana",
        avatar: "/placeholder.svg?height=400&width=400",
        description:
            "Procuro duo para subir rank. Jogo principalmente de Duelist, mas posso adaptar. Comunicação boa e sem tilt!",
        games: ["Valorant", "CS2", "Apex Legends"],
        playstyle: "Competitivo",
        region: "Brasil",
        languages: ["Português", "Inglês"],
        winRate: 68,
        hoursPlayed: 1250,
        preferences: ["Ranked", "Comunicação por voz", "Sem tilt"],
    },
    {
        id: 2,
        name: "QueenOfGames",
        age: 19,
        level: 72,
        mainGame: "League of Legends",
        rank: "Diamante 1",
        availability: "Tardes e noites",
        avatar: "/placeholder.svg?height=400&width=400",
        description: "Support main procurando ADC consistente. Gosto de jogar em equipe e sempre positiva! 💜",
        games: ["League of Legends", "Valorant", "Overwatch 2"],
        playstyle: "Estratégico",
        region: "Brasil",
        languages: ["Português"],
        winRate: 72,
        hoursPlayed: 890,
        preferences: ["Teamwork", "Estratégia", "Diversão"],
    },
    {
        id: 3,
        name: "TechNinja",
        age: 26,
        level: 95,
        mainGame: "CS2",
        rank: "Global Elite",
        availability: "Madrugadas",
        avatar: "/placeholder.svg?height=400&width=400",
        description: "IGL experiente procura time fixo. Foco em táticas e comunicação clara. Vamos dominar juntos!",
        games: ["CS2", "Valorant", "Rainbow Six"],
        playstyle: "Tático",
        region: "Brasil",
        languages: ["Português", "Inglês", "Espanhol"],
        winRate: 75,
        hoursPlayed: 2100,
        preferences: ["Táticas", "IGL", "Competitivo"],
    },
    {
        id: 4,
        name: "CasualGamer",
        age: 21,
        level: 45,
        mainGame: "Rocket League",
        rank: "Diamante 3",
        availability: "Fins de semana",
        avatar: "/placeholder.svg?height=400&width=400",
        description: "Gamer casual que ama se divertir! Procuro pessoas para jogar sem pressão e dar muitas risadas 😄",
        games: ["Rocket League", "Fall Guys", "Among Us"],
        playstyle: "Casual",
        region: "Brasil",
        languages: ["Português"],
        winRate: 55,
        hoursPlayed: 650,
        preferences: ["Diversão", "Casual", "Sem pressão"],
    },
]

export default function MatchPage() {
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
    const [showMatchModal, setShowMatchModal] = useState(false)
    const [matchedPlayer, setMatchedPlayer] = useState<(typeof mockPlayers)[0] | null>(null)
    const [cardAnimation, setCardAnimation] = useState<"none" | "like" | "pass">("none")
    const [isAnimating, setIsAnimating] = useState(false)

    const currentPlayer = mockPlayers[currentPlayerIndex]

    const handleLike = () => {
        if (isAnimating) return

        setIsAnimating(true)
        setCardAnimation("like")

        // Simular match (40% de chance)
        const isMatch = Math.random() > 0.6

        setTimeout(() => {
            if (isMatch) {
                setMatchedPlayer(currentPlayer)
                setShowMatchModal(true)
            }
            nextPlayer()
            setIsAnimating(false)
        }, 600)
    }

    const handlePass = () => {
        if (isAnimating) return

        setIsAnimating(true)
        setCardAnimation("pass")

        setTimeout(() => {
            nextPlayer()
            setIsAnimating(false)
        }, 600)
    }

    const nextPlayer = () => {
        setCardAnimation("none")
        if (currentPlayerIndex < mockPlayers.length - 1) {
            setCurrentPlayerIndex(currentPlayerIndex + 1)
        } else {
            setCurrentPlayerIndex(0)
        }
    }

    const handleCloseMatchModal = () => {
        setShowMatchModal(false)
        setMatchedPlayer(null)
    }

    return (
        <div className="min-h-screen bg-background">
            <MatchHeader />

            <main className="container mx-auto px-4 py-6 max-w-md">
                <div className="flex flex-col items-center space-y-6">
                    {/* Player Card */}
                    <div className="w-full relative">
                        <PlayerCard player={currentPlayer} animation={cardAnimation} />
                    </div>

                    {/* Match Actions */}
                    <MatchActions onLike={handleLike} onPass={handlePass} disabled={isAnimating} />

                    {/* Stats */}
                    <div className="text-center text-muted-foreground text-sm">
                        <p>
                            Jogador {currentPlayerIndex + 1} de {mockPlayers.length}
                        </p>
                        <p className="text-xs mt-1">Deslize ou use os botões para encontrar seu duo!</p>
                    </div>
                </div>
            </main>

            {/* Match Modal */}
            {showMatchModal && matchedPlayer && <MatchModal player={matchedPlayer} onClose={handleCloseMatchModal} />}
        </div>
    )
}
