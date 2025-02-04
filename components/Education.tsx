"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"

const educations = [
  {
    school: "Northeastern University",
    degree: "Master of Science in Information Systems",
    period: "Expected Aug 2025",
    location: "Boston, MA",
  },
  {
    school: "Visvesvaraya Technological University",
    degree: "Bachelor of Engineering in Mechanical Engineering",
    period: "Aug 2016 - Aug 2020",
    location: "Bengaluru, India",
  },
]

const Education = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-secondary-500 rounded-full p-2 mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{edu.school}</h3>
                  <h4 className="text-xl text-secondary-600 dark:text-secondary-400">{edu.degree}</h4>
                </div>
              </div>
              <div className="ml-12 border-l-2 border-secondary-500 pl-8 pb-8">
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 mr-2 text-secondary-500" />
                  <p className="text-gray-600 dark:text-gray-300">{edu.period}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{edu.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

