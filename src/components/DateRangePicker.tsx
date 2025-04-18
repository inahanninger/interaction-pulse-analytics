
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function DateRangePicker({ className }: { className?: string }) {
  const [startDate] = React.useState<Date>(new Date(2024, 0, 20)); // Jan 20, 2024
  const [endDate] = React.useState<Date>(new Date(2024, 1, 9));   // Feb 9, 2024

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full md:w-[300px] justify-start text-left font-normal bg-white",
              !startDate && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {startDate && endDate ? (
              <>
                {format(startDate, "MMM dd, yyyy")} - {format(endDate, "MMM dd, yyyy")}
              </>
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="p-4 space-y-2 text-center">
            <div className="text-sm font-medium">Date selection would go here</div>
            <div className="text-xs text-gray-500">For demo purposes, we're showing a fixed date range</div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
