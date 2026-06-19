'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download, ArrowRight } from 'lucide-react'

const roles = ['Fullstack Developer', 'React Native Developer']

export function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timer: NodeJS.Timeout

    if (!isDeleting && displayedText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1))
      }, 100)
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1))
      }, 50)
    } else if (displayedText.length === currentRole.length && !isDeleting) {
      timer = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
    } else if (displayedText.length === 0 && isDeleting) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timer)
  }, [displayedText, roleIndex, isDeleting])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6"
        >
          <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-sm font-medium text-primary">Welcome to my Portfolio</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Bhargav Mohite
          </span>
        </motion.h1>

        {/* Typewriter text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-16 mb-8 flex items-center justify-center"
        >
          <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Crafting modern, scalable web and mobile applications with a passion for clean code and exceptional user experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => {
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 text-lg py-6 px-8 rounded-lg"
          >
            View Projects
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            variant="outline"
            className="text-lg py-6 px-8 rounded-lg border-2"
            onClick={() => window.open('/resume.pdf', '_blank', 'noopener,noreferrer')}
          >
            <Download className="mr-2" size={20} />
            Resume
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
