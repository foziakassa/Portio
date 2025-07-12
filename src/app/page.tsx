"use client"

import { useState, useEffect } from "react"
import Image from 'next/image'
import home from '../../public/home.png'
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
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("about")
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [animatedCards, setAnimatedCards] = useState<Set<string>>(new Set())

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "education", "experience", "projects", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setVisibleSections((prev) => new Set([...prev, sectionId]))

          // Trigger staggered card animations
          const cards = entry.target.querySelectorAll("[data-card]")
          cards.forEach((card, index) => {
            setTimeout(() => {
              const cardId = `${sectionId}-${index}`
              setAnimatedCards((prev) => new Set([...prev, cardId]))
            }, index * 200) // 200ms delay between each card
          })
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-black/90 text-white relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black/80" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #7c3aed 0%, transparent 60%), 
                 radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 60%),
                 radial-gradient(circle at 50% 50%, #10b981 0%, transparent 70%)`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/80 border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/25">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Fozia Kassa</h1>
              <p className="text-sm text-gray-300">Software Engineer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["about", "skills", "education", "experience", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-all duration-300 hover:text-emerald-400 relative ${activeSection === section ? "text-emerald-400" : "text-gray-300"
                  }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white hover:bg-white/10 md:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 backdrop-blur-md bg-black/90">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {["about", "skills", "education", "experience", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium hover:text-emerald-400 transition-colors text-left"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center relative z-10 pt-20">
        <div className="container mx-auto px-4 text-center">
          <div
            className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl shadow-emerald-500/25 transform transition-transform duration-700 hover:scale-110"
            style={{ transform: `translateY(${scrollY * -0.1}px) scale(${1 + Math.min(scrollY * 0.0001, 0.1)})` }}
          >
            <span className="text-white font-bold text-3xl">F</span>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
              Fozia Kassa
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 font-light">Full Stack Developer & Graphic Designer</p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
              Feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-full shadow-lg shadow-emerald-500/25 transform transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/40"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
              <Button
                variant="outline"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-8 py-3 rounded-full backdrop-blur-sm bg-white/5 transform transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-emerald-400" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Code,
                title: "Frontend Development",
                description: "Next.js, React.js Angular, JavaScript, TypeScript , Tailwind CSS , HTML5, CSS3",
                progress: 90,
                color: "emerald",
              },
              {
                icon: Database,
                title: "Backend Development",
                description: "Node.js, Express",
                progress: 85,
                color: "teal",
              },
              {
                icon: Database,
                title: "Database Management",
                description: "PostgreSQL, MySQL",
                progress: 80,
                color: "cyan",
              },
            ].map((skill, index) => {
              const cardId = `skills-${index}`
              const isVisible = animatedCards.has(cardId)

              return (
                <Card
                  key={index}
                  data-card
                  className={`backdrop-blur-md bg-black/60 border-white/10 hover:bg-black/80 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 group transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                    }`}
                  style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br from-${skill.color}-500 to-${skill.color}-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-${skill.color}-500/25 group-hover:shadow-${skill.color}-500/40 transition-all duration-300`}
                    >
                      <skill.icon className={`w-10 h-10 text-white`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-white mb-2">{skill.title}</CardTitle>
                    <CardDescription className="text-gray-300">{skill.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full bg-gray-700/50 rounded-full h-3 mb-2">
                      <div
                        className={`bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400 h-3 rounded-full transition-all duration-1000 shadow-sm`}
                        style={{ width: `${skill.progress}%` }}
                      />
                    </div>
                    <div className="text-right text-sm text-gray-400">{skill.progress}%</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      {/* <section id="education" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Education
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            <Card
              data-card
              className={`backdrop-blur-md bg-black/60 border-white/10 hover:bg-black/80 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/20 transform ${animatedCards.has("education-0") ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
            >
              <CardHeader>
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/25">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-white mb-2">
                      Bachelor of Science in Software Engineering
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-emerald-400 mb-3">
                      Adama Science and Technology University
                    </CardDescription>
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-5 h-5 mr-2" />
                      2021 - 2025
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {["Software Engineering", "Database Systems", "Web Development"].map((subject) => (
                    <Badge
                      key={subject}
                      variant="secondary"
                      className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                    >
                      {subject}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Experience
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "Frontend Intern",
                company: "Kachamale Technologies",
                period: "July 2024 - October 2024",
                description:
                  "Developing custom websites and web applications for Local Businesses.",
                skills: ["React", "Next.js", "Node.js"],
                color: "emerald",
              },
              {
                title: "Frontend Intern",
                company: "Perago Information Solution",
                period: "Summer 2023",
                description: "Provided technical support and assistance to company employees and clients.",
                skills: ["Angular", "Antd"],
                color: "teal",
              },
            ].map((job, index) => {
              const cardId = `experience-${index}`
              const isVisible = animatedCards.has(cardId)

              return (
                <Card
                  key={index}
                  data-card
                  className={`backdrop-blur-md bg-black/60 border-white/10 hover:bg-black/80 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/20 group transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                    }`}
                  style={{ transitionDelay: isVisible ? `${index * 200}ms` : "0ms" }}
                >
                  <CardHeader>
                    <div className="flex items-start space-x-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br from-${job.color}-500 to-${job.color}-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-${job.color}-500/25 group-hover:shadow-${job.color}-500/40 transition-all duration-300`}
                      >
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl text-white mb-2">{job.title}</CardTitle>
                        <CardDescription className={`text-lg font-medium text-${job.color}-400 mb-3`}>
                          {job.company}
                        </CardDescription>
                        <div className="flex items-center text-gray-400 mb-4">
                          <Calendar className="w-5 h-5 mr-2" />
                          {job.period}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {job.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className={`bg-${job.color}-500/20 text-${job.color}-300 border-${job.color}-500/30`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Explore a collection of projects showcasing skills in various technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[

              {
                title: "LWIE",
                description: "A platform to swap what you have for what you need.",
                icon: Database,
                skills: ["Next.js", "Node.js", "PostgreSQL"],
                gradient: "from-teal-500 to-cyan-600",
                Link:"https://lwie-platform-xi.vercel.app/",
                image:home

              },
              {
                title: "Vehicle Tracking System",
                description: "Real-time vehicle tracking and management system with GPS integration.",
                icon: Code,
                skills: ["React", "Node.js", "MongoDB"],
                gradient: "from-cyan-500 to-sky-600",
                Link:"https://lwie-platform-xi.vercel.app/",
                image:home

              },
              {
                title: "Currency Converter App",
                description: "Mobile app for quick and accurate currency conversions across various categories.",
                icon: Smartphone,
                skills: ["Flutter", "Dart"],
                gradient: "from-emerald-500 to-teal-600",
                Link:"https://lwie-platform-xi.vercel.app/",
                image:home


              },
            ].map((project, index) => {
              const cardId = `projects-${index}`
              const isVisible = animatedCards.has(cardId)

              return (
                <Card
                  key={index}
                  data-card
                  className={`backdrop-blur-md bg-black/40 border-white/10 hover:bg-black/60 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 group overflow-hidden transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                    }`}
                  style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
                >
                  {/* <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                  >
                    <project.icon className="w-20 h-20 text-white/90 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  </div> */}
                 <Image
                 src={project.image}
                 width={899}
                 height={900}
                 alt ="hi"
                 />
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 leading-relaxed">{project.description}
                      <Link href="/detail">
                      <span className="text-teal-700 hover:text-teal-800 transition-colors duration-300">
                       learn more
                      </span>
                      </Link>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="border-emerald-400/30 text-emerald-300 bg-emerald-500/10"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-emerald-400/30 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 bg-transparent"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                      
               
                        <a href="https://lwie-platform-xi.vercel.app/" target="_blank" rel="noopener noreferrer">
                          Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-teal-400/30 text-teal-400 hover:bg-teal-400 hover:text-slate-900 transition-all duration-300 bg-transparent"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", info: "foziakassa19@gmail.com", color: "emerald" },
                  { icon: Phone, title: "Phone", info: "+251 927429720", color: "teal" },
                  { icon: MapPin, title: "Location", info: "Addis Ababa, Ethiopia", color: "cyan" },
                ].map((contact, index) => {
                  const cardId = `contact-${index}`
                  const isVisible = animatedCards.has(cardId)

                  return (
                    <Card
                      key={index}
                      data-card
                      className={`backdrop-blur-md bg-black/60 border-white/10 hover:bg-black/80 transition-all duration-700 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 p-6 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                        }`}
                      style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
                    >
                      <div className="flex items-center space-x-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br from-${contact.color}-500 to-${contact.color}-600 rounded-full flex items-center justify-center shadow-lg shadow-${contact.color}-500/25`}
                        >
                          <contact.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-lg mb-1">{contact.title}</h4>
                          <p className="text-gray-300">{contact.info}</p>
                        </div>
                      </div>
                    </Card>
                  )
                })}

                {/* Social Links */}
                <div className="flex space-x-4 pt-6">
                  {[
                    { icon: Github, color: "hover:bg-gray-700" },
                    { icon: Linkedin, color: "hover:bg-blue-600" },
                    { icon: Instagram, color: "hover:bg-pink-600" },
                  ].map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className={`border-white/20 text-white backdrop-blur-sm bg-black/30 ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    >
                      <social.icon className="w-5 h-5" />
                    </Button>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <Card
                data-card
                className={`backdrop-blur-md bg-black/60 border-white/10 hover:bg-black/80 transition-all duration-700 p-8 transform ${animatedCards.has("contact-3") ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                  }`}
                style={{ transitionDelay: animatedCards.has("contact-3") ? "300ms" : "0ms" }}
              >
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-3 text-white">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your Name"
                        className="backdrop-blur-sm bg-black/40 border-white/20 text-white placeholder:text-gray-400 focus:border-emerald-400 focus:bg-black/60 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-3 text-white">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="backdrop-blur-sm bg-black/40 border-white/20 text-white placeholder:text-gray-400 focus:border-emerald-400 focus:bg-black/60 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-3 text-white">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Project Discussion"
                      className="backdrop-blur-sm bg-black/40 border-white/20 text-white placeholder:text-gray-400 focus:border-emerald-400 focus:bg-black/60 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-3 text-white">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="backdrop-blur-sm bg-black/40 border-white/20 text-white placeholder:text-gray-400 focus:border-emerald-400 focus:bg-black/60 transition-all duration-300 resize-none"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-3 rounded-full shadow-lg shadow-emerald-500/25 transform transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/40">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="backdrop-blur-md bg-black/80 border-t border-white/10 py-8 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Fozia Kassa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
