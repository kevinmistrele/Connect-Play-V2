import {
    Users,
    MessageCircle,
    Zap,
    Shield,
    Trophy,
    Gamepad2,
} from "lucide-react"
import { FeatureCard } from "./feature-card"

export function FeaturesSection() {
    const features = [
        {
            icon: Users,
            title: "Match Inteligente",
            description:
                "Algoritmo avançado que conecta jogadores com base em skill, estilo de jogo e disponibilidade.",
            iconColor: "primary" as const,
        },
        {
            icon: MessageCircle,
            title: "Chat Integrado",
            description:
                "Sistema de chat em tempo real com suporte a voz e vídeo para coordenação perfeita.",
            iconColor: "accent" as const,
        },
        {
            icon: Zap,
            title: "Integração Discord",
            description:
                "Conecte automaticamente com Discord e outras plataformas para uma experiência fluida.",
            iconColor: "primary-light" as const,
        },
        {
            icon: Shield,
            title: "Sistema Anti-Tóxico",
            description:
                "Moderação automática e sistema de reputação para manter a comunidade saudável.",
            iconColor: "accent" as const,
        },
        {
            icon: Trophy,
            title: "Ranking & Stats",
            description:
                "Acompanhe seu progresso, conquistas e estatísticas detalhadas de performance.",
            iconColor: "primary" as const,
        },
        {
            icon: Gamepad2,
            title: "Multi-Plataforma",
            description:
                "Suporte para PC, Console e Mobile. Jogue onde quiser, quando quiser.",
            iconColor: "error" as const,
        },
    ]

    return (
        <section id="features" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 tracking-wider text-text-light">
                        RECURSOS <span className="text-primary">ÉPICOS</span>
                    </h2>
                    <p className="font-inter text-lg text-text-light/80 max-w-2xl mx-auto">
                        Tudo que você precisa para encontrar os melhores parceiros de jogo
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    )
}
