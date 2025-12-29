'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Instagram, Twitter, Linkedin } from 'lucide-react'
import MagneticButton from './MagneticButton'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="relative py-20 px-4 md:px-8 lg:px-16 bg-secondary border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-4xl font-bold mb-4">ZENAI</h3>
            <p className="text-gray-400 text-lg">
              Creative x Tech Studio
              <br />
              Where Creativity meets Intelligence
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#work"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">➜</span>
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">➜</span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">➜</span>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center hover:bg-primary/40 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5 text-primary" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center hover:bg-primary/40 transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5 text-primary" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center hover:bg-primary/40 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center py-12 border-t border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Legendary.
          </h3>
          <MagneticButton href="#contact" variant="primary">
            Get Started ➜
          </MagneticButton>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center text-gray-500 text-sm pt-8 border-t border-primary/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>© {currentYear} ZenAI. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

