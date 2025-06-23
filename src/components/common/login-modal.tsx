"use client"

import { useState } from "react"
import { Eye, EyeOff, X } from "lucide-react"
import { CntButton } from "@/components/ui/button"
import { CntInput } from "@/components/ui/input"
import { CntCheckbox } from "@/components/ui/checkbox"

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
    onSwitchToRegister: () => void
}

export function LoginModal({ isOpen, onClose, onSwitchToRegister }: LoginModalProps) {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Login submitted:", formData)
        alert("Login realizado com sucesso! (Demo)")
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative w-full max-w-4xl bg-card/95 backdrop-blur-md rounded-2xl shadow-2xl border border-primary/20 overflow-hidden">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 text-muted-foreground hover:text-primary transition-colors"
                >
                    <X className="h-5 w-5" />
                </button>

                <div className="flex min-h-[500px]">
                    {/* Formulário */}
                    <div className="flex-1 p-8 lg:p-12">
                        <div className="max-w-md mx-auto space-y-6">
                            <div className="text-center">
                                <h1 className="font-orbitron text-2xl font-bold text-primary tracking-wider mb-2">
                                    CONNECT<span className="text-accent">PLAY</span>
                                </h1>
                                <p className="font-inter text-muted-foreground text-sm">
                                    intelligently connecting players
                                </p>
                            </div>

                            <h2 className="font-poppins text-xl font-bold text-foreground mb-2">
                                Bem-vindo de volta!
                            </h2>
                            <p className="font-inter text-muted-foreground text-sm">
                                Entre na sua conta para continuar jogando
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <CntInput
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="seu@email.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="h-10"
                                />

                                <div className="relative">
                                    <CntInput
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Digite sua senha"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                        className="h-10 pr-10"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                    <div className="flex items-center space-x-2">
                                        <CntCheckbox
                                            id="rememberMe"
                                            name="rememberMe"
                                            checked={formData.rememberMe}
                                            onChange={handleInputChange}
                                        />
                                        <span className="text-xs">Lembrar de mim</span>
                                    </div>
                                    <button
                                        type="button"
                                        className="text-primary hover:text-primary-light text-xs"
                                    >
                                        Esqueci minha senha
                                    </button>
                                </div>

                                <CntButton
                                    type="submit"
                                    variant="primary"
                                    size="md"
                                    className="w-full mt-6"
                                >
                                    Entrar
                                </CntButton>

                                <div className="relative mt-6">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t border-border" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-card px-2 text-muted-foreground">
                                            Ou continue com
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mt-4">
                                    <CntButton
                                        variant="outline"
                                        size="sm"
                                        className="w-full"
                                    >
                                        Google
                                    </CntButton>
                                    <CntButton
                                        variant="outline"
                                        size="sm"
                                        className="w-full"
                                    >
                                        Discord
                                    </CntButton>
                                </div>

                                <div className="text-center pt-4">
                                    <p className="font-inter text-muted-foreground text-xs">
                                        Não tem uma conta?{" "}
                                        <button
                                            type="button"
                                            onClick={onSwitchToRegister}
                                            className="text-primary hover:text-primary-light font-medium underline"
                                        >
                                            Criar conta
                                        </button>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Lateral direita */}
                    <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary via-primary to-primary-light items-center justify-center p-8 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-10 right-10 w-20 h-20 border border-white/30 rounded-full" />
                            <div className="absolute bottom-20 left-10 w-16 h-16 border border-white/20 rounded-full" />
                            <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full" />
                        </div>

                        <div className="text-center space-y-6 max-w-sm relative z-10">
                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    <img
                                        src="/ConnectPlay.png"
                                        alt="ConnectPlay Logo"
                                        width={160}
                                        height={160}
                                        className="rounded-2xl shadow-xl"
                                    />
                                </div>
                            </div>

                            <div className="text-foreground space-y-3">
                                <h3 className="font-orbitron text-xl font-bold tracking-wider">
                                    BEM-VINDO DE VOLTA!
                                </h3>
                                <p className="font-inter text-muted-foreground text-sm">
                                    Sua comunidade de jogadores está esperando por você. Entre
                                    e continue dominando!
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-foreground mt-6">
                                <div className="bg-input backdrop-blur-sm rounded-lg p-3">
                                    <div className="text-xl font-bold">50K+</div>
                                    <div className="text-xs text-muted-foreground">
                                        Jogadores
                                    </div>
                                </div>
                                <div className="bg-input backdrop-blur-sm rounded-lg p-3">
                                    <div className="text-xl font-bold">25K+</div>
                                    <div className="text-xs text-muted-foreground">
                                        Matches
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
