
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import AuthPage from "@/pages/AuthPage";
import HomePage from "@/pages/HomePage";
import AdminLayout from "@/components/admin/AdminLayout";
import DashboardPage from "@/pages/admin/DashboardPage";
import RoomsPage from "@/pages/admin/RoomsPage";
import BookingsPage from "@/pages/admin/BookingsPage";
import StaffPage from "@/pages/admin/StaffPage";
import GuestsPage from "@/pages/admin/GuestsPage";
import AnalyticsPage from "@/pages/admin/AnalyticsPage";
import InventoryPage from "@/pages/admin/InventoryPage";
import ReportsPage from "@/pages/admin/ReportsPage";
import SettingsPage from "@/pages/admin/SettingsPage";
import SecurityPage from "@/pages/admin/SecurityPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background font-sans antialiased">
            <Routes>
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<DashboardPage />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="rooms" element={<RoomsPage />} />
                <Route path="bookings" element={<BookingsPage />} />
                <Route path="staff" element={<StaffPage />} />
                <Route path="guests" element={<GuestsPage />} />
                <Route path="analytics" element={<AnalyticsPage />} />
                <Route path="inventory" element={<InventoryPage />} />
                <Route path="reports" element={<ReportsPage />} />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="security" element={<SecurityPage />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
