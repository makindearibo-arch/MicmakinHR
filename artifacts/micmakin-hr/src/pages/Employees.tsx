import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/button";
import { Plus, Search, Filter, Mail, Edit, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Employees() {
  const [searchTerm, setSearchTerm] = useState('');

  const employees = [
    { id: 'EMP-001', name: 'John Doe', email: 'john@micmakin.com', role: 'Software Engineer', department: 'Engineering', status: 'Active', subsidiary: 'Micmakin UK' },
    { id: 'EMP-002', name: 'Jane Smith', email: 'jane@micmakin.com', role: 'Product Manager', department: 'Product', status: 'Active', subsidiary: 'Micmakin UK' },
    { id: 'EMP-003', name: 'Michael Johnson', email: 'michael@micmakin.com', role: 'Sales Rep', department: 'Sales', status: 'Inactive', subsidiary: 'Micmakin Nigeria' },
    { id: 'EMP-004', name: 'Sarah Williams', email: 'sarah@micmakin.com', role: 'HR Director', department: 'HR', status: 'Active', subsidiary: 'Micmakin UK' },
    { id: 'EMP-005', name: 'David Brown', email: 'david@micmakin.com', role: 'Marketing Lead', department: 'Marketing', status: 'Active', subsidiary: 'Micmakin Nigeria' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Employees</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your workforce directory and profiles</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm transition-all shadow-primary/20">
          <Plus className="w-4 h-4 mr-2" />
          Add Employee
        </Button>
      </div>

      <Card className="border-gray-200/60 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input 
              placeholder="Search employees..." 
              className="pl-9 bg-white border-gray-200 focus:border-primary focus:ring-primary/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="w-full sm:w-auto bg-white border-gray-200 text-gray-700 hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
        
        <Table>
          <TableHeader className="bg-gray-50/80">
            <TableRow className="border-gray-100 hover:bg-transparent">
              <TableHead className="w-[300px] text-xs font-semibold uppercase tracking-wider text-gray-500">Employee</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">ID / Role</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Department</TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-gray-500">Status</TableHead>
              <TableHead className="text-right text-xs font-semibold uppercase tracking-wider text-gray-500">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((emp) => (
              <TableRow key={emp.id} className="group border-gray-100 transition-colors hover:bg-primary/5">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                      {emp.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{emp.name}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        <Mail className="w-3 h-3" />
                        {emp.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm font-medium text-gray-900">{emp.id}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{emp.role}</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-700">{emp.department}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{emp.subsidiary}</div>
                </TableCell>
                <TableCell>
                  <StatusBadge status={emp.status} />
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50">
                      <Trash2 className="w-4 h-4" />
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
