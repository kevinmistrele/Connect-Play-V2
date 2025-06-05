"use client"

import { useState } from "react"
import { Clock, MapPin, Trophy, Gamepad2, Users, Star, Zap, Target } from "lucide-react"
import { PlayerCardProps } from "@/types/player"

export function PlayerCard({ player, animation = "none" }: PlayerCardProps) {
    const [imageError, setImageError] = useState(false)

    const animationClasses = {
        none: "",
        like: "animate-slide-right",
        pass: "animate-slide-left",
    }

    const getPlaystyleColor = (playstyle: string) => {
        switch (playstyle.toLowerCase()) {
            case "competitivo":
                return "bg-destructive/20 text-destructive border-destructive/30"
            case "casual":
                return "bg-accent/20 text-accent border-accent/30"
            case "estratégico":
                return "bg-primary/20 text-primary border-primary/30"
            case "tático":
                return "bg-muted/20 text-muted-foreground border-muted/30"
            default:
                return "bg-primary/20 text-primary border-primary/30"
        }
    }

    return (
        <div
            className={`bg-card-bg rounded-2xl shadow-2xl border border-border overflow-hidden max-w-sm mx-auto transition-all duration-600 ${animationClasses[animation]}`}
        >
            {/* Avatar Section */}
            <div className="relative h-80 bg-gradient-to-br from-primary/20 via-accent/10 to-primary-light/20">
                <img
                    src={imageError ? "/placeholder.svg?height=400&width=400" : player.avatar}
                    alt={player.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={() => setImageError(true)}
                />

                {/* Level Badge */}
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Zap className="h-3 w-3" />
                    Nv. {player.level}
                </div>

                {/* Rank Badge */}
                <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {player.rank}
                </div>

                {/* Win Rate */}
                <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm text-text-light px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="h-3 w-3 text-accent" />
                    {player.winRate}%
                </div>

                {/* Playstyle */}
                <div
                    className={`absolute bottom-4 left-4 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold border ${getPlaystyleColor(player.playstyle)}`}
                >
                    {player.playstyle}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                {/* Name and Age */}
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-text-light font-orbitron">{player.name}</h2>
                    <span className="text-muted-foreground text-sm">{player.age} anos</span>
                </div>

                {/* Main Game */}
                <div className="flex items-center gap-2 text-primary">
                    <Gamepad2 className="h-4 w-4" />
                    <span className="font-semibold font-poppins">{player.mainGame}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed font-inter">{player.description}</p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span className="text-xs">{player.availability}</span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span className="text-xs">{player.region}</span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Trophy className="h-3 w-3" />
                        <span className="text-xs">{player.hoursPlayed}h jogadas</span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-3 w-3" />
                        <span className="text-xs">{player.languages.join(", ")}</span>
                    </div>
                </div>

                {/* Games */}
                <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-text-light font-poppins">Jogos:</h4>
                    <div className="flex flex-wrap gap-2">
                        {player.games.map((game, index) => (
                            <span
                                key={index}
                                className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium border border-primary/20"
                            >
                {game}
              </span>
                        ))}
                    </div>
                </div>

                {/* Preferences */}
                <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-text-light font-poppins flex items-center gap-1">
                        <Target className="h-3 w-3" />
                        Preferências:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {player.preferences.map((preference, index) => (
                            <span
                                key={index}
                                className="bg-accent/10 text-accent px-2 py-1 rounded-md text-xs font-medium border border-accent/20"
                            >
                {preference}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
