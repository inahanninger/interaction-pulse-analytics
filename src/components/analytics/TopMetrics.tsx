
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Zap, CheckCircle2, Timer, Save } from "lucide-react";
import MetricCard from "./MetricCard";

interface TopMetricsProps {
  selectedUser: string | null;
  selectedInteractionTypes: string[];
  selectedOffenseTypes: string[];
}

const TopMetrics: React.FC<TopMetricsProps> = ({ 
  selectedUser, 
  selectedInteractionTypes, 
  selectedOffenseTypes 
}) => {
  // In a real app, these values would be calculated based on the selected filters
  const metrics = [
    {
      title: "Total number of sessions",
      value: "1,243",
      change: "+5.4% from last month",
      changeType: "positive" as const,
      icon: <CheckCircle2 className="h-4 w-4 text-blue-500" />
    },
    {
      title: "Average recording time per session",
      value: "17.2 mins",
      change: "-2.1% from last month",
      changeType: "negative" as const,
      icon: <Clock className="h-4 w-4 text-purple-500" />
    },
    {
      title: "Total number of users",
      value: "87",
      change: "+12 new users this month",
      changeType: "positive" as const,
      icon: <Users className="h-4 w-4 text-green-500" />
    },
    {
      title: "Average output generation time",
      value: "42.5 secs",
      change: "-7.8% from last month",
      changeType: "positive" as const,
      icon: <Zap className="h-4 w-4 text-amber-500" />
    },
    {
      title: "Average time to completion",
      value: "32.4 mins",
      change: "Same as last month",
      changeType: "neutral" as const,
      icon: <Timer className="h-4 w-4 text-red-500" />
    },
    {
      title: "Total time saved across all sessions",
      value: "873 hrs",
      change: "+12.6% from last month",
      changeType: "positive" as const,
      icon: <Save className="h-4 w-4 text-indigo-500" />
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Key Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            changeType={metric.changeType}
            icon={metric.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default TopMetrics;
