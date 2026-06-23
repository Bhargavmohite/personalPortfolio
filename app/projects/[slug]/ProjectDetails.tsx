"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectDetailsProps = {
  project: any;
};

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === project.screenshots.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.screenshots.length - 1 : prev - 1,
    );
  };

  return (
    <main className='min-h-screen pt-28 pb-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-10 items-start'>
          {/* Left Side - Slider */}
          <div className='relative overflow-hidden rounded-2xl border border-border'>
            <img
              src={project.screenshots[currentImage]}
              alt={project.title}
              className='w-full h-[500px] object-cover'
            />

            <button
              onClick={prevImage}
              className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full'
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextImage}
              className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full'
            >
              <ChevronRight size={20} />
            </button>

            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
              {project.screenshots.map((_: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 w-2 rounded-full ${
                    currentImage === index ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className='space-y-6'>
            <div>
              <span className='inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4'>
                {project.category}
              </span>

              <h1 className='text-4xl font-bold mb-4'>{project.title}</h1>

              <p className='text-muted-foreground leading-7'>
                {project.fullDescription || project.description}
              </p>
            </div>

            <div>
              <h2 className='text-lg font-semibold mb-3'>Tech Stack</h2>

              <div className='flex flex-wrap gap-2'>
                {project.tech?.map((tech: string) => (
                  <span
                    key={tech}
                    className='px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className='flex flex-wrap gap-4 pt-2'>
              {project.github && (
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-6 py-3 rounded-xl border border-border hover:bg-accent transition-colors'
                >
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity'
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
