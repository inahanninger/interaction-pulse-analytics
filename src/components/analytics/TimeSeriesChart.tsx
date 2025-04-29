
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

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
  const [timeRange, setTimeRange] = useState("all-time");
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined
  });
  
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

  // Date range display text
  const getDateRangeText = () => {
    switch (timeRange) {
      case '24h':
        return 'Last 24 Hours';
      case '7days':
        return 'Last 7 Days';
      case '30days':
        return 'Last 30 Days';
      case 'custom':
        return dateRange.from && dateRange.to 
          ? `${format(dateRange.from, "MMM dd, yyyy")} - ${format(dateRange.to, "MMM dd, yyyy")}`
          : "Custom Range";
      case 'all-time':
      default:
        return 'All Time';
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Sessions Over Time</h2>
        <Popover>
          <PopoverTrigger asChild>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 px-3"
            >
              <CalendarIcon className="h-4 w-4" />
              <span>{getDateRangeText()}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <div className="p-2 space-y-2">
              <div className="grid grid-cols-1 gap-2">
                <Button 
                  variant={timeRange === "all-time" ? "default" : "outline"} 
                  className="justify-start"
                  onClick={() => setTimeRange("all-time")}
                >
                  All Time
                </Button>
                <Button 
                  variant={timeRange === "30days" ? "default" : "outline"} 
                  className="justify-start"
                  onClick={() => setTimeRange("30days")}
                >
                  Last 30 Days
                </Button>
                <Button 
                  variant={timeRange === "7days" ? "default" : "outline"} 
                  className="justify-start"
                  onClick={() => setTimeRange("7days")}
                >
                  Last 7 Days
                </Button>
                <Button 
                  variant={timeRange === "24h" ? "default" : "outline"} 
                  className="justify-start"
                  onClick={() => setTimeRange("24h")}
                >
                  Last 24 Hours
                </Button>
              </div>
              <div className="pt-2 border-t">
                <div className="text-sm font-medium mb-2">Custom Range:</div>
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={(range) => {
                    setDateRange(range || { from: undefined, to: undefined });
                    if (range?.from && range?.to) {
                      setTimeRange("custom");
                    }
                  }}
                  numberOfMonths={1}
                  className={cn("p-3 pointer-events-auto rounded-md border")}
                />
              </div>
            </div>
          </PopoverContent>
        </Popover>
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
