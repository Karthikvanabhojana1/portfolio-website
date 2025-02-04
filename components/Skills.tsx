"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { 
  Coffee, 
  Database, 
  Code, 
  Server, 
  Cloud, 
  Package, 
  Terminal, 
  Code2 
} from "lucide-react";
import { SiPython, SiJavascript, SiReact, SiSpringboot, SiDocker, SiMongodb, SiApachecassandra ,SiMysql, SiAwslambda} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  { name: "Java", level: 95, icon: FaJava }, 
  { name: "SQL", level: 85, icon: SiMysql },
  { name: "Python", level: 70, icon: SiPython },
  { name: "JavaScript", level: 75, icon: SiJavascript },
  { name: "Spring Boot", level: 85, icon: SiSpringboot },
  { name: "React", level: 70, icon: SiReact },
  { name: "AWS", level: 80, icon: SiAwslambda },
  { name: "Docker", level: 75, icon: SiDocker },
  { name: "MongoDB", level: 95, icon: SiMongodb },
  { name: "Cassandra", level: 80, icon: SiApachecassandra },
];


const SkillBar = ({ name, level, icon: Icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="mb-6" ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <Icon className="w-6 h-6 mr-2 text-primary-500 dark:text-primary-400" />
          <span className="text-base font-medium text-gray-700 dark:text-gray-300">{name}</span>
        </div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="h-2.5 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="h-full w-full bg-gradient-to-r from-primary-400 to-secondary-400"
            initial={{ x: "-100%" }}
            animate={inView ? { x: 0 } : { x: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

