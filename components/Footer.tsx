import { Mail, MapPin, Github, Linkedin, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white dark:bg-gray-900 dark:text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Karthik Vanabhojana</h3>
            <p className="mb-4">Software Developer</p>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:karthikvanabhojana@gmail.com" className="hover:text-primary-400 transition-colors">
                  karthikvanabhojana@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Boston, MA</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-primary-400 transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-400 transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Karthikvanabhojana1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/karthik-vanabhojana"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/karthikvanabhojana/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

