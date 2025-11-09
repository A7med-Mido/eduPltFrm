"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutSection() {


  return (
    <div className="relative h-fit w-fit bg-black overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-purple-900/5 to-black" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px]" />

      <div className="relative z-10 min-h-screen w-screen max-w-7xl mx-auto px-6 pb-44 pt-14">
        {/* Section Header */}
        <Link 
          href='/about'
          className='w-fit h-fit'
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="inline-block mb-6">
              <span className="text-purple-500 text-sm font-bold tracking-[0.3em] uppercase">
                About Us
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6 max-w-4xl">
              Empowering Your Future
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
            {` We're on a mission to make quality education accessible to everyone,\n
              everywhere. Join thousands of learners transforming their careers.`}
            </p>
          </motion.div>
        </Link>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20 space-y-1"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ x: 10 }}
              className="group py-6 border-b border-white/5 hover:border-purple-500/30 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-8">
                <span className="text-purple-500/40 text-2xl font-black group-hover:text-purple-500 transition-colors">
                  {feature.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-base md:text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center md:text-left"
            >
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm md:text-base font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Accent blurs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
    </div>
  );
}


const features = [
  {
    number: '01',
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of real-world experience'
  },
  {
    number: '02',
    title: 'Self-Paced Learning',
    description: 'Study at your own pace with lifetime access to course materials'
  },
  {
    number: '03',
    title: 'Certified Programs',
    description: 'Earn recognized certificates upon successful course completion'
  },
  {
    number: '04',
    title: 'Community Support',
    description: 'Join a vibrant community of learners and get help when you need it'
  }
];

const stats = [
  { value: '500K+', label: 'Active Learners' },
  { value: '1,000+', label: 'Quality Courses' },
  { value: '50+', label: 'Expert Mentors' },
  { value: '95%', label: 'Success Rate' }
];