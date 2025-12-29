'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  testimonial: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    testimonial:
      'ZenAI transformed our brand identity completely. Their creative approach combined with technical excellence delivered beyond our expectations.',
    avatar: '/api/placeholder/100/100',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder',
    company: 'SaaSPro',
    testimonial:
      'The web platform they built for us is not just beautiful, it converts. Our user engagement increased by 300% after launch.',
    avatar: '/api/placeholder/100/100',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'CreativeStudio',
    testimonial:
      'Their marketing campaigns are pure genius. We saw ROI within the first month. ZenAI understands both creativity and data.',
    avatar: '/api/placeholder/100/100',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Product Manager',
    company: 'InnovateLabs',
    testimonial:
      'Working with ZenAI was seamless. They delivered a world-class design system that our team loves to use every day.',
    avatar: '/api/placeholder/100/100',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'CMO',
    company: 'BrandVault',
    testimonial:
      'The ad campaigns they created broke all our previous records. Creative, strategic, and results-driven - everything we needed.',
    avatar: '/api/placeholder/100/100',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <section ref={ref} className="relative py-32 px-4 md:px-8 lg:px-16 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-4">What Clients Say</h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Main Card */}
          <div className="relative h-[500px] md:h-[600px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50 flex items-center justify-center hover:bg-primary/40 transition-colors"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </motion.button>
          <motion.button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50 flex items-center justify-center hover:bg-primary/40 transition-colors"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-primary/30'
                }`}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative h-full rounded-3xl overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-secondary to-primary/10 p-8 md:p-12 flex flex-col justify-between"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        borderColor: 'rgba(126, 34, 206, 0.8)',
        boxShadow: '0 0 40px rgba(126, 34, 206, 0.5)',
      }}
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateY: isHovered ? 2 : 0,
        rotateX: isHovered ? -2 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Neon Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: isHovered
            ? 'linear-gradient(45deg, rgba(126, 34, 206, 0.3), rgba(147, 51, 234, 0.3))'
            : 'transparent',
        }}
        animate={{
          opacity: isHovered ? [0.5, 1, 0.5] : 0,
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Quote Icon */}
      <div className="text-6xl text-primary/20 mb-4">"</div>

      {/* Testimonial Text */}
      <motion.p
        className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-8 text-gray-200 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {testimonial.testimonial}
      </motion.p>

      {/* Author Info */}
      <motion.div
        className="flex items-center gap-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-2xl">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="text-xl font-bold">{testimonial.name}</h4>
          <p className="text-gray-400">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

