import { motion } from "motion/react";
import { Mail, MapPin, Phone, FileText, Linkedin, Twitter, Instagram, Github } from "lucide-react";

export function Contact() {
  return (
    <section className="py-32 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl tracking-tight">Contact Information</h2>
            <p className="text-xl text-gray-600">
              Available for systems administration, technical support, and Linux server management opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="mailto:joselrn01@gmail.com"
              className="flex items-center gap-4 p-6 bg-white border border-gray-200 hover:border-cyan-500 transition-colors duration-300 group"
            >
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-cyan-500 transition-colors" strokeWidth={1.5} />
              <div className="space-y-1">
                <div className="text-sm text-gray-500">Email</div>
                <div className="text-gray-900 break-all">joselrn01@gmail.com</div>
              </div>
            </a>

            <a
              href="tel:+573103051729"
              className="flex items-center gap-4 p-6 bg-white border border-gray-200 hover:border-cyan-500 transition-colors duration-300 group"
            >
              <Phone className="w-6 h-6 text-gray-400 group-hover:text-cyan-500 transition-colors" strokeWidth={1.5} />
              <div className="space-y-1">
                <div className="text-sm text-gray-500">Phone</div>
                <div className="text-gray-900">+57 310 305 1729</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 bg-white border border-gray-200">
              <MapPin className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
              <div className="space-y-1">
                <div className="text-sm text-gray-500">Location</div>
                <div className="text-gray-900">Bogotá D.C., Colombia</div>
              </div>
            </div>

            <a
              href="#"
              className="flex items-center gap-4 p-6 bg-white border border-gray-200 hover:border-cyan-500 transition-colors duration-300 group"
            >
              <FileText className="w-6 h-6 text-gray-400 group-hover:text-cyan-500 transition-colors" strokeWidth={1.5} />
              <div className="space-y-1">
                <div className="text-sm text-gray-500">Resume</div>
                <div className="text-gray-900">Download PDF</div>
              </div>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Connect on Social Media</p>
            <div className="flex gap-4">
              <a
                href="www.linkedin.com/in/jose-libardo-r-41771189"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-gray-200 hover:border-cyan-500 hover:bg-cyan-50 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-gray-600 group-hover:text-cyan-600 transition-colors" strokeWidth={1.5} />
              </a>
              
              <a
                href="https://twitter.com/joselib__"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-gray-200 hover:border-cyan-500 hover:bg-cyan-50 transition-all duration-300 group"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-6 h-6 text-gray-600 group-hover:text-cyan-600 transition-colors" strokeWidth={1.5} />
              </a>
              
              <a
                href="https://www.instagram.com/joselib__"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-gray-200 hover:border-cyan-500 hover:bg-cyan-50 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-gray-600 group-hover:text-cyan-600 transition-colors" strokeWidth={1.5} />
              </a>
              
              <a
                href="https://github.com/joselibdev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-gray-200 hover:border-cyan-500 hover:bg-cyan-50 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-gray-600 group-hover:text-cyan-600 transition-colors" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-gray-200 text-center text-sm text-gray-500"
        >
          <p>© 2026 Jose Libardo Rincon Systems Engineer specializing in Linux administration and technical support.</p>
        </motion.div>
      </div>
    </section>
  );
}