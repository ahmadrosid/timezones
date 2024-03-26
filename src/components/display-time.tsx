import { useCallback, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrashIcon } from "lucide-react";

function getDateInTimeZone(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

export function DisplayTime({
  timezone,
  onDelete,
}: {
  timezone?: string;
  onDelete?: () => void;
}) {
  const [time, setTime] = useState("");
  const [selectedTimeZone, setTimezone] = useState(timezone);

  const updateTime = useCallback(() => {
    const newDate = new Date();
    if (timezone) {
      const newDateString = getDateInTimeZone(newDate, timezone);
      setTime(newDateString);
    } else {
      setTime(newDate.toLocaleTimeString());
    }
  }, [timezone]);

  useEffect(() => {
    if (time === "") {
      updateTime();
    }

    if (!selectedTimeZone) {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setTimezone(timezone);
    }

    const interval = setInterval(() => {
      updateTime();
    }, 1000);
    return () => clearInterval(interval);
  }, [selectedTimeZone, time, timezone, updateTime]);

  if (selectedTimeZone === "") {
    return null;
  }

  return (
    <div className="relative">
      {time != "" && (
        <div className="absolute right-3 bottom-3">
          <TrashIcon
            className="w-4 h-4 text-gray-200 hover:text-red-300 cursor-pointer"
            onClick={onDelete}
          />
        </div>
      )}
      <Card>
        <CardHeader>
          <CardTitle>
            <time dateTime={time}>{time}</time>
          </CardTitle>
          <CardDescription>{selectedTimeZone}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
