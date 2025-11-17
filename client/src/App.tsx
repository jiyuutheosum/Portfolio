import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

// Router component defining application routes
function Router() {
  return (
    <Switch>
      {/* Main portfolio home page */}
      <Route path="/" component={Home} />
      {/* Fallback to 404 for unknown routes */}
      <Route component={NotFound} />
    </Switch>
  );
}

// Root App component with providers for React Query and UI components
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
