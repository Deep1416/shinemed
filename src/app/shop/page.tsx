import type { Metadata } from 'next'
import { ShopPage } from '../../views/ShopPage'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Browse Shinemed\'s full range of pharmaceutical products — from multivitamins and antibiotics to women\'s health and pain relief formulations.',
  openGraph: {
    title: 'Products | Shinemed Pharmaceuticals',
    description:
      'Browse our full range of pharmaceutical products — multivitamins, antibiotics, women\'s health, pain relief, and more.',
    url: 'https://shinemed.in/shop',
  },
}

export default function Page() {
  return <ShopPage />
}
