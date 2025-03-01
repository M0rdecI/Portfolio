"use client"

import { useEffect, useState } from "react"

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

export default function Loader() {
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState("Initializing...")

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          return 100
        }
        return prevProgress + 10
      })
    }, 300)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress < 33) {
      setMessage("Booting system...")
    } else if (progress < 66) {
      setMessage("Loading modules...")
    } else if (progress < 100) {
      setMessage("Establishing secure connection...")
    } else {
      setMessage("Access granted. Welcome!")
    }
  }, [progress])

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
      <div className="w-64 h-4 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-4 text-green-500 font-mono">{hackerify(message)}</p>
    </div>
  )
}

