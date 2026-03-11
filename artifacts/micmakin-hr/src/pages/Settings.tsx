import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Settings() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Settings</h1>
          <p className="text-sm text-gray-500 mt-1">Manage system configurations and company policies</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="company" className="w-full">
        <TabsList className="bg-gray-100/50 p-1 rounded-lg">
          <TabsTrigger value="company" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md">Company</TabsTrigger>
          <TabsTrigger value="leave" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md">Leave Policies</TabsTrigger>
          <TabsTrigger value="roles" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md">Roles & Permissions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="company" className="mt-6">
          <Card className="border-gray-200/60 shadow-sm">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Company Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Company Name</label>
                  <Input defaultValue="Micmakin" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Registration Number</label>
                  <Input defaultValue="RC12345678" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leave" className="mt-6">
          <Card className="border-gray-200/60 shadow-sm">
            <CardContent className="p-6">
              <p className="text-gray-500 text-sm">Leave policies configuration will go here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles" className="mt-6">
          <Card className="border-gray-200/60 shadow-sm">
            <CardContent className="p-6">
              <p className="text-gray-500 text-sm">Roles and permissions configuration will go here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
