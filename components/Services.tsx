'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      id: 'marketing',
      title: 'MARKETING',
      description: 'Strategic campaigns that drive results',
      bgColor: 'bg-[#7e22ce]', // Purple
      hoverBgColor: 'bg-[#9333ea]',
      teamImages: [
        '/images/team/Gemini_Generated_Image_m5f4vam5f4vam5f4.png',
        '/images/team/Gemini_Generated_Image_m5f4vam5f4vam5f4.png',
      ],
    },
    {
      id: 'ads',
      title: 'ADS',
      description: 'Creative ads that convert',
      bgColor: 'bg-[#ec4899]', // Pink
      hoverBgColor: 'bg-[#f472b6]',
      teamImages: [
        '/images/team/Gemini_Generated_Image_m5f4vam5f4vam5f4.png',
        '/images/team/Gemini_Generated_Image_m5f4vam5f4vam5f4.png',
      ],
    },
    {
      id: 'web-development',
      title: 'WEB DEVELOPMENT',
      description: 'Cutting-edge web experiences',
      bgColor: 'bg-[#06b6d4]', // Cyan
      hoverBgColor: 'bg-[#22d3ee]',
      teamImages: [
        '/images/team/Gemini_Generated_Image_m5f4vam5f4vam5f4.png',
        '/images/team/Gemini_Generated_Image_m5f4vam5f4vam5f4.png',
      ],
    },
  ]

  return (
    <section id="services" ref={ref} className="relative w-full min-h-screen overflow-hidden bg-secondary">
      {/* Main Title - Spans across panels */}
      <motion.div
        className="absolute top-20 left-0 right-0 z-30 px-4 md:px-8 lg:px-16 pointer-events-none"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl md:text-8xl lg:text-[12rem] font-bold text-white leading-none tracking-tight">
          PICK YOUR SERVICE
        </h2>
      </motion.div>

      {/* Three Panels Container */}
      <div className="flex flex-col md:flex-row h-screen w-full relative z-10">
        {services.map((service, index) => (
          <ServicePanel
            key={service.id}
            service={service}
            index={index}
            isInView={isInView}
            isLast={index === services.length - 1}
          />
        ))}
      </div>
    </section>
  )
}

interface ServicePanelProps {
  service: {
    id: string
    title: string
    description: string
    bgColor: string
    hoverBgColor: string
    teamImages: string[]
  }
  index: number
  isInView: boolean
  isLast: boolean
}

function ServicePanel({ service, index, isInView }: ServicePanelProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Calculate panel widths - middle panel is wider
  const getPanelWidth = () => {
    if (index === 1) return 'md:w-[45%]' // Middle panel wider
    return 'md:w-[27.5%]' // Side panels narrower
  }

  return (
    <Link href={`/services/${service.id}`}>
      <motion.div
        className={`relative ${getPanelWidth()} w-full h-screen overflow-hidden cursor-pointer group`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Background Color */}
        <div className={`absolute inset-0 ${service.bgColor} z-0`} />

        {/* Diagonal Split Effect - Only on right edge of panels */}
        {index < 2 && (
          <div
            className="absolute top-0 right-0 z-10 pointer-events-none overflow-hidden"
            style={{
              width: '100px',
              height: '100vh',
              clipPath: 'polygon(0 0, 100% 0, 0 100%)',
              backgroundColor: index === 0 ? '#ec4899' : '#06b6d4',
            }}
          />
        )}

        {/* Team Photos Container */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center gap-4 md:gap-8 px-4">
            {service.teamImages.map((img, imgIndex) => (
              <motion.div
                key={imgIndex}
                className="relative w-[200px] md:w-[300px] lg:w-[400px] h-[400px] md:h-[500px] lg:h-[600px]"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        scale: isHovered ? 1.1 : 1,
                        y: 0,
                        x: isHovered ? (imgIndex === 0 ? -20 : 20) : 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.2 + imgIndex * 0.1,
                }}
              >
                {/* Team Photo */}
                <div className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={img}
                    alt={`${service.title} team member ${imgIndex + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 200px, (max-width: 1024px) 300px, 400px"
                    priority={imgIndex === 0 && index === 0}
                    unoptimized
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Service Title - Bottom Left */}
        <motion.div
          className="absolute bottom-20 left-8 md:left-12 z-20 pointer-events-none"
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        >
          <motion.h3
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {service.title}
          </motion.h3>
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-xs"
            animate={{
              opacity: isHovered ? 1 : 0.8,
            }}
          >
            {service.description}
          </motion.p>
        </motion.div>

        {/* LEARN MORE Button - Circular with icon */}
        <motion.div
          className="absolute top-1/2 left-8 md:left-12 -translate-y-1/2 z-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  scale: isHovered ? 1.1 : 1,
                }
              : {}
          }
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
        >
          <motion.div
            className="flex items-center gap-4 group/button"
            whileHover={{ x: 10 }}
          >
            {/* Circular Icon */}
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#10b981] flex items-center justify-center shadow-lg"
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </motion.div>
            {/* Text */}
            <motion.span
              className="text-xl md:text-2xl font-bold text-white"
              animate={{
                opacity: isHovered ? 1 : 0.9,
              }}
            >
              LEARN MORE
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Hover Overlay Effect */}
        <motion.div
          className="absolute inset-0 bg-black/10 z-15"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  )
}
