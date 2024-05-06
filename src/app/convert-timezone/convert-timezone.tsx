"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectTimeZone } from "@/components/select-timezone";
import { DisplayConvertTimezone } from "./display-convert-timezone";

const hourOptions = Array.from({ length: 24 }, (_, i) =>
  i.toString().padStart(2, "0")
);
const minuteOptions = Array.from({ length: 60 }, (_, i) =>
  i.toString().padStart(2, "0")
);

type ConvertTimezoneItem = {
  timeStr: string;
  sourceTimezone: string;
  targetTimezone: string;
};

export function ConvertTimezone() {
  const [open, setOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedMinute, setSelectedMinute] = useState("");
  const [sourceTimezone, setSourceTimezone] = useState("");
  const [targetTimezone, setTargetTimezone] = useState("");
  const [data, setData] = useState<ConvertTimezoneItem[]>([
    {
      timeStr: '06:40',
      sourceTimezone: 'Asia/Jakarta',
      targetTimezone: 'Australia/Sydney',
    }
  ]);

  return (
    <div className="py-6 max-w-2xl mx-auto space-y-4">
      <div className="text-left space-x-4">
        <Link href="/">
          <Button variant={"link"}>{"<- "} Back</Button>
        </Link>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Convert Timezone</Button>
          </DialogTrigger>
          <DialogContent className="max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Input timezone</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <label className="py-1.5 text-sm font-semibold">Set time</label>
              <div className="flex gap-2">
                <Select onValueChange={(value) => setSelectedHour(value)}>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Hour" />
                  </SelectTrigger>
                  <SelectContent>
                    {hourOptions.map((hour) => (
                      <SelectItem key={hour} value={hour}>
                        {hour}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select onValueChange={(value) => setSelectedMinute(value)}>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Minute" />
                  </SelectTrigger>
                  <SelectContent>
                    {minuteOptions.map((minute) => (
                      <SelectItem key={minute} value={minute}>
                        {minute}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-between gap-2">
                <div className="flex flex-col gap-2 w-full">
                  <label className="py-1.5 text-sm font-semibold">
                    Origin timezone
                  </label>
                  <SelectTimeZone
                    onSelect={(value) => setSourceTimezone(value.value)}
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="py-1.5 text-sm font-semibold">
                    Target timezone
                  </label>
                  <SelectTimeZone
                    onSelect={(value) => setTargetTimezone(value.value)}
                  />
                </div>
              </div>

              <Button
                onClick={() => {
                  setOpen(false);
                  setData((prev) => [
                    ...prev,
                    {
                      timeStr: `${selectedHour}:${selectedMinute}`,
                      sourceTimezone: sourceTimezone,
                      targetTimezone: targetTimezone,
                    },
                  ]);
                }}
              >
                Convert
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-3">
        {data.map((item) => (
          <DisplayConvertTimezone
            key={item.timeStr}
            timeStr={item.timeStr}
            sourceTimezone={item.sourceTimezone}
            targetTimezone={item.targetTimezone}
          />
        ))}
      </div>
    </div>
  );
}
