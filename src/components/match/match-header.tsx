"use client"

import { MessageCircle, Settings, User, Zap } from "lucide-react"
import { CntButton } from "@/components/ui/button"

export function MatchHeader() {
  const handleNavigation = (path: string) => {
    console.log(`Navegando para: ${path}`)
  }

  return (
    <header className="bg-card-bg border-b border-border sticky top-0 z-40 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavigation("/")} className="flex items-center space-x-2">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              <h1 className="font-orbitron text-xl font-bold text-primary tracking-wider">
                CONNECT<span className="text-accent">PLAY</span>
              </h1>
            </div>
          </button>

          {/* Navigation */}
          <div className="flex items-center space-x-2">
            <CntButton
              variant="ghost"
              size="icon"
              onClick={() => handleNavigation("/profile")}
              className="text-muted-foreground hover:text-text-light hover:bg-primary/10"
            >
              <User className="h-5 w-5" />
            </CntButton>

            <CntButton
              variant="ghost"
              size="icon"
              onClick={() => handleNavigation("/chat")}
              className="text-muted-foreground hover:text-text-light hover:bg-accent/10 relative"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                3
              </span>
            </CntButton>

            <CntButton
              variant="ghost"
              size="icon"
              onClick={() => handleNavigation("/settings")}
              className="text-muted-foreground hover:text-text-light hover:bg-primary/10"
            >
              <Settings className="h-5 w-5" />
            </CntButton>
          </div>
        </div>
      </div>
    </header>
  )
}
