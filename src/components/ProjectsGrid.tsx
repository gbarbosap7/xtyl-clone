import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface Project {
  id: string
  title: string
  category: string
  image: string
  link: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Immersive Experience',
    category: 'Interactive Design',
    image: 'https://xtyl.digital/images/projects/project1.jpg',
    link: '/work/immersive-experience'
  },
  {
    id: '2',
    title: 'Digital Art Gallery',
    category: 'Web Development',
    image: 'https://xtyl.digital/images/projects/project2.jpg',
    link: '/work/digital-art-gallery'
  },
  {
    id: '3',
    title: 'Virtual Reality Hub',
    category: '3D Design',
    image: 'https://xtyl.digital/images/projects/project3.jpg',
    link: '/work/virtual-reality-hub'
  },
  {
    id: '4',
    title: 'Interactive Installation',
    category: 'Creative Technology',
    image: 'https://xtyl.digital/images/projects/project4.jpg',
    link: '/work/interactive-installation'
  }
]

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <Link href={project.link} className="block relative aspect-video overflow-hidden bg-xtyl-gray">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="relative w-full h-full"
            >
              <div className="absolute inset-0 bg-black/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-20 flex flex-col justify-end p-8"
            >
              <h3 className="font-clash-display text-3xl font-bold mb-3 text-white">
                {project.title}
              </h3>
              <p className="font-satoshi text-base text-gray-300">
                {project.category}
              </p>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
} 