'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/navigation";

const projectsData = [
  {
    title: 'E-Commerce Platform',
    category: 'Web App',
    description: 'A full-featured e-commerce platform with payment integration, inventory management, and real-time analytics.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
  },
  {
    title: 'Mobile Fitness App',
    category: 'Mobile App',
    description: 'Cross-platform fitness tracking application with workout planning, progress tracking, and social features.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
  },
  {
    title: 'Content Management System',
    category: 'Web App',
    description: 'Scalable CMS built with modern tech stack, featuring drag-and-drop editor and real-time collaboration.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
  },
]

export function Projects() {

  const router = useRouter();

  const navigateToViewProjects = () => {
    router.push('/viewProjects');
  };

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Projects</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Explore my work that reflects my creativity and skills in bringing ideas to life through thoughtful design and development.
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden"
            >
              {/* Project image */}
              <div className="relative h-64 overflow-hidden bg-muted rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="flex items-center gap-2 text-white font-semibold"
                  >
                    View Project
                    <ArrowRight size={20} />
                  </motion.div>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6 bg-card border border-border rounded-b-xl">
                <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-3">
                  <span className="text-xs font-semibold text-primary">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          
            <button className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg font-semibold transition-colors duration-300" onClick={navigateToViewProjects}>
              View All Projects
            </button>
          
        </motion.div>
      </div>
    </section>
  )
}
