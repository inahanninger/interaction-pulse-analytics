import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface SessionDistributionProps {
  onInteractionTypeSelect: (types: string[]) => void;
  onOffenseTypeSelect: (types: string[]) => void;
  selectedInteractionTypes: string[];
  selectedOffenseTypes: string[];
}

const SessionDistribution: React.FC<SessionDistributionProps> = ({
  onInteractionTypeSelect,
  onOffenseTypeSelect,
  selectedInteractionTypes,
  selectedOffenseTypes
}) => {
  const [activeTab, setActiveTab] = useState("interactionType");
  
  // Sample data for interaction types
  const interactionTypeData = [
    { name: 'Witness Interview', value: 45, id: 'witnessInterview' },
    { name: 'Victim Statement', value: 30, id: 'victimStatement' },
    { name: 'Suspect Interview', value: 15, id: 'suspectInterview' },
    { name: 'Field Report', value: 10, id: 'fieldReport' }
  ];
  
  // Sample data for offense types
  const offenseTypeData = [
    { name: 'Theft', value: 35, id: 'theft' },
    { name: 'Assault', value: 25, id: 'assault' },
    { name: 'Burglary', value: 15, id: 'burglary' },
    { name: 'Drug Offenses', value: 15, id: 'drugOffenses' },
    { name: 'Vandalism', value: 10, id: 'vandalism' }
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82ca9d'];
  
  const handleInteractionTypeClick = (entry: any) => {
    const typeId = entry.id;
    const newSelection = selectedInteractionTypes.includes(typeId)
      ? selectedInteractionTypes.filter(id => id !== typeId)
      : [...selectedInteractionTypes, typeId];
    
    onInteractionTypeSelect(newSelection);
  };
  
  const handleOffenseTypeClick = (entry: any) => {
    const typeId = entry.id;
    const newSelection = selectedOffenseTypes.includes(typeId)
      ? selectedOffenseTypes.filter(id => id !== typeId)
      : [...selectedOffenseTypes, typeId];
    
    onOffenseTypeSelect(newSelection);
  };
  
  const renderInteractionTypeBadges = () => {
    if (selectedInteractionTypes.length === 0) return null;
    
    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {selectedInteractionTypes.map(typeId => {
          const type = interactionTypeData.find(t => t.id === typeId);
          return (
            <Badge 
              key={typeId} 
              variant="outline"
              className="cursor-pointer"
              onClick={() => handleInteractionTypeClick({id: typeId})}
            >
              {type?.name} ✕
            </Badge>
          );
        })}
      </div>
    );
  };
  
  const renderOffenseTypeBadges = () => {
    if (selectedOffenseTypes.length === 0) return null;
    
    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {selectedOffenseTypes.map(typeId => {
          const type = offenseTypeData.find(t => t.id === typeId);
          return (
            <Badge 
              key={typeId} 
              variant="outline"
              className="cursor-pointer"
              onClick={() => handleOffenseTypeClick({id: typeId})}
            >
              {type?.name} ✕
            </Badge>
          );
        })}
      </div>
    );
  };
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Session Distribution</CardTitle>
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full mt-2"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="interactionType">Interaction Type</TabsTrigger>
            <TabsTrigger value="offenseType">Offense Type</TabsTrigger>
          </TabsList>
          
          <TabsContent value="interactionType" className="mt-2">
            <div className="text-sm text-gray-500 mb-2">Click segments to filter by interaction type</div>
            {renderInteractionTypeBadges()}
            <div className="h-[300px] mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={interactionTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    onClick={handleInteractionTypeClick}
                    cursor="pointer"
                  >
                    {interactionTypeData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={selectedInteractionTypes.includes(entry.id) ? COLORS[index % COLORS.length] : `${COLORS[index % COLORS.length]}88`}
                        stroke={selectedInteractionTypes.includes(entry.id) ? '#fff' : 'none'}
                        strokeWidth={selectedInteractionTypes.includes(entry.id) ? 2 : 0}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="offenseType" className="mt-2">
            <div className="text-sm text-gray-500 mb-2">Click bars to filter by offense type</div>
            {renderOffenseTypeBadges()}
            <div className="h-[300px] mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={offenseTypeData}
                  margin={{ top: 20, right: 30, left: 80, bottom: 5 }}
                >
                  <XAxis type="number" tickFormatter={(value) => `${value}%`} />
                  <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} width={80} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                  <Bar 
                    dataKey="value" 
                    fill="#8884d8" 
                    onClick={handleOffenseTypeClick}
                    cursor="pointer"
                  >
                    {offenseTypeData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={selectedOffenseTypes.includes(entry.id) ? COLORS[index % COLORS.length] : `${COLORS[index % COLORS.length]}88`}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardHeader>
      <CardContent>
        {/* Empty CardContent to maintain structure */}
      </CardContent>
    </Card>
  );
};

export default SessionDistribution;
