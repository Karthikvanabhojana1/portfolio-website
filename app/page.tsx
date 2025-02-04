"use client"

import { Element } from "react-scroll"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="education">
        <Education />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Footer />
    </main>
  )
}

