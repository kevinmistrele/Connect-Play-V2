"use client"

import { CntButton } from "@/components/ui/button";
import {useModal} from "@/providers/modal-context.tsx";


export function Header() {
    const { openModal } = useModal();

    return (
        <header className="bg-secondary/80 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <a href="/" className="text-primary hover:text-primary-light transition-colors">
                        <h1 className="font-orbitron text-2xl font-bold tracking-wider">
                            CONNECT<span className="text-accent">PLAY</span>
                        </h1>
                    </a>

                    {/* Menu */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#features" className="font-inter text-text-light hover:text-primary-light transition-colors">
                            Recursos
                        </a>
                        <a href="#how-it-works" className="font-inter text-text-light hover:text-primary-light transition-colors">
                            Como Funciona
                        </a>
                        <a href="#games" className="font-inter text-text-light hover:text-primary-light transition-colors">
                            Jogos
                        </a>
                        <a href="#community" className="font-inter text-text-light hover:text-primary-light transition-colors">
                            Comunidade
                        </a>
                    </nav>

                    {/* Ações */}
                    <div className="flex items-center space-x-4">
                        <CntButton variant="outline" size="sm" onClick={() => openModal("login")}>
                            Login
                        </CntButton>
                        <CntButton variant="primary" size="sm" onClick={() => openModal("register")}>
                            Cadastrar
                        </CntButton>
                    </div>
                </div>
            </div>
        </header>
    );
}
