import Hero from '@/components/Hero'
import OurWork from '@/components/OurWork'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <OurWork />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  )
}

