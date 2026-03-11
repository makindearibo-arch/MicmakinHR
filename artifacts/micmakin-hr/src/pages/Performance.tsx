import React from 'react';
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function Performance() {
  const reviews = [
    { id: 'REV-001', employee: 'John Doe', reviewer: 'Sarah Williams', date: '2025-01-15', score: '4.5/5.0', status: 'Completed' },
    { id: 'REV-002', employee: 'Jane Smith', reviewer: 'Sarah Williams', date: '2025-01-20', score: 'Pending', status: 'In Progress' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Performance</h1>
          <p className="text-sm text-gray-500 mt-1">Track employee performance and reviews</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
          <Plus className="w-4 h-4 mr-2" />
          New Review
        </Button>
      </div>

      <Card className="border-gray-200/60 shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50/80">
            <TableRow className="border-gray-100">
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Employee</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Reviewer</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Date</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Score</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Status</TableHead>
              <TableHead className="text-right text-xs font-semibold uppercase tracking-wider text-gray-500">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviews.map((rev) => (
              <TableRow key={rev.id} className="group border-gray-100">
                <TableCell>
                  <div className="font-medium text-gray-900">{rev.employee}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{rev.id}</div>
                </TableCell>
                <TableCell className="text-sm text-gray-700">{rev.reviewer}</TableCell>
                <TableCell className="text-sm text-gray-700">{rev.date}</TableCell>
                <TableCell className="text-sm font-medium text-gray-900">{rev.score}</TableCell>
                <TableCell>
                  <StatusBadge status={rev.status === 'In Progress' ? 'Pending' : 'Approved'} />
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
