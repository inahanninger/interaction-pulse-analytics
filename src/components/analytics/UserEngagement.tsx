
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface UserEngagementProps {
  onUserSelect: (userId: string) => void;
  selectedUser: string | null;
}

const UserEngagement: React.FC<UserEngagementProps> = ({ onUserSelect, selectedUser }) => {
  // Sample data - in a real app, this would be actual user data
  const data = [
    { name: 'Officer Smith', id: 'user1', sessions: 78 },
    { name: 'Detective Jones', id: 'user2', sessions: 67 },
    { name: 'Sergeant Davis', id: 'user3', sessions: 54 },
    { name: 'Officer Rodriguez', id: 'user4', sessions: 49 },
    { name: 'Officer Lee', id: 'user5', sessions: 43 },
    { name: 'Detective Wilson', id: 'user6', sessions: 38 },
    { name: 'Officer Taylor', id: 'user7', sessions: 34 },
    { name: 'Sergeant Brown', id: 'user8', sessions: 29 },
    { name: 'Officer Chen', id: 'user9', sessions: 26 },
    { name: 'Detective Patel', id: 'user10', sessions: 22 }
  ];
  
  const handleBarClick = (data: any) => {
    onUserSelect(data.id);
  };
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-medium">Top Users by Session Count</h3>
          <p className="text-sm text-gray-500">Click on a bar to filter dashboard by user</p>
        </div>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" />
              <YAxis 
                dataKey="name" 
                type="category" 
                tick={{ fontSize: 12 }}
                width={80}
              />
              <Tooltip
                formatter={(value) => [`${value} sessions`, 'Total']}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px'
                }}
              />
              <Bar 
                dataKey="sessions" 
                fill={selectedUser ? "#d4d4d8" : "#8884d8"}
                onClick={handleBarClick}
                cursor="pointer"
              >
                {data.map((entry, index) => (
                  <Bar 
                    key={`bar-${index}`}
                    dataKey="sessions"
                    fill={entry.id === selectedUser ? "#4f46e5" : "#8884d8"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        {selectedUser && (
          <div className="mt-3 flex justify-center">
            <button 
              onClick={() => onUserSelect(selectedUser)} 
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Clear user selection
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UserEngagement;
