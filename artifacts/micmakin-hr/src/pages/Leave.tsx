import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/button";
import { Plus, CheckCircle2, XCircle } from "lucide-react";

export function Leave() {
  const requests = [
    { id: 'LR-001', employee: 'John Doe', type: 'Annual Leave', start: '2025-05-10', end: '2025-05-20', days: 10, status: 'Pending' },
    { id: 'LR-002', employee: 'Jane Smith', type: 'Sick Leave', start: '2025-04-01', end: '2025-04-03', days: 3, status: 'Approved' },
    { id: 'LR-003', employee: 'Michael Johnson', type: 'Casual Leave', start: '2025-06-15', end: '2025-06-16', days: 2, status: 'Rejected' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Leave Management</h1>
          <p className="text-sm text-gray-500 mt-1">Review and manage employee leave requests</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm transition-all shadow-primary/20">
          <Plus className="w-4 h-4 mr-2" />
          Request Leave
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-t-4 border-t-amber-400">
          <CardContent className="p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Pending Requests</h3>
            <p className="text-3xl font-bold text-gray-900">4</p>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-blue-400">
          <CardContent className="p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Approved This Month</h3>
            <p className="text-3xl font-bold text-gray-900">12</p>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-green-400">
          <CardContent className="p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Employees on Leave</h3>
            <p className="text-3xl font-bold text-gray-900">3</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-gray-200/60 shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50/80">
            <TableRow className="border-gray-100 hover:bg-transparent">
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Employee</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Leave Type</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Duration</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Status</TableHead>
              <TableHead className="text-right text-xs font-semibold uppercase tracking-wider text-gray-500">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((req) => (
              <TableRow key={req.id} className="group border-gray-100">
                <TableCell>
                  <div className="font-medium text-gray-900">{req.employee}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{req.id}</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-700">{req.type}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{req.days} days</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-700">{req.start} <span className="text-gray-400 mx-1">to</span> {req.end}</div>
                </TableCell>
                <TableCell>
                  <StatusBadge status={req.status} />
                </TableCell>
                <TableCell className="text-right">
                  {req.status === 'Pending' ? (
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="outline" size="sm" className="h-8 text-green-600 border-green-200 hover:bg-green-50 hover:text-green-700">
                        <CheckCircle2 className="w-4 h-4 mr-1" />
                        Approve
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700">
                        <XCircle className="w-4 h-4 mr-1" />
                        Reject
                      </Button>
                    </div>
                  ) : (
                    <span className="text-xs text-gray-400">Processed</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
