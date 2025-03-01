"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { FileDown } from "lucide-react"

const roles = ["Full Stack Developer", "Security Analyst"]

const hackerify = (text: string) => {
  return text.replace(/[aeiou]/gi, (match) => {
    const replacements: { [key: string]: string } = {
      a: "4",
      e: "3",
      i: "1",
      o: "0",
      u: "|_|",
      A: "4",
      E: "3",
      I: "1",
      O: "0",
      U: "|_|",
    }
    return replacements[match] || match
  })
}

export default function Hero() {
  const [displayedRole, setDisplayedRole] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    const typeRole = () => {
      const currentRole = roles[roleIndex]

      if (!isDeleting && displayedRole === currentRole) {
        timer = setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && displayedRole === "") {
        setIsDeleting(false)
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
      } else {
        timer = setTimeout(
          () => {
            setDisplayedRole((prev) => {
              if (isDeleting) {
                return prev.slice(0, -1)
              } else {
                const nextChar = currentRole[prev.length]
                return prev + nextChar
              }
            })
          },
          isDeleting ? 50 : 150,
        )
      }
    }

    typeRole()

    return () => clearTimeout(timer)
  }, [displayedRole, isDeleting, roleIndex])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="text-center z-10">
        <div className="mb-8">
          <Image
            src="/PORTFOLIO.jpg"
            alt="Mordecai Otieno"
            width={200}
            height={200}
            className="rounded-full border-4 border-green-500 mx-auto"
          />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">{hackerify("Mordecai Otieno")}</h1>
        <p className="text-xl md:text-2xl mb-4 h-8 font-mono">{hackerify(displayedRole)}</p>
        <a
          href="/path-to-your-cv.pdf"
          download
          className="inline-flex items-center bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded transition duration-300"
        >
          <FileDown className="mr-2" />
          Download CV
        </a>
      </div>
    </section>
  )
}

