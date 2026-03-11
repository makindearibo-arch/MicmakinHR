import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileSpreadsheet, PieChart } from "lucide-react";

export function Reports() {
  const reports = [
    { title: 'Employee Directory', desc: 'Full list of employees with contact info and roles.', icon: FileSpreadsheet },
    { title: 'Payroll Summary', desc: 'Summary of payroll costs broken down by department.', icon: PieChart },
    { title: 'Leave Balances', desc: 'Current leave balances for all active employees.', icon: FileSpreadsheet },
    { title: 'Headcount by Subsidiary', desc: 'Employee distribution across subsidiaries.', icon: PieChart },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Reports</h1>
          <p className="text-sm text-gray-500 mt-1">Generate and download HR and Payroll reports</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report, idx) => (
          <Card key={idx} className="border-gray-200/60 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <report.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{report.title}</h3>
              <p className="text-sm text-gray-500 mb-6">{report.desc}</p>
              
              <Button variant="outline" className="w-full text-primary border-primary/20 hover:bg-primary/5">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
