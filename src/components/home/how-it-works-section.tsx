import clsx from "clsx"

export function HowItWorksSection() {
    const steps = [
        {
            number: "1",
            title: "Crie seu Perfil",
            description: "Configure seu perfil com seus jogos favoritos e estilo de jogo.",
            color: "primary",
        },
        {
            number: "2",
            title: "Encontre Matches",
            description: "Nosso algoritmo encontra jogadores compatíveis com seu nível e preferências.",
            color: "accent",
        },
        {
            number: "3",
            title: "Jogue Junto",
            description: "Conecte-se via chat, Discord ou sua plataforma favorita e domine os jogos!",
            color: "primary-light",
        },
    ]

    return (
        <section id="how-it-works" className="py-20 bg-background text-text-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 tracking-wider">
                        COMO <span className="text-accent">FUNCIONA</span>
                    </h2>
                    <p className="font-inter text-lg text-text-light/70 max-w-2xl mx-auto">
                        Em apenas 3 passos simples você estará jogando com sua nova equipe
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center">
                            <div
                                className={clsx(
                                    `bg-${step.color}/20 text-${step.color}`,
                                    "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold font-orbitron glow"
                                )}
                            >
                                {step.number}
                            </div>
                            <h3 className="font-poppins text-xl font-semibold mb-3">{step.title}</h3>
                            <p className="font-inter text-sm text-text-light/70">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
