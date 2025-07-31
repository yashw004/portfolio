'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Code, Globe } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const projects = [
    {
      title: 'Online Food Ordering Website',
      description: 'A full-stack web application built with the MERN stack, featuring user authentication, shopping cart functionality, dynamic menu display, and integrated payment processing.',
      tech: ['React JS', 'MongoDB', 'Node.js', 'Express'],
      features: ['User Login/Registration', 'Shopping Cart', 'Dynamic Menu', 'Payment Integration'],
      icon: Globe,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Real-time Chat Application',
      description: 'A modern chat application built with Django and WebSockets, enabling real-time messaging, user authentication, and media sharing capabilities.',
      tech: ['Django', 'WebSockets', 'Channels', 'HTMX'],
      features: ['Real-time Messaging', 'User Authentication', 'Media Sharing', 'Group Chats'],
      icon: Code,
      gradient: 'from-blue-500 to-purple-500',
    },
  ]

  return (
    <section id="projects" className="py-20" role="region" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8" role="list" aria-label="Featured projects">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300"
              role="listitem"
            >
              <article className="mb-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${project.gradient} p-4 flex items-center justify-center mb-4`} aria-hidden="true">
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3" role="heading" aria-level={3}>{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
              </article>

              <div className="mb-6">
                <h4 className="font-semibold mb-3" role="heading" aria-level={4}>Technologies Used:</h4>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used in project">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      role="listitem"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3" role="heading" aria-level={4}>Key Features:</h4>
                <ul className="space-y-2" role="list">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4" role="group" aria-label="Project links">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  aria-label={`View ${project.title} source code`}
                >
                  <Github size={16} aria-hidden="true" />
                  <span>Code</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  <span>Demo</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects