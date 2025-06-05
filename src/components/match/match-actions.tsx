"use client"

import { Heart, X, Sparkles } from "lucide-react"
import { CntButton } from "@/components/ui/button"

interface MatchActionsProps {
    onLike: () => void
    onPass: () => void
    disabled?: boolean
}

export function MatchActions({ onLike, onPass, disabled = false }: MatchActionsProps) {
    return (
        <div className="flex items-center justify-center gap-8">
            {/* Pass Button */}
            <CntButton
                variant="outline"
                size="icon"
                onClick={onPass}
                disabled={disabled}
                className="h-16 w-16 rounded-full border-2 border-destructive/50 text-destructive hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:hover:scale-100"
            >
                <X className="h-7 w-7" />
            </CntButton>

            {/* Super Like Button (opcional) */}
            <CntButton
                variant="outline"
                size="icon"
                onClick={onLike}
                disabled={disabled}
                className="h-12 w-12 rounded-full border-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:hover:scale-100"
            >
                <Sparkles className="h-5 w-5" />
            </CntButton>

            {/* Like Button */}
            <CntButton
                variant="outline"
                size="icon"
                onClick={onLike}
                disabled={disabled}
                className="h-18 w-18 rounded-full border-2 border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:hover:scale-100 p-5"
            >
                <Heart className="h-8 w-8" />
            </CntButton>
        </div>
    )
}
