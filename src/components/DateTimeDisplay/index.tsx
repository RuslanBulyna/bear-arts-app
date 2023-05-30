import React from "react";

import { IDateTimeProps } from "@/types/Countdown";

const DateTimeDisplay = (props: IDateTimeProps) => {
  const { value, type, isDanger } = props;

  return (
    <div
      className={`${isDanger ? "countdown danger" : "countdown"} flex flex-col`}
    >
      <span className="rounded bg-black px-5 py-2 text-3xl font-bold text-white">
        {value}
      </span>
      <span className="uppercase">{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
