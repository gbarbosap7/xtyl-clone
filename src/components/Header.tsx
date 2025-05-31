import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-xtyl-black/90 backdrop-blur-sm' : 'py-6'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-clash-display text-2xl font-bold hover-scale">
            XTYL
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-12 h-12 hover-scale"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
          </button>
        </div>

        {/* Full Screen Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-xtyl-black/95 backdrop-blur-lg"
            >
              <div className="h-full flex items-center justify-center">
                <ul className="space-y-8 text-center">
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="hover-scale"
                  >
                    <Link href="/work" className="font-clash-display text-4xl font-bold">
                      Work
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="hover-scale"
                  >
                    <Link href="/about" className="font-clash-display text-4xl font-bold">
                      About
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="hover-scale"
                  >
                    <Link href="/contact" className="font-clash-display text-4xl font-bold">
                      Contact
                    </Link>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
} 