"use client"

import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import DarkModeToggle from "./DarkModeToggle"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-gray-800 shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <ul className="flex space-x-8">
          {["home", "about", "skills", "experience", "education", "projects"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-lg font-medium cursor-pointer hover:text-primary-600 transition-colors dark:text-gray-200 dark:hover:text-primary-400"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
        <DarkModeToggle />
      </nav>
    </motion.header>
  )
}

export default Header

