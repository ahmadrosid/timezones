"use client";

import { useState } from "react";
import { timezones } from "@/lib/timezones";
import { useDebouncedCallback } from "use-debounce";
import { Combobox } from "@headlessui/react";
import { LoaderCircle } from "lucide-react";

type SelectedValue = {
  value: string;
  label: string;
};

async function searchTimezoneByCity(city: string) {
  const response = await fetch(
    "https://api.ahmadrosid.com/timezones/search?city=" + city
  );
  const data = await response.json();
  if (data.length === 0) {
    return undefined;
  }

  return data.map((item: any) => ({
    value: item.timezone,
    label: item.timezone + " - " + item.city,
  }));
}

function compareDepartments(a: SelectedValue, b: SelectedValue) {
  if (!a) return false;
  if (!b) return false;
  return a.label.toLowerCase() === b.label.toLowerCase();
}

export function SelectTimeZone({
  onSelect,
}: {
  onSelect: (value: SelectedValue) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState(timezones);

  const handleSearch = useDebouncedCallback(
    (query) => {
      setLoading(true);
      searchTimezoneByCity(query).then((data) => {
        if (data) {
          setOptions(data);
        }
      }).finally(() => setLoading(false));
    },
    1000
  );

  const onChange = (value: SelectedValue) => {
    onSelect(value);
  };

  return (
    <Combobox by={compareDepartments} onChange={onChange}>
      <div className="relative">
        <Combobox.Input
          className="border rounded-md p-2 text-sm shadow-sm cursor-text w-full"
          placeholder="Select timezone.."
          onChange={(event) => handleSearch(event.target.value)}
          displayValue={(item: SelectedValue) => item.value}
        />
        <div className="absolute right-2 top-2">
          {loading && (<LoaderCircle className="animate-spin text-blue-800/50" />)}
        </div>
      </div>
      <Combobox.Options
        static
        className="h-[300px] overflow-y-auto border rounded-md shadow-sm"
      >
        {options.map((option, index) => (
          <Combobox.Option
            key={option.label + index}
            value={option}
            className="hover:bg-blue-500 hover:text-gray-100 cursor-pointer px-2 py-1.5 text-sm"
          >
            {option.label}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
}