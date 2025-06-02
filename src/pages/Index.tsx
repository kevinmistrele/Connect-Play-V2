import { CntButton } from "@/components/ui/button";
import {
  CntCard,
  CntCardHeader,
  CntCardTitle,
  CntCardDescription,
  CntCardContent,
} from "@/components/ui/card";
import {CntForm, CntFormControl, CntFormField, CntFormItem, CntFormLabel, CntFormMessage} from "@/components/ui/form";
import { CntInput } from "@/components/ui/input";
import {Plus} from "lucide-react";
import {useForm} from "react-hook-form";
import {useToast} from "@/hooks/use-toast.ts";

const colors = [
  { name: "Primária", class: "primary", hex: "#7C3AED" },
  { name: "Primária Clara", class: "primary-light", hex: "#A78BFA" },
  { name: "Secundária", class: "secondary", hex: "#0F172A" },
  { name: "Background", class: "background", hex: "#0A0A0A" },
  { name: "Texto Claro", class: "text-light", hex: "#F8FAFC", text: "text-black" },
  { name: "Acento", class: "accent", hex: "#10B981" },
  { name: "Erro", class: "destructive", hex: "#EF4444" },
  { name: "Card BG", class: "card-bg", hex: "#1E1E1E" },
];

export default function DesignSystemPage() {
  const form = useForm();
  const { toast } = useToast();
  return (
      <div className="min-h-screen bg-background text-foreground p-8">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-2">
              NEXUS<span className="text-accent">GAME</span>
            </h1>
            <p className="font-inter text-primary-light">Design System Preview</p>
          </header>

          {/* Paleta de Cores */}
          <section className="mb-12">
            <h2 className="font-poppins text-2xl font-semibold mb-6 border-b border-primary pb-2">
              Paleta de Cores
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {colors.map((color) => (
                  <CntCard key={color.name} className="p-0 overflow-hidden">
                    <div className={`h-24 bg-${color.class} ${color.text ?? ""}`} />
                    <CntCardContent className="bg-card p-3">
                      <p className="font-inter text-sm">{color.name}</p>
                      <p className="font-mono text-xs text-primary-light">{color.hex}</p>
                    </CntCardContent>
                  </CntCard>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-poppins text-2xl font-semibold mb-6 border-b border-primary pb-2">
              Tipografia
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bloco: Títulos */}
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-primary-light mb-4 font-inter text-sm uppercase tracking-wider">
                  Títulos
                </h3>

                <div className="mb-6">
                  <p className="text-xs text-primary-light mb-1">Orbitron (Tech/Gamer)</p>
                  <h4 className="font-orbitron text-3xl font-bold">Título Principal</h4>
                  <h5 className="font-orbitron text-xl font-semibold mt-2">Subtítulo</h5>
                </div>

                <div className="mb-6">
                  <p className="text-xs text-primary-light mb-1">Poppins</p>
                  <h4 className="font-poppins text-3xl font-bold">Título Principal</h4>
                  <h5 className="font-poppins text-xl font-semibold mt-2">Subtítulo</h5>
                </div>

                <div>
                  <p className="text-xs text-primary-light mb-1">Inter</p>
                  <h4 className="font-inter text-3xl font-bold">Título Principal</h4>
                  <h5 className="font-inter text-xl font-semibold mt-2">Subtítulo</h5>
                </div>
              </div>

              {/* Bloco: Texto padrão */}
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-primary-light mb-4 font-inter text-sm uppercase tracking-wider">
                  Texto Padrão
                </h3>

                <div className="mb-6">
                  <p className="text-xs text-primary-light mb-1">Inter</p>
                  <p className="font-inter mb-2">
                    Este é um exemplo de texto padrão usando a fonte Inter. Perfeito para conteúdo principal do seu sistema.
                  </p>
                  <p className="font-inter text-sm text-gray-400">
                    Texto secundário em tamanho menor.
                  </p>
                </div>

                <div>
                  <p className="text-xs text-primary-light mb-1">Rubik</p>
                  <p className="font-rubik mb-2">
                    Este é um exemplo de texto padrão usando a fonte Rubik. Também excelente para conteúdo principal.
                  </p>
                  <p className="font-rubik text-sm text-gray-400">
                    Texto secundário em tamanho menor.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Componentes */}
          <section className="mb-12">
            <h2 className="font-poppins text-2xl font-semibold mb-6 border-b border-primary pb-2">
              Componentes
            </h2>

            {/* Botões */}
            <div className="mb-10">
              <h3 className="text-primary-light mb-4 font-inter text-lg">Botões</h3>
              <div className="flex flex-wrap gap-4">

                {/* Botão Primário */}
                <CntButton className="bg-primary hover:bg-primary-light text-white font-inter px-6 py-2 rounded-md hover-glow transition-all duration-300">
                  Botão Primário
                </CntButton>

                {/* Botão Secundário */}
                <CntButton variant="outline" className="border-primary text-primary hover:bg-primary/10 font-inter px-6 py-2 rounded-md transition-all duration-300">
                  Botão Secundário
                </CntButton>

                {/* Botão Acento */}
                <CntButton className="bg-accent hover:bg-accent/80 text-white font-inter px-6 py-2 rounded-md transition-all duration-300">
                  Botão Acento
                </CntButton>

                {/* Botão Erro */}
                <CntButton className="bg-destructive hover:bg-destructive/80 text-white font-inter px-6 py-2 rounded-md transition-all duration-300">
                  Botão Erro
                </CntButton>

                {/* Botão com Ícone */}
                <CntButton className="bg-primary hover:bg-primary-light text-white font-inter px-6 py-2 rounded-md hover-glow flex items-center gap-2 transition-all duration-300">
                  <Plus className="h-5 w-5" />
                  Com Ícone
                </CntButton>

              </div>
              {/* Cards */}
              <div className="mb-10">
                <h3 className="text-primary-light mb-4 font-inter text-lg">Cards</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                  {/* Card Padrão */}
                  <CntCard>
                    <CntCardHeader>
                      <CntCardTitle>Card Padrão</CntCardTitle>
                      <CntCardDescription>Este é um exemplo de card com borda roxa sutil.</CntCardDescription>
                    </CntCardHeader>
                    <CntCardContent>
                      <button className="text-primary hover:text-primary-light text-sm font-medium transition-colors">
                        Saiba mais →
                      </button>
                    </CntCardContent>
                  </CntCard>

                  {/* Card com Glow */}
                  <CntCard className="glow">
                    <CntCardHeader>
                      <CntCardTitle>Card com Glow</CntCardTitle>
                      <CntCardDescription>Este card tem um efeito de brilho (glow) roxo nas bordas.</CntCardDescription>
                    </CntCardHeader>
                    <CntCardContent>
                      <button className="text-primary hover:text-primary-light text-sm font-medium transition-colors">
                        Saiba mais →
                      </button>
                    </CntCardContent>
                  </CntCard>

                  {/* Card com Gradiente */}
                  <CntCard className="bg-gradient-to-br from-secondary to-background border border-primary/20">
                    <CntCardHeader>
                      <CntCardTitle>Card com Gradiente</CntCardTitle>
                      <CntCardDescription>Este card usa um gradiente sutil como fundo.</CntCardDescription>
                    </CntCardHeader>
                    <CntCardContent>
                      <button className="text-primary hover:text-primary-light text-sm font-medium transition-colors">
                        Saiba mais →
                      </button>
                    </CntCardContent>
                  </CntCard>

                </div>
              </div>
            </div>
            {/* Forms */}
            <div className="mb-10">
              <h3 className="text-primary-light mb-4 font-inter text-lg">Inputs e Forms</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CntCard className="p-6">
                  <CntForm {...form}>
                    <CntFormField
                        name="username"
                        render={({ field }) => (
                            <CntFormItem>
                              <CntFormLabel>Nome de usuário</CntFormLabel>
                              <CntFormControl>
                                <CntInput placeholder="Digite seu nome de usuário" {...field} />
                              </CntFormControl>
                              <CntFormMessage />
                            </CntFormItem>
                        )}
                    />

                    <CntFormField
                        name="email"
                        render={({ field }) => (
                            <CntFormItem>
                              <CntFormLabel>Email</CntFormLabel>
                              <CntFormControl>
                                <CntInput type="email" placeholder="seu@email.com" {...field} />
                              </CntFormControl>
                              <CntFormMessage />
                            </CntFormItem>
                        )}
                    />

                    <CntFormField
                        name="password"
                        render={({ field }) => (
                            <CntFormItem>
                              <CntFormLabel>Senha</CntFormLabel>
                              <CntFormControl>
                                <CntInput type="password" placeholder="••••••••" {...field} />
                              </CntFormControl>
                              <CntFormMessage />
                            </CntFormItem>
                        )}
                    />

                    <CntButton className="w-full mt-4">Entrar</CntButton>
                  </CntForm>
                </CntCard>

                <CntCard className="p-6 space-y-4">
                  <div>
                    <label htmlFor="select" className="block font-inter text-sm mb-2">Selecione uma opção</label>
                    <select id="select" className="w-full bg-background border border-gray-700 rounded-md py-2 px-4 text-white input-focus transition-all duration-300">
                      <option value="">Selecione...</option>
                      <option value="1">Opção 1</option>
                      <option value="2">Opção 2</option>
                      <option value="3">Opção 3</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-inter text-sm mb-2">Opções</label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="check1" className="h-4 w-4 text-primary focus:ring-primary border-gray-700 rounded bg-background" />
                        <label htmlFor="check1" className="ml-2 font-inter text-sm">Opção de checkbox 1</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="check2" className="h-4 w-4 text-primary focus:ring-primary border-gray-700 rounded bg-background" />
                        <label htmlFor="check2" className="ml-2 font-inter text-sm">Opção de checkbox 2</label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block font-inter text-sm mb-2">Escolha uma</label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" id="radio1" name="radio-group" className="h-4 w-4 text-primary focus:ring-primary border-gray-700 bg-background" />
                        <label htmlFor="radio1" className="ml-2 font-inter text-sm">Opção de radio 1</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="radio2" name="radio-group" className="h-4 w-4 text-primary focus:ring-primary border-gray-700 bg-background" />
                        <label htmlFor="radio2" className="ml-2 font-inter text-sm">Opção de radio 2</label>
                      </div>
                    </div>
                  </div>
                </CntCard>
              </div>
            </div>
            {/* Alertas e Toasts */}
            <section className="mb-12">
              <h2 className="font-poppins text-2xl font-semibold mb-6 border-b border-primary pb-2">
                Alertas e Notificações
              </h2>

              <div className="flex flex-wrap gap-4">
                <CntButton onClick={() => toast({ title: "Informação", description: "Este é um toast padrão." })}>
                  Toast Default
                </CntButton>
                <CntButton className="bg-accent hover:bg-accent/80" onClick={() => toast({ title: "Sucesso", description: "Operação realizada com sucesso!" })}>
                  Toast Sucesso
                </CntButton>
                <CntButton className="bg-destructive hover:bg-destructive/80" onClick={() => toast({ title: "Erro", description: "Ocorreu um erro. Tente novamente.", variant: "destructive" })}>
                  Toast Erro
                </CntButton>
              </div>
            </section>
          </section>

        </div>
      </div>
  );
}
