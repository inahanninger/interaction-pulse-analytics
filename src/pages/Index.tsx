import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  Calendar, 
  Clock, 
  Download, 
  Info, 
  Pencil, 
  Search, 
  ArrowUpDownIcon,  // Replace SortIcon with ArrowUpDownIcon 
  Zap
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AreaChart } from "@/components/AreaChart";
import { DateRangePicker } from "@/components/DateRangePicker";
import { mockAnalyticsData } from "@/data/mockData";

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard 
              title="Time saved, per case (avg)"
              value="2.1 hrs"
              change="+2.1% from last month"
              changeType="positive"
              icon={<Clock className="h-4 w-4 text-gray-500" />}
            />
            
            <MetricCard 
              title="Monthly time saved"
              value="321 hrs"
              change="-1% from last month"
              changeType="negative"
              icon={<Clock className="h-4 w-4 text-gray-500" />}
            />
            
            <MetricCard 
              title="Sessions per user per week"
              value="12"
              change="-4.1% from last month"
              changeType="negative"
              icon={<BarChart className="h-4 w-4 text-gray-500" />}
            />
            
            <MetricCard 
              title="Generation time"
              value="132 mins"
              change="Same last month"
              changeType="neutral"
              icon={<Zap className="h-4 w-4 text-gray-500" />}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-medium">Interaction Type</h3>
                    <p className="text-sm text-gray-500">There have been 1,001 sessions this month.</p>
                  </div>
                  <button className="flex items-center text-sm text-gray-500">
                    <ArrowUpDownIcon className="h-4 w-4 mr-1" />
                    Sort
                  </button>
                </div>
                
                <div className="space-y-4">
                  <InteractionTypeRow 
                    label="Theft"
                    value={289}
                    description="- 1 this week"
                  />
                  
                  <InteractionTypeRow 
                    label="Domestic Violence and Assault"
                    value={120}
                    description="+ 12 this week"
                  />
                  
                  <InteractionTypeRow 
                    label="Sexual Offences"
                    value={111}
                    description="Subtext."
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-medium">Sessions</h3>
                    <p className="text-sm text-gray-500">There have been 1,001 sessions this month.</p>
                  </div>
                  <Select defaultValue="monthly">
                    <SelectTrigger className="w-[110px]">
                      <SelectValue placeholder="Monthly" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="h-[250px] mt-4">
                  <AreaChart />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-medium">Content accuracy (avg)</h3>
                  <Info className="h-4 w-4 text-gray-400" />
                </div>
                
                <div className="flex gap-2 mt-6">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <div 
                      key={rating}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                        rating === 4 
                          ? 'bg-green-100 text-green-700 border-2 border-green-500' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {rating}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-medium">Officer satisfaction (avg)</h3>
                  <Info className="h-4 w-4 text-gray-400" />
                </div>
                
                <div className="mt-6">
                  <h2 className="text-2xl font-bold">Very happy</h2>
                  <p className="text-sm text-gray-500">Same last month</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-medium">Edit percentage (avg)</h3>
                  <Pencil className="h-4 w-4 text-gray-400" />
                </div>
                
                <div className="mt-6">
                  <h2 className="text-2xl font-bold">41%</h2>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-medium">Time to review outputs</h3>
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                
                <div className="mt-6">
                  <h2 className="text-2xl font-bold">17 mins</h2>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, changeType, icon }) => {
  const getChangeColor = () => {
    switch (changeType) {
      case 'positive':
        return 'text-green-600';
      case 'negative':
        return 'text-red-600';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          {icon}
        </div>
        <div>
          <h2 className="text-2xl font-bold">{value}</h2>
          <p className={`text-sm ${getChangeColor()}`}>{change}</p>
        </div>
      </CardContent>
    </Card>
  );
};

interface InteractionTypeRowProps {
  label: string;
  value: number;
  description: string;
}

const InteractionTypeRow: React.FC<InteractionTypeRowProps> = ({ label, value, description }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
};

export default Index;
