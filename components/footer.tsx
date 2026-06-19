'use client'

import { ExternalLink, Mail } from 'lucide-react'

export function Footer() {
  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com',
    },
    {
      label: 'Email',
      href: 'mailto:mohitebhargav2506@gmail.com',
    },
  ]

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Social links */}
          <div className="flex gap-4 flex-wrap justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
                aria-label={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center text-muted-foreground text-sm">
            © 2026 Bhargav Mohite. Crafted with passion and attention to detail.
          </p>
        </div>
      </div>
    </footer>
  )
}
