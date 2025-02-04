"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-xl text-center max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Graduate student with 3+ years of experience in Java backend development, complemented by hands-on frontend
          development, extensive work with databases, and cloud-based systems. Adept at leveraging technical expertise
          to design, develop, and troubleshoot secure and high-performance software solutions. Proficient in delivering
          scalable and reliable applications using cutting-edge technologies, with a passion for driving continuous
          improvement and innovation.
        </motion.p>
      </div>
    </section>
  )
}

export default About

