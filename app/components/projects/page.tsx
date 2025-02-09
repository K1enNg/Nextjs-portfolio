"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECT_DATA } from "@/app/constants";

const Project = () => {
  return (
    <section className="py-16 px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {PROJECT_DATA.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border border-neutral-700 bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
