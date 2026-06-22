'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleScroll = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              BM
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleScroll(link.href)}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side - Theme toggle and CTA */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            {mounted && (
              <div className="hidden sm:flex items-center gap-2 bg-muted rounded-lg p-1">
                <button
                  onClick={() => setTheme('light')}
                  className={`p-2 rounded transition-colors ${
                    theme === 'light'
                      ? 'bg-background text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  title="Light mode"
                >
                  <Sun size={16} />
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`p-2 rounded transition-colors ${
                    theme === 'dark'
                      ? 'bg-background text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  title="Dark mode"
                >
                  <Moon size={16} />
                </button>

              </div>
            )}

            {/* Get in Touch Button */}
            <Button
              onClick={() => handleScroll('#contact')}
              className="hidden sm:inline-flex bg-gradient-to-r from-primary to-accent text-white hover:opacity-90"
            >
              Get in Touch
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleScroll(link.href)}
                  className="block w-full text-left px-3 py-2 rounded-lg text-foreground hover:bg-muted transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => handleScroll('#contact')}
                className="w-full mt-2 bg-gradient-to-r from-primary to-accent text-white"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
