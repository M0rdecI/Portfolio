const experiences = [
  {
    title: "Implementation and Support Engineer Intern",
    company: "Fintech Group Kenya",
    location: "Nairobi, KE",
    period: "11/2024 - Present",
    responsibilities: [
      "Software Development: Development of financial applications, chatbots and APIs using C#, SQL (MS SQL Server), React JS, AWS, Azure, and Azure DevOps.",
      "Database Management & Monitoring: Assisted in database startup and support for senior developers using MS SQL Server Studio and monitoring of database performance and resolved issues to minimize downtime during development.",
      "Code Review & Security Analysis: Participated in code reviews to ensure high-quality, maintainable code as well as web application security analysis and identifying vulnerabilities.",
      "Cloud Native Application Development and Research: Involved in the development and research of cloud-native applications, ensuring scalability, performance, and integration within cloud environments such as Azure and AWS.",
    ],
  },
  {
    title: "IT Technician (Part Time)",
    company: "Vebeneza Medical Centre",
    location: "Nairobi, KE",
    period: "02/2024",
    responsibilities: [
      "Provided tech support to employees in the Pharmaceutical, Reception, Consultation and Laboratory departments and provided security training to employees",
      "Monitored the IT infrastructure in the department, including hardware checks, security updates, OS patches, drivers, and BIOS flash",
      "Maintained a comprehensive inventory of hardware and software for all IT devices including laptops, and desktop computers",
      "Designing and implementing web based MERN stack applications for the company including their website",
      "Maintained an up-to-date for all company sites and servers",
    ],
  },
  {
    title: "Junior Web Developer (MERN Stack)",
    company: "Code4Genius (Freelance Web Development Experience)",
    location: "Nairobi, KE",
    period: "08/2023 - 12/2023",
    responsibilities: [
      "Collaborated with a team of developers to design and develop websites for diverse clients using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Implemented responsive and user-friendly interfaces, ensuring cross-browser compatibility and accessibility.",
      "Integrated backend functionalities for user authentication, data storage, and API integrations.",
      "Conducted code reviews, debugging, and testing to ensure high-quality and error-free deliverables.",
      "Communicated with clients to understand project requirements, provide progress updates, and incorporate feedback.",
    ],
  },
  {
    title: "IT Intern",
    company: "Celsysis Designs",
    location: "Nairobi, KE",
    period: "05/2022 - 07/2022",
    responsibilities: [
      "Created 3D renderings of architectural drawings.",
      "Provided support in network administration.",
      "Handled network installation and monitoring.",
      "Conducted system maintenance.",
      "Managed hardware installation and maintenance.",
      "Submitted architectural drawings for approval",
    ],
  },
]

export default function Experience() {
  return (
    <section className="my-12">
      <h2 id="experience" className="text-3xl font-mono mb-6">
        <span className="text-green-400">&gt;</span> Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-mono text-green-400">{exp.title}</h3>
            <p className="text-gray-400">
              {exp.company} | {exp.location} | {exp.period}
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-300">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="font-mono text-sm">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

