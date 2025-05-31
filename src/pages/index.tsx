import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import AnimatedText from '@/components/AnimatedText'
import ProjectsGrid from '@/components/ProjectsGrid'

export default function Home() {
  return (
    <>
      <Head>
        <title>XTYL Digital - Creative Development Studio</title>
        <meta name="description" content="XTYL Digital is a creative development studio focused on crafting unique digital experiences through innovative design and cutting-edge technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-xtyl-black">
        <Header />

        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <AnimatedText
              text="XTYL DIGITAL"
              className="font-clash-display text-7xl md:text-9xl font-bold text-gradient mb-6"
              delay={0.5}
            />
            <AnimatedText
              text="Creative Development Studio"
              className="font-satoshi text-xl md:text-2xl text-gray-400 tracking-wide"
              delay={1}
            />
          </div>
        </section>

        {/* About Section */}
        <section className="min-h-screen flex items-center justify-center py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto text-center"
            >
              <h2 className="font-clash-display text-5xl md:text-7xl font-bold mb-12 text-gradient">
                Crafting Digital Experiences
              </h2>
              <p className="font-satoshi text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                We are a creative development studio specializing in immersive digital experiences.
                Our team combines cutting-edge technology with innovative design to create
                memorable and impactful solutions that push the boundaries of digital interaction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="min-h-screen py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="font-clash-display text-5xl md:text-7xl font-bold mb-8 text-gradient">
                Selected Works
              </h2>
            </motion.div>
            <ProjectsGrid />
          </div>
        </section>
      </main>
    </>
  )
} 