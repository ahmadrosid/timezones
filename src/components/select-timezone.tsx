"use client";

import Select from "react-tailwindcss-select";
import { useState } from "react";
import { timezones } from "@/lib/timezones";
const options = timezones;

type SelectedValue = {
  value: string;
  label: string;
};

export function SelectTimeZone({
  onSelect,
}: {
  onSelect: (value: SelectedValue) => void;
}) {
  const [selected, setSelected] = useState(options[0]);
  const handleChange = (value: any) => {
    setSelected(value);
    onSelect(value);
  };

  return (
    <Select
      primaryColor={"indigo"}
      value={selected}
      onChange={handleChange}
      options={options}
      isSearchable
      placeholder="Select a timezone"
    />
  );
}
