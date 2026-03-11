import React from "react";
import { useLocation } from "wouter";
import { Building2, LayoutDashboard, Users, CalendarOff, Receipt, Briefcase, FileText, Settings, LogOut, ChevronDown } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

export function Sidebar() {
  const { currentUser, logout } = useAppContext();
  const [location, setLocation] = useLocation();

  if (!currentUser) return null;

  const role = currentUser.role || 'employee';
  
  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard, roles: ['admin', 'hr_manager', 'employee'] },
    { name: 'Employees', path: '/employees', icon: Users, roles: ['admin', 'hr_manager'] },
    { name: 'Leave', path: '/leave', icon: CalendarOff, roles: ['admin', 'hr_manager', 'employee'] },
    { name: 'Payroll', path: '/payroll', icon: Receipt, roles: ['admin', 'payroll'] },
    { name: 'Payslips', path: '/payslips', icon: FileText, roles: ['admin', 'hr_manager', 'payroll', 'employee'] },
    { name: 'Performance', path: '/performance', icon: FileText, roles: ['admin', 'hr_manager', 'employee'] },
    { name: 'Disciplinary', path: '/disciplinary', icon: Briefcase, roles: ['admin', 'hr_manager', 'employee'] },
    { name: 'Transfers', path: '/transfers', icon: Briefcase, roles: ['admin', 'hr_manager'] },
    { name: 'Compensation', path: '/compensation', icon: Receipt, roles: ['admin', 'hr_manager'] },
    { name: 'Reports', path: '/reports', icon: FileText, roles: ['admin', 'hr_manager', 'payroll', 'auditor'] },
    { name: 'Users', path: '/users', icon: Users, roles: ['admin'] },
    { name: 'Settings', path: '/settings', icon: Settings, roles: ['admin'] },
  ];

  const visibleNavs = navItems.filter(item => item.roles.includes(role));

  const handleLogout = () => {
    logout();
    setLocation('/login');
  };

  return (
    <div className="w-64 bg-sidebar text-sidebar-foreground flex flex-col h-full border-r border-sidebar-border shadow-sm shrink-0">
      <div className="p-5 border-b border-sidebar-border flex items-center gap-3">
        <Building2 className="w-8 h-8 text-primary" />
        <div>
          <h1 className="font-bold text-lg leading-tight tracking-tight">Micmakin <span className="text-primary">HR</span></h1>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Platform</p>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        <div className="text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider mb-3 px-2">Menu</div>
        {visibleNavs.map(item => {
          const isActive = location === item.path;
          return (
            <button
              key={item.name}
              onClick={() => setLocation(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-medium ${
                isActive 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/80'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </button>
          )
        })}
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 mb-4 px-2">
          <div className="w-9 h-9 rounded-full bg-sidebar-accent flex items-center justify-center font-bold text-sm">
            {currentUser.full_name?.charAt(0) || 'U'}
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="text-sm font-semibold truncate">{currentUser.full_name || 'User'}</div>
            <div className="text-xs text-sidebar-foreground/60 capitalize truncate">{role.replace('_', ' ')}</div>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 rounded-md transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
