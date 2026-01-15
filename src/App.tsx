import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/privacyPolicy";
import TermsOfReference from "./pages/termsOfReference";
import UserAgreement from "./pages/userAgreement";
import FAQ from "./pages/FAQ";
import IframeComponent from './pages/my-dashboard';
import IframeTestComponent from './pages/my-test-dashboard';
import LoginArtist from "./pages/login-artist";
import ArtistProjects from "./pages/artist-projects";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-reference" element={<TermsOfReference />} />
          <Route path="user-agreement" element={<UserAgreement />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="my-dashboard" element={<IframeComponent />} />
          <Route path="test-dashboard" element={<IframeTestComponent />} />
          <Route path="artist-login" element={<LoginArtist />} />
          <Route path="projects" element={<ArtistProjects />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
