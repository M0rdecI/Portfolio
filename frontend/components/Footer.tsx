"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

const navItems = [
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    function draw() {
      ctx.fillStyle = "rgba(0, 10, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "rgba(0, 255, 0, 0.15)"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(Math.random() * 128)
        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx.fillText(text, x, y)

        if (y > canvas.height && Math.random() > 0.99) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <footer className="relative bg-gray-900 text-green-500 py-8">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="container mx-auto px-4 relative z-10">
        <nav className="flex flex-wrap justify-center mb-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="mx-2 my-1 hover:text-green-400 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Mordecai Otieno. All rights reserved.</p>
          <p className="mt-2">Full Stack Developer / Security Analyst</p>
        </div>
      </div>
    </footer>
  )
}

