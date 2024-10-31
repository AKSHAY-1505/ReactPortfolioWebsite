import React from "react";
import ThinAndThickTitle from "../components/thin_and_thick_title";
import ExperienceCard from "../components/experience_card";
import PlansourceLogo from "../assets/plansource_logo.jpeg";

function Experience() {
  return (
    <div className="bg-white">
      <div className="section flex flex-col gap-5 items-center justify-center">
        <div className="flex items-center justify-center py-5">
          <ThinAndThickTitle thin="My" thick="Experience" />
        </div>
        <div className="flex flex-col items-center justify-center gap-8 px-6 py-10 ">
          <ExperienceCard
            company_logo={PlansourceLogo}
            designation="Associate Software Engineer at Plansource"
            time_period="Jul 2024 - Present"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quia
            facere ducimus delectus, dignissimos dolor! Sed quisquam temporibus
            esse tenetur sequi, dicta illo officiis inventore labore sit quam
            itaque eaque.
          </ExperienceCard>
          <ExperienceCard
            company_logo={PlansourceLogo}
            designation="Associate Software Trainee at Plansource (Internship)"
            time_period="Feb 2024 - Jun 2024"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quia
            facere ducimus delectus, dignissimos dolor! Sed quisquam temporibus
            esse tenetur sequi, dicta illo officiis inventore labore sit quam
            itaque eaque.
          </ExperienceCard>
        </div>
      </div>
    </div>
  );
}

export default Experience;
