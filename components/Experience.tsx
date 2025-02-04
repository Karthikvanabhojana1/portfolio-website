"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    company: "Mimosa Networks",
    position: "Software Development Intern",
    period: "May 2024 - Present",
    description: [
      "Deployed Docker containers to manage messaging queues with Kafka, optimizing microservices communication.",
      "Orchestrated the deployment of a network management platform using Kubernetes.",
      "Designed and implemented advanced wireless broadband network management strategies.",
      "Engineered secure session management systems for distributed environments.",
    ],
  },
  {
    company: "Accenture",
    position: "Custom Software Engineering Analyst",
    period: "Feb 2023 - Jun 2023",
    description: [
      "Developed modular Java libraries to simplify logging and exception handling.",
      "Leveraged ELK for log aggregation, enhancing real-time data transfer and analytics.",
      "Collaborated within Agile teams to enhance software engineering practices.",
    ],
  },
  {
    company: "Accenture",
    position: "Custom Software Engineering Associate",
    period: "Jan 2021 - Jan 2023",
    description: [
      "Engineered a robust API layer with Java, Spring Boot, GraphQL, and MVC architecture.",
      "Proactively analyzed hidden data patterns to optimize system compatibility and operational efficiency.",
      "Implemented and enforced peer-review methodologies to ensure high-quality production code.",
    ],
  },
]

const Experience = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary-500 rounded-full p-2 mr-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{exp.position}</h3>
                  <h4 className="text-xl text-primary-600 dark:text-primary-400">{exp.company}</h4>
                </div>
              </div>
              <div className="ml-12 border-l-2 border-primary-500 pl-8 pb-8">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 mr-2 text-primary-500" />
                  <p className="text-gray-600 dark:text-gray-300">{exp.period}</p>
                </div>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

