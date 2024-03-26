"use client";

import { DisplayTime } from "@/components/display-time";
import { SelectTimeZone } from "@/components/select-timezone";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

export default function ClientComponent() {
  const [open, setOpen] = useState(false);
  const [timezones, setTimezones] = useState<string[]>([]);

  useEffect(() => {
    const storedTimezones = localStorage.getItem("timezones");
    if (storedTimezones) {
      setTimezones(JSON.parse(storedTimezones));
    }
  }, []);

  const updateTimezones = (timezones: string[]) => {
    setTimezones(timezones);
    localStorage.setItem("timezones", JSON.stringify(timezones));
  }

  const deletTimezone = (timezone: string) => {
    setTimezones(timezones.filter((t) => t !== timezone));
    localStorage.setItem("timezones", JSON.stringify(timezones.filter((t) => t !== timezone)));
  }

  return (
      <div className="py-6 max-w-2xl mx-auto space-y-4">
        <div className="text-center">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>Add timezones</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Select timezone</DialogTitle>
              </DialogHeader>
              <SelectTimeZone onSelect={(value) => {
                updateTimezones([...timezones, value.value]);
                setOpen(false)
              }} />
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-3">
          <DisplayTime />
          {timezones.map((timezone) => (
            <DisplayTime key={timezone} timezone={timezone} onDelete={() => deletTimezone(timezone)} />
          ))}
        </div>
      </div>
  );
}
