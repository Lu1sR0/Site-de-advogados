
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DireitoCivil from "./pages/areas/DireitoCivil";
import DireitoPenal from "./pages/areas/DireitoPenal";
import DireitoTrabalhista from "./pages/areas/DireitoTrabalhista";
import DireitoEmpresarial from "./pages/areas/DireitoEmpresarial";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/areas/direito-civil" element={<DireitoCivil />} />
          <Route path="/areas/direito-penal" element={<DireitoPenal />} />
          <Route path="/areas/direito-trabalhista" element={<DireitoTrabalhista />} />
          <Route path="/areas/direito-empresarial" element={<DireitoEmpresarial />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
