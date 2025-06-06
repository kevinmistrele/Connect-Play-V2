"use client"

import type React from "react"
import { useState } from "react"
import { Eye, EyeOff, X, Gamepad2, Users, Shield } from "lucide-react"
import { CntButton } from "@/components/ui/button"
import { CntInput } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CntCheckbox } from "@/components/ui/checkbox"

interface RegisterModalProps {
    isOpen: boolean
    onClose: () => void
    onSwitchToLogin: () => void
}

export function RegisterModal({ isOpen, onClose, onSwitchToLogin }: RegisterModalProps) {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
        acceptNewsletter: false,
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
        console.log("Register submitted:", formData)
        alert("Cadastro realizado com sucesso! (Demo)")
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

            <div className="relative w-full max-w-5xl bg-card/95 backdrop-blur-md rounded-2xl shadow-2xl border border-primary/20 overflow-hidden">
                <button onClick={onClose} className="absolute top-4 right-4 z-20 text-muted-foreground hover:text-primary transition-colors">
                    <X className="h-5 w-5" />
                </button>

                <div className="flex min-h-[600px]">
                    <div className="flex-1 p-8 lg:p-12">
                        <div className="max-w-md mx-auto space-y-6">
                            <div className="text-center">
                                <h1 className="font-orbitron text-2xl font-bold text-primary tracking-wider mb-2">
                                    CONNECT<span className="text-accent">PLAY</span>
                                </h1>
                                <p className="font-inter text-muted-foreground text-sm">intelligently connecting players</p>
                            </div>

                            <h2 className="font-poppins text-xl font-bold text-foreground mb-2">Criar Conta</h2>
                            <p className="font-inter text-muted-foreground text-sm">Junte-se à maior comunidade de jogadores</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-1">
                                    <Label htmlFor="username" className="text-xs">Nome de usuário</Label>
                                    <CntInput id="username" name="username" type="text" placeholder="Digite seu nome de usuário" value={formData.username} onChange={handleInputChange} required className="h-9" />
                                </div>

                                <div className="space-y-1">
                                    <Label htmlFor="email" className="text-xs">Email</Label>
                                    <CntInput id="email" name="email" type="email" placeholder="seu@email.com" value={formData.email} onChange={handleInputChange} required className="h-9" />
                                </div>

                                <div className="space-y-1">
                                    <Label htmlFor="password" className="text-xs">Senha</Label>
                                    <div className="relative">
                                        <CntInput id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Digite sua senha" value={formData.password} onChange={handleInputChange} required className="h-9 pr-10" />
                                        <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <Label htmlFor="confirmPassword" className="text-xs">Confirmar senha</Label>
                                    <div className="relative">
                                        <CntInput id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="Confirme sua senha" value={formData.confirmPassword} onChange={handleInputChange} required className="h-9 pr-10" />
                                        <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                            {showConfirmPassword ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2">
                                    <div className="flex items-start space-x-3">
                                        <CntCheckbox id="acceptTerms" name="acceptTerms" checked={formData.acceptTerms} onChange={handleInputChange} required />
                                        <Label htmlFor="acceptTerms" className="text-xs leading-4">
                                            Eu aceito os <button type="button" className="text-primary hover:text-primary-light underline">Termos de Uso</button> e a <button type="button" className="text-primary hover:text-primary-light underline">Política de Privacidade</button>
                                        </Label>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <CntCheckbox id="acceptNewsletter" name="acceptNewsletter" checked={formData.acceptNewsletter} onChange={handleInputChange} />
                                        <Label htmlFor="acceptNewsletter" className="text-xs leading-4">Quero receber novidades e ofertas especiais</Label>
                                    </div>
                                </div>

                                <CntButton type="submit" variant="primary" size="md" className="w-full mt-6">Criar Conta</CntButton>

                                <div className="relative mt-4">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t border-border" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-card px-2 text-muted-foreground">Ou cadastre-se com</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mt-3">
                                    <CntButton variant="outline" size="sm" className="w-full">Google</CntButton>
                                    <CntButton variant="outline" size="sm" className="w-full">Discord</CntButton>
                                </div>

                                <div className="text-center pt-2">
                                    <p className="font-inter text-muted-foreground text-xs">
                                        Já tem uma conta? <button type="button" onClick={onSwitchToLogin} className="text-primary hover:text-primary-light font-medium underline">Fazer login</button>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary via-primary to-primary-light items-center justify-center p-8 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-10 right-10 w-20 h-20 border border-white/30 rounded-full"></div>
                            <div className="absolute bottom-20 left-10 w-16 h-16 border border-white/20 rounded-full"></div>
                            <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full"></div>
                        </div>

                        <div className="text-center space-y-6 max-w-sm relative z-10">
                            <div className="flex justify-center mb-6">
                                <div className="relative">
sec                                    <img src="/ConnectPlay.png" alt="ConnectPlay Logo" width={160} height={160} className="rounded-2xl shadow-xl" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-foreground">
                                    <div className="bg-input p-2 rounded-lg">
                                        <Gamepad2 className="h-5 w-5" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-poppins font-semibold text-sm">Match Inteligente</h3>
                                        <p className="text-muted-foreground text-xs">Encontre jogadores compatíveis</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-foreground">
                                    <div className="bg-input p-2 rounded-lg">
                                        <Users className="h-5 w-5" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-poppins font-semibold text-sm">Comunidade Ativa</h3>
                                        <p className="text-muted-foreground text-xs">50.000+ jogadores conectados</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-foreground">
                                    <div className="bg-input p-2 rounded-lg">
                                        <Shield className="h-5 w-5" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-poppins font-semibold text-sm">Ambiente Seguro</h3>
                                        <p className="text-muted-foreground text-xs">Sistema anti-tóxico ativo</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-input backdrop-blur-sm rounded-lg p-4 text-foreground mt-6">
                                <p className="font-inter text-xs italic mb-2">"Finalmente encontrei uma equipe que joga no meu nível!"</p>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                                        <span className="text-xs font-bold">GA</span>
                                    </div>
                                    <div className="text-left">
                                        <p className="font-medium text-xs">Gui Gamer</p>
                                        <p className="text-muted-foreground text-xs">Valorant • Immortal</p>
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
