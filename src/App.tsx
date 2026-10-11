import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";

// Code-split standalone subpages
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
        <ScrollToTop />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Terms />} />
            {/* Automatic redirect for /resume and /cv to Home */}
            <Route path="/resume" element={<Navigate to="/" replace />} />
            <Route path="/cv" element={<Navigate to="/" replace />} />
            {/* Catch-all 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
