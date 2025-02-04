"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Link } from "react-scroll"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-800 dark:to-secondary-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="text-center md:text-left mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4">Karthik Vanabhojana</h1>
            <h2 className="text-3xl mb-6">Software Developer</h2>
            <p className="text-xl mb-8 max-w-lg">
              Turning ideas into reality through code, with expertise in Java, Spring Boot, and cloud technologies.
            </p>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="bg-white text-primary-600 dark:bg-gray-800 dark:text-primary-400 px-8 py-3 rounded-full font-medium text-lg hover:bg-primary-100 dark:hover:bg-gray-700 transition-colors inline-block cursor-pointer"
            >
              Get in Touch
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg"
          >
          <Image src="https://res.cloudinary.com/djpqqdkqg/image/upload/v1738646010/profilepic_apxkj0.jpg" alt="Karthik Vanabhojana" layout="fill" objectFit="cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

