'use client'

import { useEffect } from 'react'
import { ReactLenis } from '@studio-freight/react-lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  // Optional: Uncomment to use Lenis for smooth scroll
  // return (
  //   <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
  //     {children}
  //   </ReactLenis>
  // )

  // For now, using CSS smooth scroll
  return <>{children}</>
}

