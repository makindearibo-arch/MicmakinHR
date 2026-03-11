import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { AppProvider, useAppContext } from "@/context/AppContext";

import { Login } from "@/pages/Login";
import { Dashboard } from "@/pages/Dashboard";
import { Employees } from "@/pages/Employees";
import { Leave } from "@/pages/Leave";
import { Payroll } from "@/pages/Payroll";
import { Settings } from "@/pages/Settings";
import { Performance } from "@/pages/Performance";
import { Disciplinary } from "@/pages/Disciplinary";
import { Payslips } from "@/pages/Payslips";
import { Transfers } from "@/pages/Transfers";
import { Compensation } from "@/pages/Compensation";
import { Reports } from "@/pages/Reports";
import { Users } from "@/pages/Users";
import { Layout } from "@/components/layout/Layout";
import { useEffect } from "react";

const queryClient = new QueryClient();

function ProtectedRoute({ component: Component }: { component: React.ComponentType }) {
  const { currentUser, sessionLoading } = useAppContext();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!sessionLoading && !currentUser) {
      setLocation("/login");
    }
  }, [currentUser, sessionLoading, setLocation]);

  if (sessionLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (!currentUser) return null;

  return (
    <Layout>
      <Component />
    </Layout>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/">
        {() => <ProtectedRoute component={Dashboard} />}
      </Route>
      <Route path="/employees">
        {() => <ProtectedRoute component={Employees} />}
      </Route>
      <Route path="/leave">
        {() => <ProtectedRoute component={Leave} />}
      </Route>
      <Route path="/payroll">
        {() => <ProtectedRoute component={Payroll} />}
      </Route>
      <Route path="/performance">
        {() => <ProtectedRoute component={Performance} />}
      </Route>
      <Route path="/disciplinary">
        {() => <ProtectedRoute component={Disciplinary} />}
      </Route>
      <Route path="/payslips">
        {() => <ProtectedRoute component={Payslips} />}
      </Route>
      <Route path="/transfers">
        {() => <ProtectedRoute component={Transfers} />}
      </Route>
      <Route path="/compensation">
        {() => <ProtectedRoute component={Compensation} />}
      </Route>
      <Route path="/reports">
        {() => <ProtectedRoute component={Reports} />}
      </Route>
      <Route path="/users">
        {() => <ProtectedRoute component={Users} />}
      </Route>
      <Route path="/settings">
        {() => <ProtectedRoute component={Settings} />}
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
