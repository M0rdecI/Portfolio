"use client"

import { useState, useEffect } from "react"
import Loader from "@/components/Loader"
import MatrixBackground from "@/components/MatrixBackground"
import Hero from "@/components/Hero"
import Header from "@/components/Header"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Certifications from "@/components/Certifications"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="relative min-h-screen bg-black text-green-500">
      <MatrixBackground />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <Hero />
        <Header />
        <main>
          <Skills />
          <Experience />
          <Education />
          <Certifications />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

