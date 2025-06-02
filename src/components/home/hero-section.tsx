import { Gamepad2, Play } from "lucide-react"
import { CntButton } from "@/components/ui/button"

export function HeroSection() {
    return (
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-secondary/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-text-light">
                    <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wider">
                        ENCONTRE SEU
                        <span className="block text-primary">PARCEIRO</span>
                        <span className="block text-accent">DE JOGO</span>
                    </h1>

                    <p className="font-inter text-lg md:text-xl text-text-light/70 mb-10 max-w-3xl mx-auto">
                        A plataforma definitiva para conectar jogadores. Encontre sua dupla perfeita, forme equipes completas e
                        domine os rankings juntos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
                        <CntButton className="bg-primary hover:bg-primary-light text-white font-inter px-6 py-3 text-base md:text-lg rounded-md flex items-center gap-2 transition-all">
                            <Play className="h-5 w-5" />
                            Começar Agora
                        </CntButton>
                        <CntButton variant="outline" className="border-accent text-accent hover:bg-accent/10 font-inter px-6 py-3 text-base md:text-lg rounded-md flex items-center gap-2 transition-all">
                            <Gamepad2 className="h-5 w-5" />
                            Ver Demo
                        </CntButton>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                            <div className="text-3xl font-bold text-primary mb-2 font-orbitron">50K+</div>
                            <div className="font-inter text-sm text-text-light/70">Jogadores Ativos</div>
                        </div>
                        <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                            <div className="text-3xl font-bold text-accent mb-2 font-orbitron">25K+</div>
                            <div className="font-inter text-sm text-text-light/70">Matches Realizados</div>
                        </div>
                        <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                            <div className="text-3xl font-bold text-primary-light mb-2 font-orbitron">100+</div>
                            <div className="font-inter text-sm text-text-light/70">Jogos Suportados</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
