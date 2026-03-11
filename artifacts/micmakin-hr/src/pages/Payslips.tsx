import React from 'react';
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export function Payslips() {
  const payslips = [
    { id: 'PS-2025-04', period: 'April 2025', date: '2025-04-25', gross: '₦450,000', net: '₦380,000', status: 'Paid' },
    { id: 'PS-2025-03', period: 'March 2025', date: '2025-03-25', gross: '₦450,000', net: '₦380,000', status: 'Paid' },
    { id: 'PS-2025-02', period: 'February 2025', date: '2025-02-25', gross: '₦450,000', net: '₦380,000', status: 'Paid' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Payslips</h1>
          <p className="text-sm text-gray-500 mt-1">View and download your monthly payslips</p>
        </div>
      </div>

      <Card className="border-gray-200/60 shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50/80">
            <TableRow className="border-gray-100 hover:bg-transparent">
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Period / ID</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Date Issued</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Gross Amount</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Net Amount</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Status</TableHead>
              <TableHead className="text-right text-xs font-semibold uppercase tracking-wider text-gray-500">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payslips.map((ps) => (
              <TableRow key={ps.id} className="group border-gray-100 hover:bg-primary/5">
                <TableCell>
                  <div className="font-bold text-gray-900">{ps.period}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{ps.id}</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-700">{ps.date}</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm font-medium text-gray-900">{ps.gross}</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-green-600 font-medium">{ps.net}</div>
                </TableCell>
                <TableCell>
                  <StatusBadge status={ps.status} />
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="outline" size="sm" className="h-8">
                      <FileText className="w-4 h-4 mr-1" /> View
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
