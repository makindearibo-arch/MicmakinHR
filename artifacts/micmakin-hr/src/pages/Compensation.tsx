import React from 'react';
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function Compensation() {
  const compensations = [
    { id: 'CMP-001', employee: 'John Doe', type: 'Salary Review', current: '₦450,000', proposed: '₦500,000', status: 'Pending' },
    { id: 'CMP-002', employee: 'Jane Smith', type: 'Bonus', current: '-', proposed: '₦100,000', status: 'Approved' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Compensation</h1>
          <p className="text-sm text-gray-500 mt-1">Manage salary reviews, bonuses, and compensation packages</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Request
        </Button>
      </div>

      <Card className="border-gray-200/60 shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50/80">
            <TableRow className="border-gray-100">
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Employee</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Type</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Current</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Proposed</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Status</TableHead>
              <TableHead className="text-right text-xs font-semibold uppercase tracking-wider text-gray-500">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {compensations.map((cmp) => (
              <TableRow key={cmp.id} className="group border-gray-100">
                <TableCell>
                  <div className="font-medium text-gray-900">{cmp.employee}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{cmp.id}</div>
                </TableCell>
                <TableCell className="text-sm text-gray-700">{cmp.type}</TableCell>
                <TableCell className="text-sm text-gray-700">{cmp.current}</TableCell>
                <TableCell className="text-sm font-medium text-gray-900">{cmp.proposed}</TableCell>
                <TableCell>
                  <StatusBadge status={cmp.status} />
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="h-8">Review</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
