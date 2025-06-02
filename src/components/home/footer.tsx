export function Footer() {
    const footerSections = [
        {
            title: "Produto",
            links: ["Recursos", "Preços", "API"],
        },
        {
            title: "Comunidade",
            links: ["Discord", "Reddit", "Twitter"],
        },
        {
            title: "Suporte",
            links: ["Central de Ajuda", "Contato", "Status"],
        },
    ]

    return (
        <footer className="bg-secondary py-12 border-t border-primary/20 text-text-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div>
                        <h3 className="font-orbitron text-xl font-bold text-primary mb-4 tracking-wider">
                            CONNECT<span className="text-accent">PLAY</span>
                        </h3>
                        <p className="font-inter text-sm text-text-light/70">
                            A plataforma que conecta jogadores ao redor do mundo.
                        </p>
                    </div>

                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h4 className="font-poppins font-semibold text-base mb-4">{section.title}</h4>
                            <ul className="space-y-2 text-sm">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href="#"
                                            className="text-text-light/60 hover:text-primary-light transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-primary/20 mt-12 pt-6 text-center">
                    <p className="font-inter text-sm text-text-light/50">
                        © 2025 ConnectPlay. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
