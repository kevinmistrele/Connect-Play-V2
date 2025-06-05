"use client"

import { useState } from "react"
import { X, MessageCircle, Gamepad2, Heart, Sparkles, Zap } from "lucide-react"
import { CntButton } from "@/components/ui/button"

interface Player {
    id: number
    name: string
    age: number
    level: number
    mainGame: string
    rank: string
    avatar: string
    description: string
}

interface MatchModalProps {
    player: Player
    onClose: () => void
}

export function MatchModal({ player, onClose }: MatchModalProps) {
    const [imageError, setImageError] = useState(false)

    const handleStartChat = () => {
        console.log(`Iniciando chat com ${player.name}`)
        onClose()
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" onClick={onClose} />

            {/* Modal */}
            <div className="relative bg-card-bg rounded-2xl shadow-2xl border border-primary/30 overflow-hidden max-w-sm w-full mx-4 animate-bounce-in">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 text-muted-foreground hover:text-text-light transition-colors bg-background/80 rounded-full p-1"
                >
                    <X className="h-4 w-4" />
                </button>

                {/* Success Header */}
                <div className="bg-gradient-to-br from-primary via-primary-light to-accent p-8 text-center text-white relative overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse"></div>
                    <Sparkles className="absolute top-2 left-4 h-4 w-4 text-white/60 animate-pulse" />
                    <Sparkles className="absolute top-6 right-6 h-3 w-3 text-white/40 animate-pulse delay-300" />
                    <Sparkles className="absolute bottom-4 left-6 h-5 w-5 text-white/50 animate-pulse delay-700" />

                    <div className="relative z-10">
                        <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 animate-pulse">
                            <Heart className="h-10 w-10 text-white" />
                        </div>
                        <h2 className="font-orbitron text-2xl font-bold mb-2">É UM MATCH!</h2>
                        <p className="text-white/90 text-sm">Vocês se curtiram mutuamente 🎮</p>
                    </div>
                </div>

                {/* Player Info */}
                <div className="p-6 text-center space-y-6">
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-primary shadow-lg">
                                <img
                                    src={imageError ? "/placeholder.svg?height=96&width=96" : player.avatar}
                                    alt={player.name}
                                    width={96}
                                    height={96}
                                    className="object-cover w-full h-full"
                                    onError={() => setImageError(true)}
                                />

                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full p-1">
                                <Zap className="h-3 w-3" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-text-light text-xl font-orbitron">{player.name}</h3>
                        <div className="flex items-center justify-center gap-2 text-primary text-sm mt-1">
                            <Gamepad2 className="h-4 w-4" />
                            <span className="font-poppins">
                {player.mainGame} • {player.rank}
              </span>
                        </div>
                        <div className="flex items-center justify-center gap-1 text-accent text-xs mt-1">
                            <Zap className="h-3 w-3" />
                            <span>Nível {player.level}</span>
                        </div>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Agora vocês podem conversar e marcar uma partida juntos! 🚀
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 pt-2 w-full">
                        <CntButton variant="outline" onClick={onClose} className="sm:flex-1 w-full sm:w-auto border-border hover:bg-muted/20">
                            Continuar procurando
                        </CntButton>
                        <CntButton
                            onClick={handleStartChat}
                            className="sm:flex-1 w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                        >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Conversar
                        </CntButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
