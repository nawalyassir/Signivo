import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Hand, Mic } from 'lucide-react'
import BottomNavigation from '@/components/BottomNavigation'
import AvatarDisplay from '@/components/AvatarDisplay'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen bg-white pb-24">
      <motion.div
        className="max-w-md mx-auto px-4 pt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-soft">
            <Hand className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold text-center text-gray-900 mb-4"
        >
          Where Signs Find Their Voice
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 text-center mb-12"
        >
          Real-time communication between sign language users and hearing people.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="space-y-4 mb-12">
          <Link href="/sign">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <Hand className="w-5 h-5" />
              Start Signing
            </motion.button>
          </Link>

          <Link href="/voice">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-secondary flex items-center justify-center gap-2"
            >
              <Mic className="w-5 h-5" />
              Start Speaking
            </motion.button>
          </Link>
        </motion.div>

        {/* Avatar Preview */}
        <motion.div
          variants={itemVariants}
          className="bg-gray-50 rounded-2xl p-6 shadow-soft"
        >
          <p className="text-sm font-semibold text-gray-600 mb-4">Your Avatar</p>
          <div className="flex justify-center">
            <AvatarDisplay
              name="Alex"
              skinTone="tan"
              size="md"
            />
          </div>
        </motion.div>
      </motion.div>

      <BottomNavigation />
    </div>
  )
}
