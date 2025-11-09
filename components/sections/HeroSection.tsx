"use client"
import { motion } from 'framer-motion';

export default function HeroSection() {
  const content = {
    badge: 'LEARN • GROW • EXCEL',
    title: 'PLTFRM',
    subtitle: 'Transform Your Learning Journey with Next-Gen Education',
    cta: {
      primary: 'Start Learning',
      secondary: 'Explore Courses'
    },
    stats: [
      { num: '50K+', label: 'Students' },
      { num: '200+', label: 'Courses' },
      { num: '95%', label: 'Success Rate' },
      { num: '24/7', label: 'Support' }
    ]
  };

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/10 via-black to-black" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-8"
        >
          <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full">
            <span className="text-gray-400 text-sm font-bold tracking-widest">
              {content.badge}
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-8xl md:text-9xl font-black text-white tracking-tighter mb-6"
        >
          {content.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-400 text-xl md:text-2xl font-medium max-w-3xl mx-auto mb-12"
        >
          {content.subtitle}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button className="px-10 py-4 bg-purple-600 text-white font-bold text-lg rounded-full hover:bg-purple-500 transition-colors">
            {content.cta.primary}
          </button>
          <button className="px-10 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-colors">
            {content.cta.secondary}
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {content.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
            >
              <div className="text-4xl font-black text-white mb-2">
                {stat.num}
              </div>
              <div className="text-gray-500 font-bold text-xs uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Accent blurs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
    </div>
  );
}