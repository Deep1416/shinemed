import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Header } from '../shared/layout/Header'
import { Footer } from '../shared/layout/Footer'
import { ScrollToHash } from './ScrollToHash'
import '../index.css'
import '../App.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://shinemed.in'),
  applicationName: 'Shinemed Pharmaceuticals Pvt Ltd',

  title: {
    default: 'Shinemed Pharmaceuticals Pvt Ltd | Trusted Medicines & Healthcare',
    template: '%s | Shinemed Pharmaceuticals',
  },

  description:
    'Shinemed Pharmaceuticals Pvt Ltd is a trusted pharmaceutical company in India. We manufacture and supply high-quality medicines, nutritional supplements, and healthcare products for families across India.',

  keywords: [
    'Shinemed Pharmaceuticals',
    'Shinemed Pharma',
    'pharmaceutical company India',
    'pharmaceutical company Delhi',
    'buy medicines online India',
    'healthcare products India',
    'wellness supplements India',
    'Ziscovit multivitamin',
    'Shineclav CV 625 antibiotic',
    'Ferosin XT iron supplement',
    'Rabmed D acid reflux',
    'Etococshine pain relief',
    'Dyshingest dydrogesterone',
    'Shincal XT calcium supplement',
    'Thioshine A muscle relaxant',
    'Itramiz 200 antifungal',
    'Shinewash vaginal wash',
    'pharma company Delhi',
    'Indian pharmaceutical manufacturer',
    'prescription medicines India',
    'OTC medicines India',
  ],

  authors: [{ name: 'Shinemed Pharmaceuticals Pvt Ltd', url: 'https://shinemed.in' }],
  creator: 'Shinemed Pharmaceuticals Pvt Ltd',
  publisher: 'Shinemed Pharmaceuticals Pvt Ltd',
  category: 'Healthcare & Pharmaceuticals',

  alternates: { canonical: 'https://shinemed.in' },

  icons: { icon: '/favicon.svg' },

  openGraph: {
    type: 'website',
    siteName: 'Shinemed Pharmaceuticals Pvt Ltd',
    title: 'Shinemed Pharmaceuticals Pvt Ltd | Trusted Medicines & Healthcare',
    description:
      'High-quality medicines, nutritional supplements, and healthcare products — manufactured by Shinemed Pharmaceuticals and trusted by families across India.',
    locale: 'en_IN',
    url: 'https://shinemed.in',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Shinemed Pharmaceuticals Pvt Ltd | Trusted Medicines & Healthcare',
    description:
      'High-quality medicines, nutritional supplements, and healthcare products trusted by families across India.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Shinemed Pharmaceuticals Pvt Ltd',
  url: 'https://shinemed.in',
  logo: 'https://shinemed.in/favicon.svg',
  description:
    'Shinemed Pharmaceuticals Pvt Ltd manufactures and supplies trusted medicines and healthcare products for families across India.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '9/334, Ground Floor, Gali No. 9, Lalita Park',
    addressLocality: 'Delhi',
    postalCode: '110092',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-8757469988',
    contactType: 'customer service',
    email: 'shinemedpharmaceuticals@gmail.com',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Shinemed Pharmaceuticals Pvt Ltd',
  url: 'https://shinemed.in',
  description:
    'Trusted pharmaceutical products and healthcare services for every family across India.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <main className="site-shell">
          <Header />
          {children}
          <Footer />
        </main>
        <ScrollToHash />
      </body>
    </html>
  )
}
