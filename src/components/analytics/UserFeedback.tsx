
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Zap, SmileIcon, Clock, Edit } from "lucide-react";
import MetricCard from "./MetricCard";

interface UserFeedbackProps {
  selectedUser: string | null;
  selectedInteractionTypes: string[];
  selectedOffenseTypes: string[];
}

const UserFeedback: React.FC<UserFeedbackProps> = ({
  selectedUser,
  selectedInteractionTypes,
  selectedOffenseTypes
}) => {
  // In a real app, these values would be calculated based on the selected filters
  const metrics = [
    {
      title: "Median accuracy score",
      value: "9.2 / 10",
      change: "+0.3 from last month",
      changeType: "positive" as const,
      icon: <Star className="h-4 w-4 text-yellow-500" />,
    },
    {
      title: "Average efficiency score",
      value: "8.7 / 10",
      change: "+0.5 from last month",
      changeType: "positive" as const,
      icon: <Zap className="h-4 w-4 text-green-500" />,
    },
    {
      title: "Average satisfaction rating",
      value: "Very satisfied",
      change: "Same as last month",
      changeType: "neutral" as const,
      icon: <SmileIcon className="h-4 w-4 text-blue-500" />,
    },
    {
      title: "Average perceived time saved",
      value: "45 mins",
      change: "+5 mins from last month",
      changeType: "positive" as const,
      icon: <Clock className="h-4 w-4 text-purple-500" />,
    },
    {
      title: "Average edit count",
      value: "4.2",
      change: "-0.8 from last month",
      changeType: "positive" as const,
      icon: <Edit className="h-4 w-4 text-orange-500" />,
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">User Feedback Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
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
      
      <div className="mt-3 text-sm text-gray-500">
        {selectedUser || selectedInteractionTypes.length > 0 || selectedOffenseTypes.length > 0 ? (
          <div className="p-2 bg-blue-50 border border-blue-100 rounded-md">
            Feedback metrics are filtered based on your current selection.
          </div>
        ) : (
          <div className="p-2 bg-gray-50 border border-gray-100 rounded-md">
            Showing feedback metrics for all sessions.
          </div>
        )}
      </div>
    </div>
  );
};

export default UserFeedback;
