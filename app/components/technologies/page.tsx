"use client";
import React from "react";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

const techIcons = [
  { icon: <RiReactjsLine className="text-6xl" />, color: "text-cyan-400", name: "React" },
  { icon: <TbBrandNextjs className="text-6xl" />, color: "text-white-500", name: "Next.js" },
  { icon: <SiTypescript className="text-6xl" />, color: "text-blue-600", name: "TypeScript" },
  { icon: <FaNodeJs className="text-6xl" />, color: "text-green-700", name: "Node.js" },
  { icon: <SiMongodb className="text-6xl" />, color: "text-green-500", name: "MongoDB" },
  { icon: <IoLogoFirebase className="text-6xl" />, color: "text-yellow-500", name: "Firebase" },
];

const Technologies = () => {
  return (
    <div className="border-t border-neutral-800 pb-24">
      <h1 className="my-16 text-center text-4xl font-semibold">Technologies</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.1 }}
            className={`p-4 rounded-xl shadow-lg hover:${tech.color} transition duration-300`}
          >
            <div className={`flex items-center justify-center ${tech.color}`}>
              {tech.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
