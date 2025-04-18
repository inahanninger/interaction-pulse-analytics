
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DateRangePicker } from "@/components/DateRangePicker";
import MetricsGrid from "@/components/analytics/MetricsGrid";
import InteractionTypes from "@/components/analytics/InteractionTypes";
import SessionsChart from "@/components/analytics/SessionsChart";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6 max-w-7xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Analytics</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
            <Tabs 
              defaultValue="overview" 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full md:w-auto"
            >
              <TabsList className="bg-white border shadow-sm">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="userData">User Data</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </header>

        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">View</p>
              <Select defaultValue="allUsers">
                <SelectTrigger className="w-full md:w-[180px] bg-white">
                  <SelectValue placeholder="All users" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="allUsers">All users</SelectItem>
                  <SelectItem value="officers">Officers</SelectItem>
                  <SelectItem value="analysts">Analysts</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
              <DateRangePicker />
              <Button className="bg-gray-900 hover:bg-gray-700">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>

          <MetricsGrid />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InteractionTypes />
            <SessionsChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
