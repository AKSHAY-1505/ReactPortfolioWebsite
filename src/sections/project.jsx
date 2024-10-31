import React from "react";
import ThinAndThickTitle from "../components/thin_and_thick_title";
import ProjectDetail from "../components/project_detail";
import Image from "../assets/boy.png";

function Project() {
  let projects = [
    {
      image: Image,
      title: "FoodCart : Food Ordering Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, illo! Aliquid magni, in tenetur dolorem nam adipisci tempore animi tempora nihil impedit odit eos. Corrupti nisi quisquam doloribus perferendis harum!",
    },
    {
      image: Image,
      title: "ApartmentPal : Society Manager App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, illo! Aliquid magni, in tenetur dolorem nam adipisci tempore animi tempora nihil impedit odit eos. Corrupti nisi quisquam doloribus perferendis harum!",
    },
    {
      image: Image,
      title: "FeedTheNeed : Charity Platform Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, illo! Aliquid magni, in tenetur dolorem nam adipisci tempore animi tempora nihil impedit odit eos. Corrupti nisi quisquam doloribus perferendis harum!",
    },
  ];

  return (
    <div className="bg-black">
      <div className="section">
        <div className="px-8 flex flex-col gap-5 items-center justify-between">
          <div className="flex items-center justify-center py-5">
            <ThinAndThickTitle thin="My" thick="Projects" invert />
          </div>
          {projects.map((project, index) => {
            return (
              <ProjectDetail
                image={project.image}
                number={index + 1}
                title={project.title}
                description={project.description}
                inverted={index % 2 == 1}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
