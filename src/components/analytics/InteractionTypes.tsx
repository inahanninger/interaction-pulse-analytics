
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpDownIcon } from "lucide-react";
import InteractionTypeRow from "./InteractionTypeRow";

const InteractionTypes = () => {
  return (
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
  );
};

export default InteractionTypes;
