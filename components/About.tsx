'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="about" className="py-20 bg-secondary/20" role="region" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Career Objective</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                "As a motivated and enthusiastic fresher, I aim to contribute to a dynamic and 
                growth-oriented organization while continuously learning and enhancing my skills."
              </p>
              
              <div className="grid md:grid-cols-3 gap-6" role="group" aria-label="Key statistics">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-primary/5 rounded-xl"
                >
                  <div className="text-2xl font-bold text-primary mb-2" aria-label="3 plus">3+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-purple-500/5 rounded-xl"
                >
                  <div className="text-2xl font-bold text-purple-600 mb-2">2</div>
                  <div className="text-muted-foreground">Internships</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-green-500/5 rounded-xl"
                >
                  <div className="text-2xl font-bold text-green-600 mb-2" aria-label="7.86 CGPA">7.86</div>
                  <div className="text-muted-foreground">CGPA</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About