"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Search } from "lucide-react";
import projectsData from "@/data/projectsData.json";

export default function Page() {
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    const query = search.toLowerCase();

    return projectsData.filter(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query),
    );
  }, [search]);

  return (
    <>
      {/* <Navbar /> */}

      <main className='min-h-screen pt-28 pb-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header */}
          <div className='text-center mb-14'>
            <span className='text-primary text-sm font-semibold uppercase tracking-[0.2em]'>
              My Work
            </span>

            <h1 className='text-4xl md:text-6xl font-bold mt-4 mb-5'>
              Projects
            </h1>

            <p className='max-w-2xl mx-auto text-muted-foreground text-lg'>
              Explore my work that reflects my creativity and skills in bringing
              ideas to life through thoughtful design and development.
            </p>
          </div>

          {/* Search */}
          <div className='max-w-2xl mx-auto mb-12'>
            <div className='relative'>
              <Search
                size={20}
                className='absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground'
              />

              <input
                type='text'
                placeholder='Search by title or category...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='w-full h-14 pl-12 pr-4 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary transition-all'
              />
            </div>

            <p className='text-center text-sm text-muted-foreground mt-4'>
              Showing{" "}
              <span className='font-semibold text-primary'>
                {filteredProjects.length}
              </span>{" "}
              of {projectsData.length} projects
            </p>
          </div>

          {/* Projects */}
          {filteredProjects.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
              {filteredProjects.map((project, index) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className='block'
                >
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className='group overflow-hidden rounded-2xl border border-border bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full'
                  >
                    {/* Image */}
                    <div className='relative h-64 overflow-hidden'>
                      <img
                        src={project.image}
                        alt={project.title}
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                      />

                      <div className='absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center'>
                        <div className='opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-white font-medium'>
                          View Project
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className='p-6'>
                      <span className='inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4'>
                        {project.category}
                      </span>

                      <h2 className='text-xl font-bold mb-3'>
                        {project.title}
                      </h2>

                      <p className='text-muted-foreground text-sm leading-6'>
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          ) : (
            <div className='text-center py-20'>
              <h3 className='text-2xl font-semibold mb-2'>No projects found</h3>

              <p className='text-muted-foreground'>
                Try searching with another title or category.
              </p>
            </div>
          )}

          {/* Back to Home */}
          <div className='flex justify-center mt-16'>
            <Link href='/'>
              <button className='group inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300'>
                <ArrowLeft
                  size={18}
                  className='group-hover:-translate-x-1 transition-transform'
                />
                Back to Homepage
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
