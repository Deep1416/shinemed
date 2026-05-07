import type { LucideIcon } from 'lucide-react'
import { Droplet, HeartPulse, Pill, Scan, Stethoscope } from 'lucide-react'

export type ShopProduct = {
  id: string
  name: string
  price: number
  currency: string
  description: string
  Icon: LucideIcon
}

export const shopProducts: ShopProduct[] = [
  {
    id: 'diabecare-strips',
    name: 'DiabeCare Strips',
    price: 32,
    currency: 'USD',
    description:
      'DiabeCare Strips provide fast, accurate blood glucose readings, helping you manage diabetes confidently from home or on the go.',
    Icon: Pill,
  },
  {
    id: 'thermoscan-pro',
    name: 'ThermoScan Pro',
    price: 24,
    currency: 'USD',
    description:
      'ThermoScan Pro delivers quick, reliable temperature readings with an easy-to-use design for everyday home monitoring.',
    Icon: Scan,
  },
  {
    id: 'aquapure-sanitizer',
    name: 'AquaPure Sanitizer',
    price: 15,
    currency: 'USD',
    description:
      'AquaPure Sanitizer is a gentle, effective hand sanitizer that helps keep you protected at home, work, and while traveling.',
    Icon: Droplet,
  },
  {
    id: 'breatheease-nebulizer',
    name: 'BreatheEase Nebulizer',
    price: 50,
    currency: 'USD',
    description:
      'BreatheEase Nebulizer delivers soothing respiratory treatment with consistent mist output—ideal for home care and recovery.',
    Icon: Stethoscope,
  },
  {
    id: 'purepulse-oximeter',
    name: 'PurePulse Oximeter',
    price: 40,
    currency: 'USD',
    description:
      'PurePulse Oximeter provides quick SpO₂ and pulse readings to support fitness tracking, wellness, and respiratory monitoring.',
    Icon: HeartPulse,
  },
  {
    id: 'flexiwrap-bandages',
    name: 'FlexiWrap Bandages',
    price: 10,
    currency: 'USD',
    description:
      'FlexiWrap Bandages are breathable, flexible, and secure—perfect for everyday cuts, scrapes, and active lifestyles.',
    Icon: Pill,
  },
]

export function getShopProductById(id: string) {
  return shopProducts.find((p) => p.id === id)
}

