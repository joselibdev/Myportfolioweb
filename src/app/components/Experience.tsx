import { motion } from "motion/react";

const experiences = [
  {
    period: "June 2024 - October 2025",
    role: "IT Technician",
    company: "INETUM",
    location: "Bogota D.C",
    highlights: [
      "Provide technical support services to users and clients, including on-site resolution of incidents with installed products and services",
      "Install, configure, and maintain computer equipment and systems for both user-level and multi-user environments",
      "Repair equipment and components according to established quality standards and perform necessary tests to ensure correct functioning",
      "Install, configure, and maintain general-purpose software and specific applications",
      "Advise and assist users and clients with the use and maintenance of equipment and installed software",
      "Install, configure, and maintain network printers, security services, email accounts, peripherals, and workstation components",
      "Configure and maintain network services such as DNS, DHCP, Proxy, among others",
      "Perform necessary tests and follow up on specific and/or recurring incidents in the services provided",
      "Maintain tools and databases updated with all activities applied to incident resolution",
      "Collaborate on logistics activities and movement of computer equipment in centers where on-site work is performed",
    ],
  },
  {
    period: "December 2022 - February 2024",
    role: "Junior Operating Systems Administrator / Linux Administrator",
    company: "SONDA SERVICIOS S.A.S",
    location: "Bogota D.C",
    highlights: [
      "Functions: Second Level Support Specialist - Linux",
      "Diagnose and solve connection, performance, security, or configuration problems on Linux/Unix, VirtualBox, and Windows servers",
      "Use tools like terminal, system monitor, task manager, or control panel for server management",
      "Perform backup and restoration of data stored on servers",
      "Apply necessary updates and patches to keep servers current and protected against external threats",
      "Install, configure, and manage services and applications running on servers",
      "Manage databases, web servers, email servers, FTP servers, and other critical services",
    ],
  },
];

export function Experience() {
  return (
    <section className="py-32 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 mb-20"
        >
          <h2 className="text-4xl md:text-5xl tracking-tight">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Professional background in systems administration and technical support
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-32 top-0 bottom-0 w-px bg-gray-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row gap-8"
              >
                {/* Period */}
                <div className="md:w-32 flex-shrink-0">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">
                    {exp.period}
                  </span>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-32 -translate-x-1/2 w-3 h-3 bg-cyan-500 rounded-full border-4 border-gray-50"></div>

                {/* Content */}
                <div className="flex-1 bg-white p-8 border border-gray-200 ml-6 md:ml-0">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl">{exp.role}</h3>
                      <div className="text-gray-600">
                        {exp.company} • {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3 text-gray-600">
                          <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}