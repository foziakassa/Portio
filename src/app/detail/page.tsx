"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, ExternalLink, Github, Monitor, Server, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import home from "../../../public/home.png"

export default function ProjectDetail() {
  const router = useRouter()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
          <Button
            variant="ghost"
            onClick={() => router.push("/")}
            className="text-white hover:bg-white/10 hover:text-emerald-400 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </Button>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">F</span>
            </div>
            <span className="text-sm text-gray-300">Fozia Kassa</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - MacBook Mockup */}
              <div className="relative">
                {/* MacBook Frame */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl p-4 shadow-2xl">
                  {/* MacBook Screen Bezel */}
                  <div className="bg-black rounded-lg p-2">
                    {/* Browser Chrome */}
                    <div className="bg-gray-800 rounded-t-lg px-4 py-2 flex items-center space-x-2">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-gray-700 rounded px-3 py-1 mx-4">
                        <span className="text-xs text-gray-400">lwie-platform-xi.vercel.app</span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-4 h-4 bg-gray-600 rounded"></div>
                        <div className="w-4 h-4 bg-gray-600 rounded"></div>
                      </div>
                    </div>

                    {/* Website Content */}
                    <div className="bg-white rounded-b-lg overflow-hidden">
                      <Image
                        src={home || "/placeholder.svg"}
                        alt="LWIE Platform Screenshot"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* MacBook Base */}
                <div className="h-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-b-2xl shadow-lg"></div>
                <div className="h-2 bg-gradient-to-br from-gray-600 to-gray-700 rounded-b-xl mx-8 shadow-md"></div>
              </div>

              {/* Right Side - Project Details */}
              <div className="space-y-8">
                {/* Project Title & Description */}
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    LWIE Platform
                  </h1>

                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p className="text-lg">
                      A comprehensive platform designed to revolutionize the way people exchange items. LWIE connects
                      users who want to swap what they have for what they need, creating a sustainable marketplace built
                      on the principles of sharing economy.
                    </p>

                    <p>
                      The platform features advanced matching algorithms, secure messaging systems, and location-based
                      recommendations. Built with modern web technologies, it provides a seamless user experience across
                      all devices while maintaining high performance and security standards.
                    </p>

                    <p>
                      This project demonstrates expertise in full-stack development, user experience design, and
                      scalable architecture. The implementation showcases modern development practices including
                      responsive design, real-time features, and comprehensive testing.
                    </p>
                  </div>
                </div>

                {/* Technology Stack */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-emerald-400">Technology Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-4 py-2 text-sm font-medium">
                      Next.js
                    </Badge>
                    <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 px-4 py-2 text-sm font-medium">
                      Node.js
                    </Badge>
                    <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 px-4 py-2 text-sm font-medium">
                      PostgreSQL
                    </Badge>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2 text-sm font-medium">
                      TypeScript
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2 text-sm font-medium">
                      Tailwind CSS
                    </Badge>
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2 text-sm font-medium">
                      Prisma
                    </Badge>
                  </div>
                </div>

                {/* Project Links */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-emerald-400">Project Links</h3>
                  <div className="space-y-3">
                    {/* Frontend Link */}
                    <Card className="backdrop-blur-md bg-black/40 border-white/10 hover:bg-black/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/20">
                      <CardContent className="p-4">
                        <Button
                          variant="ghost"
                          className="w-full justify-between text-left p-0 h-auto hover:bg-transparent"
                          onClick={() => window.open("https://lwie-platform-xi.vercel.app/", "_blank")}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                              <Globe className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-white">Frontend</div>
                              <div className="text-sm text-gray-400">Live Application</div>
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-emerald-400" />
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Dashboard Link */}
                    <Card className="backdrop-blur-md bg-black/40 border-white/10 hover:bg-black/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-500/20">
                      <CardContent className="p-4">
                        <Button
                          variant="ghost"
                          className="w-full justify-between text-left p-0 h-auto hover:bg-transparent"
                          onClick={() => window.open("https://lwie-platform-xi.vercel.app/dashboard", "_blank")}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                              <Monitor className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-white">Dashboard</div>
                              <div className="text-sm text-gray-400">Admin Panel</div>
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-teal-400" />
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Backend/API Link */}
                    <Card className="backdrop-blur-md bg-black/40 border-white/10 hover:bg-black/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20">
                      <CardContent className="p-4">
                        <Button
                          variant="ghost"
                          className="w-full justify-between text-left p-0 h-auto hover:bg-transparent"
                          onClick={() => window.open("https://github.com/foziakassa/lwie-platform", "_blank")}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                              <Server className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-white">Backend/API</div>
                              <div className="text-sm text-gray-400">Source Code</div>
                            </div>
                          </div>
                          <Github className="w-4 h-4 text-cyan-400" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 px-8 py-3 rounded-full shadow-lg shadow-emerald-500/25 transform transition-all duration-300 hover:scale-105"
                    onClick={() => window.open("https://lwie-platform-xi.vercel.app/", "_blank")}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-8 py-3 rounded-full backdrop-blur-sm bg-white/5"
                    onClick={() => window.open("https://github.com/foziakassa/lwie-platform", "_blank")}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="backdrop-blur-md bg-black/80 border-t border-white/10 py-8 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Fozia Kassa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
