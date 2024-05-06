import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeftRight } from "lucide-react";
import moment from "moment-timezone";

type TimezoneInputInterface = {
  timeStr: string;
  sourceTimezone: string;
  targetTimezone: string;
};

function parseHour(hourStr: string): Date {
    const [hours, minutes] = hourStr.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
}

function convertTimeZone(data: TimezoneInputInterface) {
    const { timeStr, sourceTimezone, targetTimezone } = data;
  
    const time = parseHour(timeStr);
    const Current = moment.tz(time, sourceTimezone);
    const Target = Current.clone().tz(targetTimezone);
    return Target.format('HH:mm');
  }
  
export function DisplayConvertTimezone({
  timeStr,
  sourceTimezone,
  targetTimezone,
}: TimezoneInputInterface) {
  const targetTimeStr = convertTimeZone({
    timeStr,
    sourceTimezone,
    targetTimezone,
  });

  return (
    <div className="flex">
      <Card>
        <CardHeader>
          <CardTitle>
            <time dateTime={timeStr}>{timeStr}</time>
          </CardTitle>
          <CardDescription>{sourceTimezone}</CardDescription>
        </CardHeader>
      </Card>
      <p className="justify-center flex items-center p-2">
        <ArrowLeftRight />
      </p>
      <Card>
        <CardHeader>
          <CardTitle>
            <time dateTime={targetTimeStr}>{targetTimeStr}</time>
          </CardTitle>
          <CardDescription>{targetTimezone}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
