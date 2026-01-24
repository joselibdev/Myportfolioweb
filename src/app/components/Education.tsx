import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    period: "February 2023 - December 2023",
    degree: "Systems Engineering",
    institution: "Fundación de educación superior San José",
    location: "Colombia",
    type: "Professional Degree",
    description: "Advanced engineering program focused on software development, systems administration, networks, and IT infrastructure management.",
  },
  {
    period: "January 2020 - December 2022",
    degree: "Technologist in Analysis and Development of Information Systems",
    institution: "SENA VIRTUAL",
    location: "Colombia",
    type: "Technology Degree",
    description: "Comprehensive technology program covering systems analysis, software development, database management, and information systems design.",
  },
];

const additionalTraining = [
  "Linux Systems Administration",
  "Windows Server Management",
  "Active Directory Configuration",
  "Network Services Configuration",
  "Database Management",
  "Web Development",
  "Technical Support Best Practices",
  "Server Security and Compliance",
];

export function Education() {
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
          <h2 className="text-4xl md:text-5xl tracking-tight">Education & Training</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Academic background and continuous professional development
          </p>
        </motion.div>

        {/* Formal Education */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 border border-gray-200 hover:border-cyan-500 transition-colors duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-cyan-50 border border-cyan-200">
                  <GraduationCap className="w-8 h-8 text-cyan-600" strokeWidth={1.5} />
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <h3 className="text-2xl">{edu.degree}</h3>
                      <span className="text-sm text-gray-500 uppercase tracking-wide">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-lg text-gray-700">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.location} • {edu.type}</p>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Training & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 border border-gray-200"
        >
          <div className="flex items-start gap-6">
            <div className="p-4 bg-white border border-gray-200">
              <Award className="w-8 h-8 text-cyan-600" strokeWidth={1.5} />
            </div>
            
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-2xl mb-2">Professional Development</h3>
                <p className="text-gray-600">
                  Continuous training and skill development in modern IT technologies and best practices
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {additionalTraining.map((training) => (
                  <div
                    key={training}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0"></span>
                    {training}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}