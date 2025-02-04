"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Globe, Database, Server, Code } from "lucide-react"

const projects = [
  {
    title: "Cloud-Native API Development and Infrastructure Automation Project",
    period: "Jan 2024 - Apr 2025",
    description: [
      "Established CI/CD pipeline on Google Cloud Platform with load balancing, auto-scaling via Serverless Computing, and Terraform for automation, following IaaC principles",
      "Enhanced security and real-time processing by introducing Cloud Function for email validation, integrating Pub/Sub for validation links, CloudSQL monitoring, and enforcing secure Pub/Sub communication with IAM role binding",
    ],
    image: "/Projectimages/cloudcomputing.jpg",
    websiteUrl: "https://github.com/Karthik-vanabhojana/webapp.git",
    githubUrl: "https://github.com/Karthik-vanabhojana/webapp.git",
    techStack: ["GCP", "Terraform", "Kubernetes", "Docker"],
  },
  {
    title: "Personalized Accommodation for University Students",
    period: "Nov 2023 - Dec 2023",
    description: [
      "Engineered a web application utilizing Next.js, Typescript, Tailwind, and MongoDB, tailored to meet the accommodation needs of university students relocating to new areas",
      "Implemented robust security measures including secure authentication with university email IDs and bcrypt encryption, effectively mitigating the risk of frauds and ensuring user data integrity and confidentiality",
    ],
    image: "/Projectimages/nearly.png",
    websiteUrl: "https://info-6150-nearly.vercel.app/howitworks",
    githubUrl: "https://github.com/Karthikvanabhojana1/INFO6150_NEARLY.git",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
  },
  {
    title: "Admin Panel",
    period: "May 2024 - Sep 2024",
    description: [
      "Designed and implemented a responsive admin dashboard using Material UI and React.",
      "Optimized the UI for seamless navigation and user-friendly interactions."
    ],
    image: "/Projectimages/dashboard.png",
    websiteUrl: "https://github.com/Karthikvanabhojana1/dashboard.git",
    githubUrl: "https://github.com/Karthikvanabhojana1/dashboard.git",
    techStack: ["React", "MaterialUI"],
  },
  {
    title: "MHealth: A Mobile Health Application",
    period: "May 2024 - Sep 2024",
    description: [
      "Developed an online platform for seamless medical appointment booking and management.",
      "Integrated real-time scheduling and patient-doctor coordination for efficiency"
    ],
    image: "https://res.cloudinary.com/djpqqdkqg/image/upload/v1706912912/hospital_l7juyg.jpg",
    websiteUrl: "https://github.com/Karthikvanabhojana1/MHELP.git",
    githubUrl: "https://github.com/Karthikvanabhojana1/MHELP.git",
    techStack: ["Java", "Mysql","Swing"],
  },
]

const TechStackIcon = ({ tech }) => {
  switch (tech) {
    case "GCP":
    case "Kubernetes":
    case "Docker":
      return <Server className="w-6 h-6" title={tech} />
    case "Terraform":
      return <Code className="w-6 h-6" title={tech} />
    case "MongoDB":
      return <Database className="w-6 h-6" title={tech} />
    default:
      return <Code className="w-6 h-6" title={tech} />
  }
}

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Globe className="w-6 h-6" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.period}</p>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-4">
                  {project.description.map((item, i) => (
                    <li key={i} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      <TechStackIcon tech={tech} />
                      <span className="ml-2">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

