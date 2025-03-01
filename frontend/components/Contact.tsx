import { Mail, Github, Linkedin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section className="my-12">
      <h2 id="contact" className="text-3xl font-mono mb-6">
        <span className="text-green-400">&gt;</span> Contact
      </h2>
      <div className="bg-gray-800 p-6 rounded-lg">
        <p className="font-mono mb-4">Ready to collaborate? Let's connect:</p>
        <div className="space-y-4">
          <a href="mailto:mordecaiotieno79@gmail.com" className="flex items-center text-green-400 hover:text-green-300">
            <Mail className="w-6 h-6 mr-2" />
            mordecaiotieno79@gmail.com
          </a>
          <a href="tel:+254794730892" className="flex items-center text-green-400 hover:text-green-300">
            <Phone className="w-6 h-6 mr-2" />
            +254 794730892
          </a>
          <a
            href="https://www.linkedin.com/in/mordecai-otieno-ab6361207"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green-400 hover:text-green-300"
          >
            <Linkedin className="w-6 h-6 mr-2" />
            linkedin.com/in/mordecai-otieno-ab6361207
          </a>
          <a
            href="https://github.com/M0rdecI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green-400 hover:text-green-300"
          >
            <Github className="w-6 h-6 mr-2" />
            github.com/M0rdecI
          </a>
        </div>
      </div>
    </section>
  )
}

