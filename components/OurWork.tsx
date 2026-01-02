'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

export default function OurWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="work" ref={ref} className="relative py-32 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-4">Our Work</h2>
          <p className="text-xl md:text-2xl text-gray-400">
            Where Creativity meets Intelligence
          </p>
        </motion.div>

        {/* Reels Showcase */}
        <ReelsShowcase isInView={isInView} />

        {/* Design Portfolio Cards */}
        <DesignPortfolio isInView={isInView} />

        {/* Websites & Apps */}
        <WebsitesApps isInView={isInView} />
      </div>
    </section>
  )
}

// Reels/Video Showcase Component
function ReelsShowcase({ isInView }: { isInView: boolean }) {
  // Update these paths with your actual video file paths in the public directory
  // Note: Files in public/ are served from root, so use /videos/filename.mp4
  const videos = [
    { 
      id: 1, 
      src: '/videos/dog.mp4'
    },
    { 
      id: 2, 
      src: '/videos/reel2.mp4' // Update with your video path
    },
    { 
      id: 3, 
      src: '/videos/reel3.mp4' // Update with your video path
    },
    { 
      id: 4, 
      src: '/videos/reel4.mp4' // Update with your video path
    },
    { 
      id: 5, 
      src: '/videos/reel5.mp4' // Update with your video path
    },
  ]

  return (
    <motion.div
      className="mb-32"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.h3 
        className="text-3xl md:text-4xl font-bold mb-8"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Reels
      </motion.h3>
      <div className="overflow-x-auto overflow-y-hidden scrollbar-hide-desktop -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-16 lg:px-16">
        <div className="flex gap-4 md:gap-6 w-max">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function VideoCard({ video, index, isInView }: { video: { id: number; src: string }; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Ensure video starts muted (required for autoplay)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
    }
  }, [])

  return (
    <motion.div
      className="relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer group bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-lg w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0"
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      onHoverStart={() => {
        setIsHovered(true)
        if (videoRef.current) {
          videoRef.current.muted = false
          videoRef.current.play().catch((error) => {
            console.error('Error playing video:', error)
          })
        }
      }}
      onHoverEnd={() => {
        setIsHovered(false)
        if (videoRef.current) {
          videoRef.current.muted = true
          videoRef.current.pause()
        }
      }}
      whileHover={{ 
        scale: 1.03,
        y: -8,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <video
        ref={videoRef}
        src={video.src}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="auto"
        onError={(e) => {
          console.error('Video failed to load:', video.src, e)
        }}
        onLoadedData={() => {
          console.log('Video loaded successfully:', video.src)
        }}
        onMouseEnter={() => {
          if (videoRef.current) {
            videoRef.current.muted = false
          }
        }}
        onMouseLeave={() => {
          if (videoRef.current) {
            videoRef.current.muted = true
          }
        }}
      />
      
      {/* Hover Overlay with smooth animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent flex items-center justify-center pointer-events-none z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />
      
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 0.3 : 0,
          boxShadow: isHovered ? '0 0 30px rgba(126, 34, 206, 0.5)' : '0 0 0px rgba(126, 34, 206, 0)'
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </motion.div>
  )
}

// Design Portfolio Cards Component
function DesignPortfolio({ isInView }: { isInView: boolean }) {
  const projects = [
    {
      id: 'client-1',
      title: 'Brand Identity Design',
      description: 'Complete rebrand for tech startup',
      image: '/api/placeholder/800/600',
      client: 'TechCorp',
    },
    {
      id: 'client-2',
      title: 'UI/UX Design System',
      description: 'Modern design system for SaaS platform',
      image: '/api/placeholder/800/600',
      client: 'SaaSPro',
    },
    {
      id: 'client-3',
      title: 'Creative Campaign',
      description: 'Visual identity and marketing materials',
      image: '/api/placeholder/800/600',
      client: 'CreativeStudio',
    },
  ]

  return (
    <motion.div
      className="mb-32"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-8">Design Portfolio</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <DesignCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

function DesignCard({
  project,
  index,
}: {
  project: { id: string; title: string; description: string; image: string; client: string }
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/work/${project.id}`}>
      <motion.div
        className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Placeholder Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">🎨</span>
          </div>
        </div>

        {/* Dark Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h4
            className="text-2xl font-bold mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            {project.title}
          </motion.h4>
          <motion.p
            className="text-gray-300 text-center mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {project.description}
          </motion.p>
          <motion.button
            className="px-6 py-3 bg-primary text-white rounded-full font-semibold flex items-center gap-2"
            initial={{ y: 20, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See More ➜
          </motion.button>
        </motion.div>
      </motion.div>
    </Link>
  )
}

// Websites & Apps Component
function WebsitesApps({ isInView }: { isInView: boolean }) {
  const projects = [
    {
      id: 'web-1',
      title: 'E-Commerce Platform',
      description: 'Modern shopping experience',
      image: '/api/placeholder/800/600',
      tech: 'Next.js, Shopify',
    },
    {
      id: 'web-2',
      title: 'SaaS Dashboard',
      description: 'Analytics and insights platform',
      image: '/api/placeholder/800/600',
      tech: 'React, TypeScript',
    },
    {
      id: 'web-3',
      title: 'Mobile App',
      description: 'iOS & Android native app',
      image: '/api/placeholder/800/600',
      tech: 'React Native',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-8">Websites & Apps</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <WebAppCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

function WebAppCard({
  project,
  index,
}: {
  project: { id: string; title: string; description: string; image: string; tech: string }
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/work/${project.id}`}>
      <motion.div
        className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group border-2 border-transparent hover:border-primary transition-colors"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -10 }}
      >
        {/* Placeholder Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">💻</span>
          </div>
        </div>

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h4
            className="text-2xl font-bold mb-2"
            initial={{ x: -20, opacity: 0 }}
            animate={isHovered ? { x: 0, opacity: 1 } : {}}
          >
            {project.title}
          </motion.h4>
          <motion.p
            className="text-gray-300 mb-2"
            initial={{ x: -20, opacity: 0 }}
            animate={isHovered ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            {project.description}
          </motion.p>
          <motion.p
            className="text-primary text-sm"
            initial={{ x: -20, opacity: 0 }}
            animate={isHovered ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {project.tech}
          </motion.p>
        </motion.div>
      </motion.div>
    </Link>
  )
}

