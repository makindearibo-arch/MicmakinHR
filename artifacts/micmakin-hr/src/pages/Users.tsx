import React from 'react';
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function Users() {
  const users = [
    { id: 'USR-001', name: 'Admin User', email: 'admin@micmakin.com', role: 'admin', status: 'Active' },
    { id: 'USR-002', name: 'HR Manager', email: 'hr@micmakin.com', role: 'hr_manager', status: 'Active' },
    { id: 'USR-003', name: 'Payroll Admin', email: 'payroll@micmakin.com', role: 'payroll', status: 'Active' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">System Users</h1>
          <p className="text-sm text-gray-500 mt-1">Manage user accounts and role-based access</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
          <Plus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      <Card className="border-gray-200/60 shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50/80">
            <TableRow className="border-gray-100">
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Name</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Email</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Role</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Status</TableHead>
              <TableHead className="text-right text-xs font-semibold uppercase tracking-wider text-gray-500">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="group border-gray-100">
                <TableCell>
                  <div className="font-medium text-gray-900">{user.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{user.id}</div>
                </TableCell>
                <TableCell className="text-sm text-gray-700">{user.email}</TableCell>
                <TableCell>
                  <div className="capitalize text-sm font-medium text-gray-700">{user.role.replace('_', ' ')}</div>
                </TableCell>
                <TableCell>
                  <StatusBadge status={user.status} />
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="h-8">Edit Role</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
