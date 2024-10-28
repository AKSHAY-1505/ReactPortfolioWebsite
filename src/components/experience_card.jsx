import React from "react";

function ExperienceCard({ company_logo, designation, time_period, children }) {
  return (
    <div className="flex flex-col gap-7 border border-zinc-500 rounded-[10px] px-6 py-[30px]">
      <div className="flex justify-between">
        <div className="flex gap-[30px]">
          <img src={company_logo} className="h-8 w-8" />
          <p className="text-white text-2xl font-semibold">{designation}</p>
        </div>
        <p className="text-zinc-300 text-base font-semibold">{time_period}</p>
      </div>
      <p className="text-zinc-300 text-base">{children}</p>
    </div>
  );
}

export default ExperienceCard;
