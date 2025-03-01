"use client"

import { useState, useEffect, useRef } from "react"
import { Shield, Code, Network, Search, PenToolIcon as Tool, Cpu } from "lucide-react"
import Image from "next/image"

const skills = [
  { name: "Penetration Testing", icon: Shield },
  { name: "Network Security", icon: Network },
  { name: "Backend Development", icon: Code },
  { name: "Vulnerability Assessment", icon: Search },
  { name: "Computer Maintenance", icon: Tool },
  { name: "Computer Networking", icon: Cpu },
]

const languages = [
  { name: "Python", icon: "python" },
  { name: "C#", icon: "csharp" },
  { name: "MySQL", icon: "mysql" },
  { name: "JavaScript", icon: "javascript" },
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "nodejs" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Go", icon: "go" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
]

export default function Skills() {
  const [hoveredLanguage, setHoveredLanguage] = useState<string | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let scrollInterval: NodeJS.Timeout

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
          carousel.scrollLeft = 0
        } else {
          carousel.scrollLeft += 1
        }
      }, 30)
    }

    const stopScroll = () => {
      clearInterval(scrollInterval)
    }

    const delayedStart = setTimeout(startScroll, 2000)

    carousel.addEventListener("mouseenter", stopScroll)
    carousel.addEventListener("mouseleave", startScroll)

    return () => {
      clearTimeout(delayedStart)
      clearInterval(scrollInterval)
      carousel.removeEventListener("mouseenter", stopScroll)
      carousel.removeEventListener("mouseleave", startScroll)
    }
  }, [])

  return (
    <section className="my-12">
      <h2 id="skills" className="text-3xl font-mono mb-6 text-center">
        <span className="text-green-400">&gt;</span> Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-gray-800 p-4 rounded-lg flex items-center">
            <skill.icon className="w-6 h-6 mr-4 text-green-400" />
            <span className="font-mono">{skill.name}</span>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-mono mb-4 text-center">
        <span className="text-green-400">&gt;</span> Programming Languages & Technologies
      </h3>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10"></div>
        <div ref={carouselRef} className="flex overflow-x-hidden py-4">
          {[...languages, ...languages].map((lang, index) => (
            <div
              key={`${lang.name}-${index}`}
              className="flex-shrink-0 w-32 mx-2 bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center"
              onMouseEnter={() => {
                setTimeout(() => setHoveredLanguage(lang.name), 600)
              }}
              onMouseLeave={() => setHoveredLanguage(null)}
            >
              <Image
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${lang.icon}/${lang.icon}-original.svg`}
                alt={lang.name}
                width={48}
                height={48}
                className="text-green-400"
              />
              {hoveredLanguage === lang.name && (
                <p className="mt-2 font-mono text-sm animate-typing overflow-hidden whitespace-nowrap">{lang.name}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

