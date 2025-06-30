"use client"

import { useState } from "react"
import {
  Menu,
  X,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Code,
  Database,
  Smartphone,
  Instagram,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-slate-800 dark:bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Fozia</h1>
              <p className="text-sm text-gray-300">Software Engineer</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white hover:bg-white/10 md:hidden">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-700 bg-slate-800 dark:bg-slate-900">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a
                href="#about"
                className="text-sm font-medium hover:text-emerald-400 transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#skills"
                className="text-sm font-medium hover:text-emerald-400 transition-colors"
                onClick={toggleMenu}
              >
                Skills
              </a>
              <a
                href="#education"
                className="text-sm font-medium hover:text-emerald-400 transition-colors"
                onClick={toggleMenu}
              >
                Education
              </a>
              <a
                href="#experience"
                className="text-sm font-medium hover:text-emerald-400 transition-colors"
                onClick={toggleMenu}
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-sm font-medium hover:text-emerald-400 transition-colors"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-emerald-400 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="about"
        className="py-16 bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950/20 dark:to-teal-950/20"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-white font-bold text-2xl">A</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Fozia Kassa</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">Full Stack Developer & Graphice Designer</p>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {"I'm always open to discussing new opportunities, collaborations, or just having a chat about technology."}
            Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Skills & Technologies</h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Frontend Development */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Frontend Development</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Next,js, Angular, JavaScript, HTML5, CSS3
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            {/* Backend Development */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-teal-600 dark:bg-teal-400 rounded flex items-center justify-center">
                    <span className="text-white dark:text-teal-900 font-bold text-xs">JS</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Backend Development</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Node.js, Express,
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            {/* Database Management */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Database Management</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  PostgreSQL, MySQL
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-sky-500 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Education</h3>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">Bachelor of Science in Software Engineering</CardTitle>
                    <CardDescription className="text-base font-medium text-emerald-600 dark:text-emerald-400">
                      Adama Science and Technology University
                    </CardDescription>
                    <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      2021 - 2025
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Software Engineering</Badge>
                  <Badge variant="secondary">Database Systems</Badge>
                  <Badge variant="secondary">Web Development</Badge>
                </div>
              </CardContent>
            </Card>


          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Experience</h3>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">Frontend Intern</CardTitle>
                    <CardDescription className="text-base font-medium text-emerald-600 dark:text-emerald-400">
                      Kachamale Technologies
                    </CardDescription>
                    <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      July 2024 - October 2024
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Developing custom websites and web applications for local businesses and international clients.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">Frontend Intern</CardTitle>
                    <CardDescription className="text-base font-medium text-teal-600 dark:text-teal-400">
                      Perago Information Solution
                    </CardDescription>
                    <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      Summer 2023
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Provided technical support and assistance to company employees and clients.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Angular</Badge>
                  {/* <Badge variant="secondary">Windows/Linux</Badge> */}
                  {/* <Badge variant="secondary">Network Administration</Badge> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Recent Projects</h3>
            <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore a collection of projects showcasing skills in various technologies.
            </p>
          </div>

          {/* Project Filter Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap gap-2 bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">All</Button>
              <Button variant="ghost" className="text-gray-600 dark:text-gray-400">
                Mobile Apps
              </Button>
              <Button variant="ghost" className="text-gray-600 dark:text-gray-400">
                Desktop App
              </Button>
              <Button variant="ghost" className="text-gray-600 dark:text-gray-400">
                Web Development
              </Button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Smartphone className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">Currency Converter App</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Mobile app for quick and accurate currency conversions across various categories.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="outline"
                    className="border-emerald-200 text-emerald-700 dark:border-emerald-800 dark:text-emerald-300"
                  >
                    Flutter
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-yellow-200 text-yellow-700 dark:border-yellow-800 dark:text-yellow-300"
                  >
                    Dart
                  </Badge>
                  {/* <Badge
                    variant="outline"
                    className="border-cyan-200 text-cyan-700 dark:border-cyan-800 dark:text-cyan-300"
                  >
                    CSS
                  </Badge> */}
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <Database className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">LWIE</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {/* JavaFX + RMI desktop system for sharing and managing files remotely. */}
                  A platform to swape what you have for what you need.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="outline"
                    className="border-orange-200 text-orange-700 dark:border-orange-800 dark:text-orange-300"
                  >
                    Next.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-red-200 text-red-700 dark:border-red-800 dark:text-red-300"
                  >
                    Node.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-teal-200 text-teal-700 dark:border-teal-800 dark:text-teal-300"
                  >
                    PostGreSQL
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center">
                <Code className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                  Vehicle Tracking System
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Real-time vehicle tracking and management system with GPS integration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="outline"
                    className="border-emerald-200 text-emerald-700 dark:border-emerald-800 dark:text-emerald-300"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-teal-200 text-teal-700 dark:border-teal-800 dark:text-teal-300"
                  >
                    Node.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-gray-200 text-gray-700 dark:border-gray-800 dark:text-gray-300"
                  >
                    MongoDB
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {
                  "I'm always open to discussing new opportunities, collaborations, or just having a chat about technology."
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600 dark:text-gray-400">amanbaye@gmail.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-400">+251 921 634 233</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-gray-600 dark:text-gray-400">Debre Berhan, Ethiopia</p>
                    </div>
                  </div>
                </Card>

                {/* Social Links */}
                <div className="flex space-x-4 pt-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 bg-transparent"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-emerald-600 hover:text-white bg-transparent"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-pink-600 hover:text-white bg-transparent">
                    <Instagram className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Project Discussion" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell me about your project..." rows={4} />
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Send Message</Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Aman Baye. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
