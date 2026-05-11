import type { Metadata } from 'next'
import { AboutPage } from '../../views/AboutPage'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Shinemed Pharmaceuticals Pvt Ltd — our mission, core values, and commitment to delivering trusted healthcare solutions for every family.',
  openGraph: {
    title: 'About Us | Shinemed Pharmaceuticals',
    description:
      'Our mission, values, and commitment to delivering trusted healthcare solutions for every family.',
    url: 'https://shinemed.in/about',
  },
}

export default function Page() {
  return <AboutPage />
}
