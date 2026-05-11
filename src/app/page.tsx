import type { Metadata } from 'next'
import { HomePage } from '../views/HomePage'

export const metadata: Metadata = {
  title: 'Quality Medicines & Healthcare Products for Every Family',
  description:
    'Explore Shinemed Pharmaceuticals — India\'s trusted source for multivitamins, antibiotics, women\'s health, pain relief, antifungals, and more. Compassionate care for every family.',
  alternates: { canonical: 'https://shinemed.in' },
  keywords: [
    'Shinemed Pharmaceuticals home',
    'best pharmaceutical company India',
    'trusted medicines India',
    'buy multivitamin India',
    'women health supplements India',
    'antibiotic tablets India',
    'pain relief tablet India',
    'antifungal capsule India',
    'healthcare products family India',
  ],
  openGraph: {
    title: 'Shinemed Pharmaceuticals | Quality Medicines for Every Family',
    description:
      'Multivitamins, antibiotics, women\'s health, pain relief, antifungals and more — trusted pharmaceutical products manufactured by Shinemed for Indian families.',
    url: 'https://shinemed.in',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shinemed Pharmaceuticals | Quality Medicines for Every Family',
    description:
      'Multivitamins, antibiotics, women\'s health, pain relief, and more — trusted by Indian families.',
  },
}

export default function Page() {
  return <HomePage />
}
