
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Code, Palette, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Bem-vindo ao seu projeto React!
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Seu ambiente está configurado e pronto para desenvolvimento
          </p>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            React + Vite + Tailwind CSS
          </Badge>
        </div>

        {/* Status Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-green-200 bg-green-50">
            <CardHeader className="pb-3">
              <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle className="text-green-800">React 18</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 text-sm">Configurado e funcionando</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader className="pb-3">
              <Zap className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle className="text-blue-800">Vite</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 text-sm">Build tool rápido</p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader className="pb-3">
              <Palette className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle className="text-purple-800">Tailwind</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-700 text-sm">CSS utility-first</p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader className="pb-3">
              <Code className="h-8 w-8 text-orange-600 mb-2" />
              <CardTitle className="text-orange-800">TypeScript</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700 text-sm">Tipagem estática</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">🚀 Pronto para começar!</CardTitle>
            <CardDescription>
              Sua aplicação React está funcionando perfeitamente. Agora você pode começar a desenvolver!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">O que você pode fazer agora:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ Criar novos componentes</li>
                <li>✅ Estilizar com Tailwind CSS</li>
                <li>✅ Adicionar páginas e rotas</li>
                <li>✅ Usar componentes do Shadcn/ui</li>
                <li>✅ Implementar funcionalidades</li>
              </ul>
            </div>
            
            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Começar a desenvolver
              </Button>
              <Button variant="outline">
                Ver componentes
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-500">
          <p>Desenvolvido com ❤️ usando Lovable</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
