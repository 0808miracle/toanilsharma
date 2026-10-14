import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CanonicalManager } from "@/components/CanonicalManager";

// Code-split all standalone multi-page routes
const Index = lazy(() => import("./pages/Index"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const SimulatorsPage = lazy(() => import("./pages/SimulatorsPage"));
const CalculatorsPage = lazy(() => import("./pages/CalculatorsPage"));
const ToolsPage = lazy(() => import("./pages/ToolsPage"));
const InsightsPage = lazy(() => import("./pages/InsightsPage"));
const TrainingPage = lazy(() => import("./pages/TrainingPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
    <div className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
  </div>
);

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="anil-sharma-theme">
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CanonicalManager />
        <ScrollToTop />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            {/* Primary Multi-Page Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/simulators" element={<SimulatorsPage />} />
            <Route path="/calculators" element={<CalculatorsPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Semantic & Crawler Aliases */}
            <Route path="/blog" element={<InsightsPage />} />
            <Route path="/experience/reliance-industries" element={<ExperiencePage />} />
            <Route path="/methodologies/rcm" element={<ServicesPage />} />

            {/* Compliance & Policy Pages */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Terms />} />

            {/* Redirects to Executive Leadership Profile */}
            <Route path="/resume" element={<Navigate to="/about" replace />} />
            <Route path="/cv" element={<Navigate to="/about" replace />} />

            {/* Catch-all 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
