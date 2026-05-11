import type { Metadata } from 'next'
import { ServicesPage } from '../../views/ServicesPage'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore Shinemed\'s complete range of healthcare services — general clinic, pharmacy & medication, and telehealth consultations — available in person and online.',
  openGraph: {
    title: 'Our Services | Shinemed Pharmaceuticals',
    description:
      'General clinic, pharmacy & medication, and telehealth consultation services available in person and online.',
    url: 'https://shinemed.in/services',
  },
}

export default function Page() {
  return <ServicesPage />
}
