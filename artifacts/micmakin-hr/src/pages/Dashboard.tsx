import React from "react";
import { Users, UserCheck, CalendarOff, Receipt, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Dashboard() {
  const stats = [
    {
      title: "Total Employees",
      value: "142",
      change: "+4 this month",
      trend: "up",
      icon: Users,
      color: "bg-blue-500/10 text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      title: "Active Employees",
      value: "138",
      change: "97% attendance",
      trend: "up",
      icon: UserCheck,
      color: "bg-green-500/10 text-green-600",
      borderColor: "border-green-200"
    },
    {
      title: "On Leave",
      value: "4",
      change: "-2 from yesterday",
      trend: "down",
      icon: CalendarOff,
      color: "bg-amber-500/10 text-amber-600",
      borderColor: "border-amber-200"
    },
    {
      title: "Pending Payroll",
      value: "₦12.4M",
      change: "Ready for review",
      trend: "neutral",
      icon: Receipt,
      color: "bg-purple-500/10 text-purple-600",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className={`relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md border-t-4 ${stat.borderColor.replace('border-', 'border-t-')}`}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                {stat.trend === 'up' && <ArrowUpRight className="w-4 h-4 text-green-500" />}
                {stat.trend === 'down' && <ArrowDownRight className="w-4 h-4 text-red-500" />}
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-bold tracking-tight text-gray-900">{stat.value}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{stat.title}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600 font-medium">{stat.change}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Leave request approved</p>
                    <p className="text-xs text-gray-500">John Doe's annual leave request was approved by HR Manager.</p>
                    <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-primary/50 hover:bg-primary/5 transition-all text-sm font-medium text-gray-700">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Users className="w-4 h-4" />
              </div>
              Add Employee
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-primary/50 hover:bg-primary/5 transition-all text-sm font-medium text-gray-700">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                <CalendarOff className="w-4 h-4" />
              </div>
              Review Leave Requests
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-primary/50 hover:bg-primary/5 transition-all text-sm font-medium text-gray-700">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                <Receipt className="w-4 h-4" />
              </div>
              Run Payroll
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
