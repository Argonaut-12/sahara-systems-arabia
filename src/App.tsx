import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Leaves from "./pages/Leaves";
import Advances from "./pages/Advances";
import EndOfService from "./pages/EndOfService";
import Attendance from "./pages/Attendance";
import Overtime from "./pages/Overtime";
import Settings from "./pages/Settings";
import Employees from "./pages/Employees";
import Payroll from "./pages/Payroll";
import PayrollDetails from "./pages/PayrollDetails";
import Training from "./pages/Training";
import Medical from "./pages/Medical";
import Reports from "./pages/Reports";
import Calendar from "./pages/Calendar";
import Tasks from "./pages/Tasks";
import BenefitsStatement from "./pages/BenefitsStatement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/payroll-details" element={<PayrollDetails />} />
          <Route path="/training" element={<Training />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/leaves" element={<Leaves />} />
          <Route path="/advances" element={<Advances />} />
          <Route path="/end-of-service" element={<EndOfService />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/overtime" element={<Overtime />} />
          <Route path="/benefits-statement" element={<BenefitsStatement />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
