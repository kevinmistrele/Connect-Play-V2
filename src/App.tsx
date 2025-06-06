import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HomePage from "@/pages/authentication/HomePage.tsx";
import MatchPage from "@/pages/features/MatchPage.tsx";
import {ModalProvider} from "@/providers/modal-context.tsx";
import {GlobalModals} from "@/common/global-modal.tsx";
import {AppRoutes} from "@/routes/routes.tsx";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ModalProvider>
          <GlobalModals />
          <BrowserRouter>
              <AppRoutes />
          </BrowserRouter>
        </ModalProvider>
      </TooltipProvider>
    </QueryClientProvider>
);

export default App;
