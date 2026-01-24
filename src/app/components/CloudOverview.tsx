import { motion } from "motion/react";
import { Server, Code, Shield, HardDrive, Network, Users } from "lucide-react";

const capabilities = [
  {
    icon: Server,
    title: "Linux Systems Administration",
    description: "Expert in Linux/Unix server management, configuration, and optimization for high performance",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Development and deployment of web applications with focus on server-side technologies",
  },
  {
    icon: Shield,
    title: "Windows Server & Active Directory",
    description: "Server management, user administration, and security configuration for Windows environments",
  },
  {
    icon: HardDrive,
    title: "Server Management",
    description: "Installation, configuration, and maintenance of databases, web servers, email, and FTP servers",
  },
  {
    icon: Network,
    title: "Network Services",
    description: "Configuration and management of DNS, DHCP, Proxy, and other essential network services",
  },
  {
    icon: Users,
    title: "Technical Support",
    description: "On-site and remote technical support with focus on incident resolution and user assistance",
  },
];

export function CloudOverview() {
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
          <h2 className="text-4xl md:text-5xl tracking-tight">Professional Profile</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Systems Engineer with experience in Linux systems administration, Web development, Windows server, 
            server management, Active Directory, and technical support. Noted for ability to solve technical problems, 
            maintain and optimize Linux servers, and create detailed technical documentation. Committed to continuous 
            training and learning about the latest trends in Linux systems administration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4 p-6 border border-gray-200 hover:border-cyan-500 transition-colors duration-300"
            >
              <capability.icon className="w-8 h-8 text-cyan-500" strokeWidth={1.5} />
              <div className="space-y-2">
                <h3 className="text-xl">{capability.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}