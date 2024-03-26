"use client";

import Select from "react-tailwindcss-select";
import { useState } from "react";

const asiaTimezones = {
  "Asia/Kolkata": "GMT+5:30",
  "Asia/Dhaka": "GMT+6",
  "Asia/Thimphu": "GMT+6",
  "Asia/Rangoon": "GMT+6:30",
  "Indian/Cocos": "GMT+6:30",
  "Asia/Bangkok": "GMT+7",
  "Asia/Shanghai": "GMT+8",
  "Asia/Manila": "GMT+8",
  "Asia/Singapore": "GMT+8",
  "Asia/Kuala_Lumpur": "GMT+8",
  "Asia/Jakarta": "GMT+8",
  "Asia/Tokyo": "GMT+9",
  "Asia/Seoul": "GMT+9",
  "Asia/Jayapura": "GMT+9",
  "Australia/Adelaide": "GMT+9:30",
  "Australia/Sydney": "GMT+10",
  "Pacific/Guadalcanal": "GMT+11",
  "Pacific/Efate": "GMT+11",
  "Pacific/Auckland": "GMT+12",
  "Pacific/Fiji": "GMT+12",
  "Pacific/Tongatapu": "GMT+13",
  "Pacific/Kiritimati": "GMT+14",
};

const options = Object.entries(asiaTimezones).map(([key, value]) => ({
  value: key,
  label: `${key} (${value})`,
}));

type SelectedValue = typeof options[number];

export function SelectTimeZone({ onSelect } : { onSelect: (value: SelectedValue) => void }) {
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
