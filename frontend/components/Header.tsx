"use client"

import { useState, useEffect } from "react"
import { Terminal } from "lucide-react"

export default function Header() {
  const [text, setText] = useState("")
  const fullText = "H3ll0 th3r3! 1'm Mordecai Otieno, Full Stack Developer / Security Analyst"

  useEffect(() => {
    let index = 0
    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(intervalId)
      }
    }, 50)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <header className="bg-gray-900 text-green-500 py-4">
      <div className="container mx-auto flex items-center px-4">
        <Terminal className="w-8 h-8 mr-4" />
        <h2 className="text-xl font-mono">
          <span className="text-green-400">$</span> {text}
          <span className="animate-blink">|</span>
        </h2>
      </div>
    </header>
  )
}