import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 relative">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-8">
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-sm uppercase tracking-[0.3em] text-gray-500"
              >
                Systems Engineer / IT Technician
              </motion.div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-7xl lg:text-8xl tracking-tight"
              >
                Jose Libardo Rincon Nieto
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-2xl space-y-4"
            >
              <p className="text-xl md:text-2xl text-gray-700">
                Linux systems administration, Web development, and technical support specialist
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  Problem Solving
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  Technical Support
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  Continuous Learning
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-5 h-5 text-gray-400 animate-bounce" />
      </motion.div>
    </section>
  );
}