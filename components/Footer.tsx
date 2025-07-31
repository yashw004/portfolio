'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary/20 py-12 border-t" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="mb-8 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors inline-flex items-center space-x-2"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
          </motion.button>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Yashwanth Kumar S N
            </h3>
            <p className="text-muted-foreground mb-6">
              Aspiring Full-Stack Developer passionate about creating amazing digital experiences.
            </p>
            
            <div className="flex justify-center space-x-6" role="group" aria-label="Social media links">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/yashwanth-kumar-s-n-68a53a312/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Visit LinkedIn profile"
              >
                <Linkedin size={20} aria-hidden="true" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/yashw004"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Visit GitHub profile"
              >
                <Github size={20} aria-hidden="true" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:yash004sn@gmail.com"
                className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Send email"
              >
                <Mail size={20} aria-hidden="true" />
              </motion.a>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm flex items-center justify-center space-x-1">
              <span>© {currentYear} Yashwanth Kumar S N. Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                aria-label="love"
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" aria-hidden="true" />
              </motion.span>
              <span>and Next.js</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer