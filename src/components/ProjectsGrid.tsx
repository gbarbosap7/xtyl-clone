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
    title: 'Project One',
    category: 'Development',
    image: '/images/project1.jpg',
    link: '/work/project-one'
  },
  {
    id: '2',
    title: 'Project Two',
    category: 'Design',
    image: '/images/project2.jpg',
    link: '/work/project-two'
  },
  // Adicione mais projetos conforme necessário
]

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <Link href={project.link} className="block relative aspect-[4/3] overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="relative w-full h-full"
            >
              <div className="absolute inset-0 bg-xtyl-black/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white"
            >
              <h3 className="font-clash-display text-2xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="font-satoshi text-sm text-gray-300">
                {project.category}
              </p>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
} 