
import React from "react";
import MetricCard from "./MetricCard";
import { Clock, BarChart, Zap } from "lucide-react";

const MetricsGrid = () => {
  return (
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
  );
};

export default MetricsGrid;
