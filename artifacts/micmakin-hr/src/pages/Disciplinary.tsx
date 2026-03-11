import React from 'react';
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function Disciplinary() {
  const records = [
    { id: 'DIS-001', employee: 'Michael Johnson', type: 'Warning', date: '2025-02-10', status: 'Active' },
    { id: 'DIS-002', employee: 'David Brown', type: 'Suspension', date: '2024-11-05', status: 'Resolved' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Disciplinary</h1>
          <p className="text-sm text-gray-500 mt-1">Manage disciplinary actions and records</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
          <Plus className="w-4 h-4 mr-2" />
          Log Action
        </Button>
      </div>

      <Card className="border-gray-200/60 shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50/80">
            <TableRow className="border-gray-100">
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Employee</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Type</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Date</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Status</TableHead>
              <TableHead className="text-right text-xs font-semibold uppercase tracking-wider text-gray-500">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.map((rec) => (
              <TableRow key={rec.id} className="group border-gray-100">
                <TableCell>
                  <div className="font-medium text-gray-900">{rec.employee}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{rec.id}</div>
                </TableCell>
                <TableCell className="text-sm text-gray-700">{rec.type}</TableCell>
                <TableCell className="text-sm text-gray-700">{rec.date}</TableCell>
                <TableCell>
                  <StatusBadge status={rec.status === 'Resolved' ? 'Inactive' : 'Active'} />
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
