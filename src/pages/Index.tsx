
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { DateRangePicker } from "@/components/DateRangePicker";
import TopMetrics from "@/components/analytics/TopMetrics";
import TimeSeriesChart from "@/components/analytics/TimeSeriesChart";
import UserEngagement from "@/components/analytics/UserEngagement";
import SessionDistribution from "@/components/analytics/SessionDistribution";
import UserFeedback from "@/components/analytics/UserFeedback";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedInteractionTypes, setSelectedInteractionTypes] = useState<string[]>([]);
  const [selectedOffenseTypes, setSelectedOffenseTypes] = useState<string[]>([]);

  // Handler for when a user bar is clicked in UserEngagement chart
  const handleUserSelect = (userId: string) => {
    setSelectedUser(userId === selectedUser ? null : userId);
  };

  // Handler for interaction type selection
  const handleInteractionTypeSelect = (types: string[]) => {
    setSelectedInteractionTypes(types);
  };

  // Handler for offense type selection
  const handleOffenseTypeSelect = (types: string[]) => {
    setSelectedOffenseTypes(types);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6 max-w-7xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Analytics Dashboard</h1>
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

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-2">Date Range</p>
            <DateRangePicker />
          </div>
          
          <Button className="bg-gray-900 hover:bg-gray-700">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>

        <div className="space-y-8">
          {/* Top Metrics Cards */}
          <TopMetrics 
            selectedUser={selectedUser}
            selectedInteractionTypes={selectedInteractionTypes}
            selectedOffenseTypes={selectedOffenseTypes}
          />
          
          {/* Time Series Visualization */}
          <TimeSeriesChart 
            selectedUser={selectedUser}
            selectedInteractionTypes={selectedInteractionTypes}
            selectedOffenseTypes={selectedOffenseTypes}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* User Engagement Section */}
            <UserEngagement 
              onUserSelect={handleUserSelect}
              selectedUser={selectedUser}
            />
            
            {/* Session Distribution Visualizations */}
            <SessionDistribution 
              onInteractionTypeSelect={handleInteractionTypeSelect}
              onOffenseTypeSelect={handleOffenseTypeSelect}
              selectedInteractionTypes={selectedInteractionTypes}
              selectedOffenseTypes={selectedOffenseTypes}
            />
          </div>
          
          {/* User Feedback Analytics */}
          <UserFeedback 
            selectedUser={selectedUser}
            selectedInteractionTypes={selectedInteractionTypes}
            selectedOffenseTypes={selectedOffenseTypes}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
