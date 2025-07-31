'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, Wrench } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const skillsData = [
    {
      category: 'Languages',
      icon: Code2,
      skills: ['C', 'Python', 'Java', 'HTML', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Tools',
      icon: Wrench,
      skills: ['VS Code', 'Eclipse', 'PyCharm', 'Jupyter'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Database',
      icon: Database,
      skills: ['SQL (Basic)'],
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="skills" className="py-20 bg-secondary/20" role="region" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8" role="list" aria-label="Technical skills by category">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-card rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300"
              role="listitem"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} p-4 flex items-center justify-center`} aria-hidden="true">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold" role="heading" aria-level={3}>{category.category}</h3>
              </div>
              
              <div className="space-y-3" role="list" aria-label={`${category.category} skills`}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: (index * 0.2) + (skillIndex * 0.1) }}
                    className="bg-secondary/50 rounded-lg p-3 text-center text-sm font-medium hover:bg-secondary/70 transition-colors duration-200"
                    role="listitem"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills