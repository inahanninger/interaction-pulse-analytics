
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AreaChart } from "@/components/AreaChart";

const SessionsChart = () => {
  return (
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
  );
};

export default SessionsChart;
