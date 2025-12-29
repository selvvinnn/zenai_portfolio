'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// Mock project data - replace with actual data fetching
const projectData: Record<string, {
  title: string
  description: string
  client: string
  year: string
  category: string
  images: string[]
  details: string
}> = {
  'client-1': {
    title: 'Brand Identity Design',
    description: 'Complete rebrand for tech startup',
    client: 'TechCorp',
    year: '2024',
    category: 'Branding',
    images: ['/api/placeholder/1200/800', '/api/placeholder/1200/800', '/api/placeholder/1200/800'],
    details: 'We created a comprehensive brand identity system for TechCorp, including logo design, color palette, typography, and brand guidelines. The new identity reflects their innovative approach while maintaining professionalism.',
  },
  'client-2': {
    title: 'UI/UX Design System',
    description: 'Modern design system for SaaS platform',
    client: 'SaaSPro',
    year: '2024',
    category: 'UI/UX',
    images: ['/api/placeholder/1200/800', '/api/placeholder/1200/800'],
    details: 'Developed a scalable design system that improved consistency across all products. The system includes component library, design tokens, and comprehensive documentation.',
  },
  'client-3': {
    title: 'Creative Campaign',
    description: 'Visual identity and marketing materials',
    client: 'CreativeStudio',
    year: '2024',
    category: 'Marketing',
    images: ['/api/placeholder/1200/800', '/api/placeholder/1200/800', '/api/placeholder/1200/800'],
    details: 'Designed and executed a full creative campaign including social media assets, print materials, and digital advertisements that increased brand awareness by 250%.',
  },
  'web-1': {
    title: 'E-Commerce Platform',
    description: 'Modern shopping experience',
    client: 'ShopTech',
    year: '2024',
    category: 'Web Development',
    images: ['/api/placeholder/1200/800', '/api/placeholder/1200/800'],
    details: 'Built a high-performance e-commerce platform using Next.js and Shopify. Features include advanced filtering, real-time inventory, and seamless checkout experience.',
  },
  'web-2': {
    title: 'SaaS Dashboard',
    description: 'Analytics and insights platform',
    client: 'DataViz',
    year: '2024',
    category: 'Web Development',
    images: ['/api/placeholder/1200/800', '/api/placeholder/1200/800', '/api/placeholder/1200/800'],
    details: 'Created an intuitive dashboard for data visualization and analytics. The platform handles millions of data points with real-time updates and interactive charts.',
  },
  'web-3': {
    title: 'Mobile App',
    description: 'iOS & Android native app',
    client: 'MobileFirst',
    year: '2024',
    category: 'Mobile Development',
    images: ['/api/placeholder/1200/800', '/api/placeholder/1200/800'],
    details: 'Developed a cross-platform mobile application using React Native. The app features offline capabilities, push notifications, and seamless user experience.',
  },
}

export default function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
  const { project } = use(params)
  const projectInfo = projectData[project] || projectData['client-1']

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
            href="/#work"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Work
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold">
              {projectInfo.category}
            </span>
            <span className="text-gray-400">{projectInfo.year}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{projectInfo.title}</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-2">{projectInfo.description}</p>
          <p className="text-lg text-gray-500">Client: {projectInfo.client}</p>
        </motion.div>

        {/* Project Details */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
            {projectInfo.details}
          </p>
        </motion.div>

        {/* Project Images */}
        <div className="space-y-8">
          {projectInfo.images.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">🖼️</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start your project?
          </h3>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            Get in Touch ➜
          </Link>
        </motion.div>
      </div>
    </main>
  )
}

