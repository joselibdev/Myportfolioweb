import { motion } from "motion/react";

const techStack = {
  "Operating Systems": [
    "Linux/Unix",
    "Windows Server",
    "VirtualBox",
  ],
  "Server Administration": [
    "Linux Systems Administration",
    "Windows Server Management",
    "Active Directory",
    "Server Optimization",
  ],
  "Web Technologies": [
    "Web Development",
    "Web Servers (Apache, Nginx)",
    "Email Servers",
    "FTP Servers",
  ],
  "Network Services": [
    "DNS Configuration",
    "DHCP Management",
    "Proxy Services",
    "Network Printers",
  ],
  "Database Management": [
    "Database Installation",
    "Database Configuration",
    "Database Maintenance",
    "Backup & Restoration",
  ],
  "Technical Support": [
    "On-site Support",
    "Remote Support",
    "Incident Resolution",
    "User Training",
  ],
  "Tools & Monitoring": [
    "Terminal/Command Line",
    "System Monitor",
    "Task Manager",
    "Control Panel",
  ],
  "Security": [
    "Security Services",
    "Patch Management",
    "User Access Control",
    "Threat Protection",
  ],
};

export function TechStack() {
  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 mb-20"
        >
          <h2 className="text-4xl md:text-5xl tracking-tight">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive expertise in systems administration, server management, and technical support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {Object.entries(techStack).map(([category, technologies], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg text-gray-900 pb-2 border-b border-gray-200">
                {category}
              </h3>
              <ul className="space-y-2">
                {technologies.map((tech) => (
                  <li key={tech} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1 h-1 bg-cyan-500 rounded-full"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-12"
        >
          <h3 className="text-2xl mb-8">Key Strengths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Problem-solving and technical troubleshooting",
              "Server maintenance and optimization",
              "Detailed technical documentation",
              "Continuous learning and skill development",
              "Team collaboration and communication",
              "Attention to detail and quality standards",
            ].map((strength) => (
              <div
                key={strength}
                className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200"
              >
                <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm text-gray-700">{strength}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}