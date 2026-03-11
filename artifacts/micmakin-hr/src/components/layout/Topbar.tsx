import React from "react";
import { useLocation } from "wouter";
import { Building2, LayoutDashboard, Users, CalendarOff, Receipt, Briefcase, FileText, Settings, LogOut, ChevronDown, Bell } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

export function Topbar() {
  const { currentUser, currentSubsidiary, setCurrentSubsidiary } = useAppContext();
  const [location] = useLocation();

  if (!currentUser) return null;

  const pageNames: Record<string, string> = {
    '/': 'Dashboard',
    '/employees': 'Employees',
    '/leave': 'Leave Management',
    '/payroll': 'Payroll',
    '/payslips': 'Payslips',
    '/performance': 'Performance',
    '/disciplinary': 'Disciplinary',
    '/transfers': 'Transfers',
    '/compensation': 'Compensation',
    '/reports': 'Reports',
    '/users': 'System Users',
    '/settings': 'Settings',
  };

  const currentPage = pageNames[location] || 'Dashboard';

  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6 shrink-0 z-10 sticky top-0">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-foreground">{currentPage}</h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">Subsidiary:</span>
          <select 
            value={currentSubsidiary}
            onChange={(e) => setCurrentSubsidiary(e.target.value)}
            className="h-9 px-3 py-1 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="All">All Subsidiaries</option>
            <option value="Micmakin Nigeria">Micmakin Nigeria</option>
            <option value="Micmakin UK">Micmakin UK</option>
          </select>
        </div>

        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-secondary/80 transition-colors relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-white"></span>
        </button>
      </div>
    </header>
  );
}
