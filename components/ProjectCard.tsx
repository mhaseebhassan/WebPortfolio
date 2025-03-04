"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    image: "/wms.webp",
    title: "Warehouse Management System",
    description:
      "A database-driven warehouse management system using Oracle SQL and Java GUI.",
  },
  {
    image: "/ai-attendance.webp",
    title: "AI Smart Attendance System",
    description:
      "An AI-powered attendance system using face recognition and blockchain for security.",
  },
];

export default function ProjectsSection() {
  return (
    <section className="flex flex-col items-center gap-10 p-12 bg-gray-950 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-8">Projects</h1>
      <div className="grid gap-10 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative w-[400px] h-[250px] rounded-3xl overflow-hidden bg-black/20 backdrop-blur-xl border border-gray-700 shadow-lg transition-all hover:shadow-2xl"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${project.image})`,
                filter: "brightness(0.4)",
              }}
            ></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="text-gray-300 text-sm mt-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
