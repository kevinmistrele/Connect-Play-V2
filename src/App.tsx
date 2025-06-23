import { CntToaster } from "@/components/ui/toaster";
import { CntTooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";


import {ModalProvider} from "@/providers/modal-context.tsx";
import {GlobalModals} from "@/common/global-modal.tsx";
import {AppRoutes} from "@/routes/routes.tsx";
import {CntSonner} from "@/components/ui/sonner.tsx";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
      <CntTooltipProvider>
        <CntToaster />
        <CntSonner />
        <ModalProvider>
          <GlobalModals />
          <BrowserRouter>
              <AppRoutes />
          </BrowserRouter>
        </ModalProvider>
      </CntTooltipProvider>
    </QueryClientProvider>
);

export default App;
