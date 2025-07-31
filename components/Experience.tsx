'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const experiences = [
    {
      title: 'MERN Stack Development Intern',
      company: 'Webstack Academy',
      duration: '2 months',
      description: 'Built a comprehensive MERN-based Online Food Ordering website with features including user authentication, cart management, and payment integration.',
      achievements: [
        'Developed full-stack web application using React.js and Node.js',
        'Implemented secure user authentication and authorization',
        'Integrated payment gateway for seamless transactions',
        'Optimized database queries for improved performance',
      ],
    },
    {
      title: 'Technical Intern',
      company: 'Hindustan Aeronautics Ltd',
      duration: '15 weeks',
      description: 'Configured and maintained FlightGear simulators, gaining hands-on experience with aviation simulation software and technical systems.',
      achievements: [
        'Configured complex FlightGear simulation environments',
        'Collaborated with engineering teams on technical projects',
        'Learned aircraft systems and simulation technologies',
        'Maintained and troubleshot simulation hardware/software',
      ],
    },
  ]

  const certifications = [
    'Java Programming - Udemy',
    'Python Programming - Udemy',
    'Cloud Computing Seminar - DevTown',
    'Front-End Development Workshop - DevTown',
    'IEEE Conference Participation',
    'UR Rao Satellite Centre Visit',
    'NSS Activities Participation',
    'Start-Up Club Member',
  ]

  return (
    <section id="experience" className="py-20 bg-secondary/20" role="region" aria-labelledby="experience-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="experience-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Experience & <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Internships */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center" role="heading" aria-level={3}>Internships</h3>
          <div className="space-y-8" role="list" aria-label="Internship experiences">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-shadow duration-300"
                role="listitem"
              >
                <article className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center" aria-hidden="true">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2" role="heading" aria-level={4}>{exp.title}</h4>
                    <div className="flex items-center space-x-4 mb-4 text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" aria-hidden="true" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className="space-y-2" role="list" aria-label="Key achievements">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Activities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center" role="heading" aria-level={3}>Certifications & Activities</h3>
          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <div className="grid md:grid-cols-2 gap-4" role="list" aria-label="Certifications and activities">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors duration-200"
                  role="listitem"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience