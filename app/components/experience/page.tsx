import React from "react";
import { EXPERIENCE } from "@/app/constants";

const Experience = () => {
  return (
    <section className="border-t border-neutral-800 pb-24">
      <h1 className="my-16 text-center text-4xl font-semibold">Experience</h1>
      <div className="flex flex-col items-start gap-8 max-w-4xl mx-auto">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="text-left">
            <h2 className="text-2xl font-bold text-white">{exp.title}</h2>
            <p className="text-gray-400">{exp.company} • {exp.duration}</p>
            <p className="mt-2 text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
