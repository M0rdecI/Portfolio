const certifications = [
  { name: "Microsoft Certified: Azure Developer Associate (AZ-204)", date: "Awarded 2025" },
  { name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)", date: "Awarded 2025" },
  { name: "Cyber Shujaa Microsoft ADC Software Security Specialist (AZ-204 & SC-900)", date: "Awarded Aug 2024" },
  { name: "Cyber Shujaa Cisco Ethical Hacker Instructor Led", date: "Awarded Aug 2024" },
  { name: "Cisco Ethical Hacker", date: "Awarded May 2024" },
  { name: "Cybersecurity Essentials Membership Certificate", date: "Awarded Jul 2023" },
  { name: "CCSK v4.1 Foundation Training", date: "Awarded Jul 2023" },
  { name: "ISC2 Certified in Cybersecurity (CC)", date: "Awaiting" },
  { name: "Cyber Shujaa (Cyber Security Analyst)", date: "Awarded Aug 2023" },
  { name: "Cyber Shujaa (Secure Operations Analyst)", date: "Awarded Aug 2023" },
]

export default function Certifications() {
  return (
    <section className="my-12">
      <h2 id="certifications" className="text-3xl font-mono mb-6">
        <span className="text-green-400">&gt;</span> Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-mono text-green-400">{cert.name}</h3>
            <p className="text-gray-400 text-sm">{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

