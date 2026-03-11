import React from 'react';
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/button";
import { Download, Calculator } from "lucide-react";

export function Payroll() {
  const runs = [
    { id: 'PR-2025-04', period: 'April 2025', employees: 142, gross: '₦12,450,000', net: '₦9,820,000', status: 'Pending', date: '2025-04-25' },
    { id: 'PR-2025-03', period: 'March 2025', employees: 140, gross: '₦12,150,000', net: '₦9,610,000', status: 'Paid', date: '2025-03-25' },
    { id: 'PR-2025-02', period: 'February 2025', employees: 138, gross: '₦11,950,000', net: '₦9,450,000', status: 'Paid', date: '2025-02-25' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Payroll Runs</h1>
          <p className="text-sm text-gray-500 mt-1">Manage monthly payroll calculations and processing</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm transition-all shadow-primary/20">
          <Calculator className="w-4 h-4 mr-2" />
          Run Payroll
        </Button>
      </div>

      <Card className="border-gray-200/60 shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50/80">
            <TableRow className="border-gray-100 hover:bg-transparent">
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Period / ID</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Run Date</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Employees</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Gross / Net Total</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Status</TableHead>
              <TableHead className="text-right text-xs font-semibold uppercase tracking-wider text-gray-500">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {runs.map((run) => (
              <TableRow key={run.id} className="group border-gray-100 hover:bg-primary/5">
                <TableCell>
                  <div className="font-bold text-gray-900">{run.period}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{run.id}</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-700">{run.date}</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-700">{run.employees}</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm font-medium text-gray-900">{run.gross}</div>
                  <div className="text-xs text-green-600 font-medium mt-0.5">{run.net} Net</div>
                </TableCell>
                <TableCell>
                  <StatusBadge status={run.status} />
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="outline" size="sm" className="h-8">
                      View Details
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-900">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
