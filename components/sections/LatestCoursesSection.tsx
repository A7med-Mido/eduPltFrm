"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function LatestCoursesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null)


  return (
    <div className="relative h-fit w-fit bg-black overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="-z-10 absolute inset-0 bg-linear-to-br from-black via-purple-900/5 to-black h-fit" />
      <div className="-z-10 absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px] h-fit" />

      <div className="relative min-h-screen w-screen max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-22"
        >
          <div className="inline-block mb-4">
            <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full">
              <span className="text-gray-400 text-sm font-bold tracking-widest">
                LATEST COURSES
              </span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Start Learning Today
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our newest courses designed by industry experts
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {courses.map((course, index) => (
            <Link
              href={`/courses/${course.id}`}
              key={course.id}
            >
              <motion.div
                variants={{cardVariants}}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group cursor-pointer"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm overflow-hidden max-h-[600px]"
                >
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon/Image */}
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="mb-4 aspect-square w-full relative rounded-xl overflow-hidden bg-white/5"
                    >
                      <Image 
                        src={course.image} 
                        alt={course.title}
                        width={1024}
                        height={1024}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Level Badge */}
                    <div className="inline-block mb-3">
                      <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                        {course.level}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {course.title}
                    </h3>

                    {/* Instructor */}
                    <p className="text-gray-400 text-sm mb-4">
                      by {course.instructor}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <span>⏱️</span>
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>👥</span>
                        <span>{course.students}</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-white/10 mb-4" />

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-white">
                        {course.price}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-purple-600 text-white text-sm font-bold rounded-full hover:bg-purple-500 transition-colors"
                      >
                        Enroll
                      </motion.button>
                    </div>
                  </div>

                  {/* Border glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.4), transparent)',
                      filter: 'blur(20px)'
                    }}
                  />
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Accent blurs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
    </div>
  );
}

// dummy data for the api data
const courses = [
  {
    id: 1,
    title: 'Advanced React Patterns',
    instructor: 'Sarah Chen',
    duration: '8 weeks',
    students: '2.3k',
    level: 'Advanced',
    price: '$89',
    image: '/aqw.png'
  },
  {
    id: 2,
    title: 'UI/UX Design Mastery',
    instructor: 'Marcus Lee',
    duration: '6 weeks',
    students: '1.8k',
    level: 'Intermediate',
    price: '$79',
    image: '/aqw.png'
  },
  {
    id: 3,
    title: 'Full Stack Development',
    instructor: 'Alex Rivera',
    duration: '12 weeks',
    students: '3.1k',
    level: 'All Levels',
    price: '$129',
    image: '/aqw.png'
  },
  {
    id: 4,
    title: 'Data Science',
    instructor: 'Dr. Emma Walsh',
    duration: '10 weeks',
    students: '2.7k',
    level: 'Beginner',
    price: '$99',
    image: '/aqw.png'
  }
];


// animation props
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};