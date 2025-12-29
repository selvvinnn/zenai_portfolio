'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// Mock service data
const serviceData: Record<string, {
  title: string
  description: string
  icon: string
  color: string
  features: string[]
  process: { step: number; title: string; description: string }[]
  pricing: string
}> = {
  marketing: {
    title: 'MARKETING',
    description: 'Strategic campaigns that drive results and build lasting brand connections.',
    icon: '📈',
    color: 'from-purple-600 to-purple-900',
    features: [
      'Brand Strategy & Positioning',
      'Content Marketing',
      'Social Media Management',
      'Email Campaigns',
      'SEO & SEM',
      'Analytics & Reporting',
    ],
    process: [
      {
        step: 1,
        title: 'Discovery',
        description: 'We dive deep into your brand, audience, and goals to understand what makes you unique.',
      },
      {
        step: 2,
        title: 'Strategy',
        description: 'We develop a comprehensive marketing strategy tailored to your business objectives.',
      },
      {
        step: 3,
        title: 'Execution',
        description: 'We bring the strategy to life with creative campaigns across multiple channels.',
      },
      {
        step: 4,
        title: 'Optimization',
        description: 'We continuously analyze and optimize campaigns for maximum ROI.',
      },
    ],
    pricing: 'Starting at $5,000/month',
  },
  ads: {
    title: 'ADS',
    description: 'Creative ads that convert and maximize your advertising ROI.',
    icon: '🎯',
    color: 'from-pink-600 to-pink-900',
    features: [
      'Creative Development',
      'Campaign Strategy',
      'Multi-Platform Ads',
      'A/B Testing',
      'Performance Optimization',
      'Conversion Tracking',
    ],
    process: [
      {
        step: 1,
        title: 'Research',
        description: 'We analyze your target audience and competitive landscape.',
      },
      {
        step: 2,
        title: 'Creative Concept',
        description: 'We develop compelling ad concepts that resonate with your audience.',
      },
      {
        step: 3,
        title: 'Production',
        description: 'We create high-quality ad assets across all formats and platforms.',
      },
      {
        step: 4,
        title: 'Launch & Scale',
        description: 'We launch campaigns and scale what works for maximum impact.',
      },
    ],
    pricing: 'Starting at $3,000/month',
  },
  'web-development': {
    title: 'WEB DEVELOPMENT',
    description: 'Cutting-edge web experiences that engage users and drive conversions.',
    icon: '⚡',
    color: 'from-cyan-600 to-cyan-900',
    features: [
      'Custom Web Development',
      'E-Commerce Solutions',
      'Web Applications',
      'Mobile Responsive Design',
      'Performance Optimization',
      'Ongoing Maintenance',
    ],
    process: [
      {
        step: 1,
        title: 'Planning',
        description: 'We define requirements, create wireframes, and plan the technical architecture.',
      },
      {
        step: 2,
        title: 'Design',
        description: 'We design beautiful, user-friendly interfaces that align with your brand.',
      },
      {
        step: 3,
        title: 'Development',
        description: 'We build robust, scalable solutions using the latest technologies.',
      },
      {
        step: 4,
        title: 'Launch & Support',
        description: 'We deploy your site and provide ongoing support and updates.',
      },
    ],
    pricing: 'Starting at $10,000/project',
  },
}

export default function ServicePage({ params }: { params: Promise<{ 'service-type': string }> }) {
  const { 'service-type': serviceType } = use(params)
  const serviceInfo = serviceData[serviceType] || serviceData.marketing

  return (
    <main className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
        </motion.div>

        {/* Service Header */}
        <motion.div
          className={`relative rounded-3xl p-12 md:p-16 mb-12 bg-gradient-to-r ${serviceInfo.color} overflow-hidden`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10">
            <div className="text-8xl mb-6">{serviceInfo.icon}</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">{serviceInfo.title}</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              {serviceInfo.description}
            </p>
          </div>
        </motion.div>

        {/* Features */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceInfo.features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-secondary border border-primary/20 hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="w-2 h-2 rounded-full bg-primary mb-3" />
                <h3 className="text-lg font-semibold">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Our Process</h2>
          <div className="space-y-8">
            {serviceInfo.process.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-xl">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pricing CTA */}
        <motion.div
          className="text-center p-12 rounded-3xl bg-gradient-to-r from-primary/20 to-purple-600/20 border border-primary/30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-gray-400 mb-6">{serviceInfo.pricing}</p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            Book a Call ➜
          </Link>
        </motion.div>
      </div>
    </main>
  )
}

