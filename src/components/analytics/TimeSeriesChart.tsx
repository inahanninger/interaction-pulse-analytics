
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TimeSeriesChartProps {
  selectedUser: string | null;
  selectedInteractionTypes: string[];
  selectedOffenseTypes: string[];
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({
  selectedUser,
  selectedInteractionTypes,
  selectedOffenseTypes
}) => {
  const [timeRange, setTimeRange] = useState("30days");
  
  // Sample data for sessions
  const data = [
    { date: '2024-01-01', sessions: 12 },
    { date: '2024-01-02', sessions: 19 },
    { date: '2024-01-03', sessions: 15 },
    { date: '2024-01-04', sessions: 25 },
    { date: '2024-01-05', sessions: 32 },
    { date: '2024-01-06', sessions: 18 },
    { date: '2024-01-07', sessions: 29 },
    { date: '2024-01-08', sessions: 41 },
    { date: '2024-01-09', sessions: 38 },
    { date: '2024-01-10', sessions: 25 },
    { date: '2024-01-11', sessions: 22 },
    { date: '2024-01-12', sessions: 28 },
  ];
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Sessions Over Time</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Select 
            value={timeRange} 
            onValueChange={setTimeRange}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">Past year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="sessions" 
                  stroke="#8884d8" 
                  activeDot={{ r: 8 }} 
                  name="Daily Sessions"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-center text-sm text-gray-500">
            {selectedUser ? `Filtered to user: ${selectedUser}` : 'Showing all users'}
            {selectedInteractionTypes.length > 0 && ` • Filtered by ${selectedInteractionTypes.length} interaction types`}
            {selectedOffenseTypes.length > 0 && ` • Filtered by ${selectedOffenseTypes.length} offense types`}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimeSeriesChart;
