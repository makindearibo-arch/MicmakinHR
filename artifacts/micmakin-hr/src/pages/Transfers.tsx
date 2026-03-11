import React from 'react';
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function Transfers() {
  const transfers = [
    { id: 'TRF-001', employee: 'John Doe', from: 'Engineering HQ', to: 'London Branch', date: '2025-06-01', status: 'Pending' },
    { id: 'TRF-002', employee: 'Jane Smith', from: 'Sales Dept', to: 'Marketing Dept', date: '2025-05-15', status: 'Approved' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Transfers</h1>
          <p className="text-sm text-gray-500 mt-1">Manage employee branch and departmental transfers</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
          <Plus className="w-4 h-4 mr-2" />
          Request Transfer
        </Button>
      </div>

      <Card className="border-gray-200/60 shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50/80">
            <TableRow className="border-gray-100">
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Employee</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">From</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">To</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Effective Date</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Status</TableHead>
              <TableHead className="text-right text-xs font-semibold uppercase tracking-wider text-gray-500">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transfers.map((trf) => (
              <TableRow key={trf.id} className="group border-gray-100">
                <TableCell>
                  <div className="font-medium text-gray-900">{trf.employee}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{trf.id}</div>
                </TableCell>
                <TableCell className="text-sm text-gray-700">{trf.from}</TableCell>
                <TableCell className="text-sm text-gray-700">{trf.to}</TableCell>
                <TableCell className="text-sm text-gray-700">{trf.date}</TableCell>
                <TableCell>
                  <StatusBadge status={trf.status} />
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="h-8">View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
