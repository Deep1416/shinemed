import type { Metadata } from 'next'
import { ContactPage } from '../../views/ContactPage'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Shinemed Pharmaceuticals Pvt Ltd. Reach us by phone, email, or visit our registered address in Delhi for product inquiries and support.',
  openGraph: {
    title: 'Contact Us | Shinemed Pharmaceuticals',
    description:
      'Reach Shinemed Pharmaceuticals by phone, email, or visit our Delhi office for product inquiries and support.',
    url: 'https://shinemed.in/contact',
  },
}

export default function Page() {
  return <ContactPage />
}
