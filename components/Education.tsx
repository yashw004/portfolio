'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, Award } from 'lucide-react'

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const educationData = [
    {
      degree: 'B.E. in Information Science & Engineering',
      institution: 'CMRIT',
      year: '2025',
      grade: 'CGPA: 7.86',
      icon: GraduationCap,
    },
    {
      degree: 'PUC',
      institution: 'Narayana PU College',
      year: '2021',
      grade: '91.5%',
      icon: Award,
    },
    {
      degree: 'SSLC',
      institution: 'Navadeep High School',
      year: '2019',
      grade: '84.96%',
      icon: Award,
    },
  ]

  return (
    <section id="education" className="py-20" role="region" aria-labelledby="education-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="education-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto" role="list" aria-label="Educational qualifications">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-8 last:mb-0"
              role="listitem"
            >
              <article className="bg-card rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center" aria-hidden="true">
                      <edu.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2" role="heading" aria-level={3}>{edu.degree}</h3>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        <span>{edu.year}</span>
                      </div>
                      <div className="text-primary font-semibold">{edu.grade}</div>
                    </div>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education