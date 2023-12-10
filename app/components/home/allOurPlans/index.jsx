"use client";
import { useState } from "react";
import { Switch } from "./swtitch";
import { PlanCard } from "./planCard";

export const AllOurPlans = () => {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <section className="dashes flex items-center justify-center flex-col mt-10">
      <div className="uppercase text-center font-medium">
        <h3>here are all our plans</h3>
        <span className="flex mt-5">
          Monthly
          <Switch isActive={isYearly} setIsActive={setIsYearly} />
          Yearly
        </span>
      </div>
      <div className="flex flex-row justify-between flex-wrap px-28 ">
        <PlanCard available={[1, 0, 0, 0, 0]} name={"FREE TRIAL"} />
        <PlanCard available={[1, 1, 0, 0, 0]} name={"MONTH"} price={"20"} />
        <PlanCard
          available={[1, 1, 1, 0, 0]}
          name={"PREMIUM MONTH"}
          price={"35"}
        />
        <PlanCard
          available={[1, 1, 1, 1, 1]}
          name={"PREMIUM YEAR"}
          price={"70"}
        />
      </div>
    </section>
  );
};
