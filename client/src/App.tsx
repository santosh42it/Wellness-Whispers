import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import AboutPage from "@/pages/about";
import AfterTherapyPage from "@/pages/after-therapy";
import NotFound from "@/pages/not-found";
import AdminLogin from "@/pages/admin-login";
import AdminDashboard from "@/pages/admin-dashboard";
import SEOHead from "@/components/seo-head";
import { 
  usePageTracking, 
  useScrollTracking, 
  useSessionTracking, 
  usePerformanceTracking,
  useAccessibilityTracking 
} from "@/components/analytics";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/after-therapy" component={AfterTherapyPage} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin" component={AdminDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize analytics tracking
  usePageTracking();
  useScrollTracking();
  useSessionTracking();
  usePerformanceTracking();
  useAccessibilityTracking();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SEOHead />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
