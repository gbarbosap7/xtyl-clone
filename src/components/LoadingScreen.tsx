import React from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-xtyl-black"
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="relative"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-0.5 bg-white absolute bottom-0 left-0"
        />
        <h1 className="font-clash-display text-4xl font-bold">
          XTYL DIGITAL
        </h1>
      </motion.div>
    </motion.div>
  )
} 