import { motion } from "motion/react";
import { Terminal, Settings, Database, Shield } from "lucide-react";

const architectures = [
  {
    icon: Terminal,
    title: "Linux/Unix Server Administration",
    details: [
      "Diagnose and solve connection, performance, and security problems",
      "Server configuration using terminal, system monitor, and control panel",
      "VirtualBox virtualization for testing and development environments",
    ],
  },
  {
    icon: Database,
    title: "Backup & Data Management",
    details: [
      "Backup and restoration of critical server data",
      "Apply necessary updates and security patches",
      "Database management and optimization",
    ],
  },
  {
    icon: Settings,
    title: "Service Configuration",
    details: [
      "Install and manage web servers, email servers, FTP servers",
      "Configure network services: DNS, DHCP, Proxy",
      "Deploy and maintain databases and applications",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    details: [
      "Security services configuration and monitoring",
      "Protection against external threats with regular updates",
      "User access control and Active Directory management",
    ],
  },
];

export function InfrastructureExperience() {
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
          <h2 className="text-4xl md:text-5xl tracking-tight">Technical Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive server administration and technical support capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {architectures.map((arch, index) => (
            <motion.div
              key={arch.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 border border-gray-200"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-50 border border-cyan-200">
                    <arch.icon className="w-6 h-6 text-cyan-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl pt-2">{arch.title}</h3>
                </div>
                <ul className="space-y-3">
                  {arch.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}