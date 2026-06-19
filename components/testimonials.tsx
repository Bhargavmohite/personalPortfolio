'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonialData = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'Tech Startup',
    testimonial: 'Bhargav delivered exceptional work on our flagship product. His attention to detail and problem-solving skills are outstanding.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'Digital Agency',
    testimonial: 'Working with Bhargav was a game-changer for our team. He brings both technical expertise and creative thinking to every project.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'SaaS Platform',
    testimonial: 'His ability to translate business requirements into elegant technical solutions is truly impressive. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonialData.length) % testimonialData.length)
  }

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonialData.length)
  }

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = current * scrollRef.current.offsetWidth
    }
  }, [current])

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-card/50">
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
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            What People Say
          </motion.h2>
        </div>

        {/* Testimonials carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden scroll-smooth"
          >
            {testimonialData.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="min-w-full"
              >
                <div className="p-8 bg-background border-2 border-border rounded-xl">
                  <p className="text-lg text-foreground mb-6 leading-relaxed">
                    &quot;{testimonial.testimonial}&quot;
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonialData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current
                      ? 'bg-primary w-8'
                      : 'bg-muted hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
