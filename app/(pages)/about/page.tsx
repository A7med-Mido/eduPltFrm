"use client"
import { motion } from 'framer-motion';

export default function Page() {


  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-purple-900/5 to-black" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="inline-block mb-6">
            <span className="text-purple-500 text-sm font-bold tracking-[0.3em] uppercase">
              The Platform
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight mb-8 max-w-5xl leading-none">
            Learn Without Limits
          </h1>
          <p className="text-gray-500 text-xl md:text-2xl max-w-3xl leading-relaxed">
            {`
              PLTFRM is more than just an online learning platform. We're a comprehensive \n
              ecosystem designed to transform how you acquire new skills and advance your career. \n
              From beginner to expert, we provide everything you need to succeed.
            `}
          </p>
        </motion.div>

        {/* What We Offer Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            What We Offer
          </h2>
          <div className="h-1 w-32 bg-purple-500 mb-16" />
          
          <div className="space-y-1">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group py-8 border-b border-white/5 hover:border-purple-500/30 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-8">
                  <span className="text-purple-500/40 text-3xl font-black group-hover:text-purple-500 transition-colors">
                    {feature.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Available On Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            Available Everywhere
          </h2>
          <div className="h-1 w-32 bg-purple-500 mb-16" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="border-l-2 border-purple-500/30 pl-6 group-hover:border-purple-500 transition-colors">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {platform.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Course Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            Explore Categories
          </h2>
          <div className="h-1 w-32 bg-purple-500 mb-16" />
          
          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.3 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="px-6 py-3 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-purple-500 transition-all cursor-pointer"
              >
                {category}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            How It Works
          </h2>
          <div className="h-1 w-32 bg-purple-500 mb-16" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-6xl font-black text-purple-500/20 mb-4">1</div>
              <h3 className="text-2xl font-bold text-white mb-3">Choose Your Path</h3>
              <p className="text-gray-500">
                Browse our extensive catalog and select courses that align with your goals. 
                Filter by skill level, duration, and topic.
              </p>
            </div>
            <div>
              <div className="text-6xl font-black text-purple-500/20 mb-4">2</div>
              <h3 className="text-2xl font-bold text-white mb-3">Learn & Practice</h3>
              <p className="text-gray-500">
                Engage with video lessons, interactive exercises, and real-world projects. 
                Learn at your own pace with lifetime access.
              </p>
            </div>
            <div>
              <div className="text-6xl font-black text-purple-500/20 mb-4">3</div>
              <h3 className="text-2xl font-bold text-white mb-3">Earn & Advance</h3>
              <p className="text-gray-500">
                Complete courses, build your portfolio, and earn certificates. 
                Showcase your achievements and advance your career.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="text-center py-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8">
            Ready to Start?
          </h2>
          <p className="text-gray-500 text-xl mb-12 max-w-2xl mx-auto">
            Join thousands of learners who are already transforming their careers with PLTFRM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-purple-600 text-white font-bold text-lg rounded-full hover:bg-purple-500 transition-colors"
            >
              Get Started Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-white/10 text-white font-bold text-lg rounded-full hover:border-purple-500 transition-colors"
            >
              View All Courses
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Accent blurs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute top-2/3 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
    </div>
  );
}


const features = [
  {
    number: '01',
    title: 'Interactive Learning Experience',
    description: 'Engage with dynamic content, quizzes, and hands-on projects that make learning stick. Our platform adapts to your learning style and pace.'
  },
  {
    number: '02',
    title: 'Industry-Recognized Certificates',
    description: 'Earn credentials that matter. Our certificates are recognized by leading companies worldwide and validate your expertise.'
  },
  {
    number: '03',
    title: 'Real-World Projects',
    description: 'Build your portfolio with practical projects designed by industry experts. Apply what you learn immediately to real scenarios.'
  },
  {
    number: '04',
    title: 'Lifetime Access',
    description: 'Learn at your own pace with unlimited access to all course materials. Come back anytime to refresh your knowledge.'
  },
  {
    number: '05',
    title: 'Expert Mentorship',
    description: 'Get guidance from professionals who have been where you want to go. Direct access to instructors and industry mentors.'
  },
  {
    number: '06',
    title: 'Global Community',
    description: 'Join thousands of learners worldwide. Collaborate, network, and grow together in our supportive learning community.'
  }
];

const platforms = [
  { name: 'Web Platform', description: 'Full-featured desktop experience' },
  { name: 'Mobile Apps', description: 'Learn on iOS & Android' },
  { name: 'Offline Mode', description: 'Download and learn anywhere' },
  { name: 'Smart TV', description: 'Big screen learning experience' }
];

const categories = [
  'Web Development',
  'Data Science',
  'Design & UX',
  'Business',
  'Marketing',
  'Programming',
  'AI & Machine Learning',
  'Cloud Computing'
];