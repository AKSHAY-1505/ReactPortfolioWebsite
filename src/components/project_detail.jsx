import React from "react";

function ProjectDetail({ image, number, title, description, inverted }) {
  function convertToTwoDigits(number) {
    if (number > 9) {
      return number;
    }

    return "0" + number;
  }

  if (inverted) {
    return (
      <div className="flex items-center justify-center py-5 gap-32">
        <div className="flex flex-col gap-7">
          <p className="text-white text-[56px] font-extrabold">
            {convertToTwoDigits(number)}
          </p>
          <p className="text-white text-3xl font-bold">{title}</p>
          <p className="text-base text-zinc-500 text-justify">{description}</p>
        </div>
        <img
          src={image}
          className="w-[594px] h-[476px] rounded-2xl border border-white py-10 pr-20"
        />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-5 gap-32">
      <img
        src={image}
        className="w-[594px] h-[476px] rounded-2xl border border-white py-10 pr-20"
      />
      <div className="flex flex-col gap-7">
        <p className="text-white text-[56px] font-extrabold">
          {convertToTwoDigits(number)}
        </p>
        <p className="text-white text-3xl font-bold">{title}</p>
        <p className="text-base text-zinc-500 text-justify">{description}</p>
      </div>
    </div>
  );
}

export default ProjectDetail;
