"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { FaPython, FaReact, FaNodeJs } from "react-icons/fa"
import { SiMysql, SiJavascript, SiMongodb, SiDjango, SiExpress } from "react-icons/si"
import { VscTerminal, VscTerminalBash } from "react-icons/vsc"
import { DiCssdeck } from "react-icons/di"

const getIconComponent = (name: string) => {
  switch (name.toLowerCase()) {
    case "python":
      return FaPython
    case "csharp":
      return DiCssdeck
    case "mysql":
      return SiMysql
    case "javascript":
      return SiJavascript
    case "react":
      return FaReact
    case "nodejs":
      return FaNodeJs
    case "mongodb":
      return SiMongodb
    case "django":
      return SiDjango
    case "express":
      return SiExpress
    case "batch":
      return VscTerminalBash
    case "kali":
      return VscTerminal
    default:
      return FaPython // Default icon
  }
}

const fullstackProjects = [
  {
    name: "SSC Dynamo Academy Website",
    description: "A MERN stack website for SSC Dynamo Academy.",
    details: "Developed using MongoDB, Express.js, React, and Node.js.",
    logos: ["mongodb", "express", "react", "nodejs"],
  },
  {
    name: "Local Bakery Website",
    description: "A website for a local bakery using React, SQL, and Django.",
    details: "Implemented with React for the frontend, SQL for the database, and Django for the backend.",
    logos: ["react", "mysql", "django"],
  },
  {
    name: "Vebeneza Medical Center Website",
    description: "A website for Vebeneza Medical Center using React, Django, and SQL.",
    details: "Built with React for the frontend, Django for the backend, and SQL for the database.",
    logos: ["react", "django", "mysql"],
  },
  {
    name: "AfroCrates",
    description: "A DJ Pooling Website built with React and Django.",
    details: "Developed using React for the frontend and Django for the backend.",
    logos: ["react", "django"],
  },
]

const cybersecurityProjects = [
  {
    name: "TCP/IP Honeypot",
    description: "A honeypot implementation using Python.",
    details: "Developed a TCP/IP honeypot to detect and analyze potential cyber threats.",
    logos: ["python"],
  },
  {
    name: "Zip File Cracker",
    description: "A batch script to crack password-protected zip files.",
    details: "Created a tool to demonstrate the vulnerability of weak zip file passwords.",
    logos: ["batch"],
  },
  {
    name: "SIEM to SOAR Implementation",
    description: "Implementation of SIEM to SOAR using WAZUH and Shuffle.",
    details: "Integrated WAZUH SIEM with Shuffle SOAR for automated incident response.",
    logos: ["python"], // Assuming Python was used, adjust if necessary
  },
  {
    name: "Malware Analysis Lab",
    description: "Set up a malware analysis environment using Remnux and Kali Linux.",
    details: "Created a secure environment for analyzing malware samples using virtualization.",
    logos: ["kali"],
  },
]

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const renderProjects = (projects: typeof fullstackProjects) => (
    <div className="space-y-4">
      {projects.map((project) => (
        <div key={project.name} className="bg-gray-800 p-4 rounded-lg">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setExpandedProject(expandedProject === project.name ? null : project.name)}
          >
            <ChevronRight
              className={`w-5 h-5 mr-2 transition-transform ${
                expandedProject === project.name ? "transform rotate-90" : ""
              }`}
            />
            <h3 className="text-xl font-mono">{project.name}</h3>
          </div>
          <p className="mt-2 text-gray-400">{project.description}</p>
          {expandedProject === project.name && (
            <>
              <p className="mt-2 text-green-400 font-mono">{project.details}</p>
              <div className="mt-4 flex space-x-2">
                {project.logos.map((logo, index) => {
                  const IconComponent = getIconComponent(logo)
                  return <IconComponent key={index} className="w-8 h-8 text-green-400" />
                })}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <section className="my-12 px-4 md:px-0">
      <h2 id="projects" className="text-3xl font-mono mb-6">
        <span className="text-green-400">&gt;</span> Projects
      </h2>
      <h3 className="text-2xl font-mono mb-4">Fullstack Projects</h3>
      {renderProjects(fullstackProjects)}
      <h3 className="text-2xl font-mono mt-8 mb-4">Cybersecurity Projects</h3>
      {renderProjects(cybersecurityProjects)}
    </section>
  )
}

