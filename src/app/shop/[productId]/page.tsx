import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getShopProductById, shopProducts } from '../../../shared/data/shopProducts'
import { ProductDetailPage } from '../../../views/ProductDetailPage'

type Props = { params: Promise<{ productId: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params
  const product = getShopProductById(productId)
  if (!product) return {}

  return {
    title: product.name,
    description: `${product.tagline} — ${product.description.slice(0, 140)}...`,
    openGraph: {
      title: `${product.name} | Shinemed Pharmaceuticals`,
      description: `${product.tagline}. ${product.composition}`,
      url: `https://shinemed.in/shop/${productId}`,
      images: [{ url: product.image, alt: product.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Shinemed Pharmaceuticals`,
      description: product.tagline,
    },
  }
}

export function generateStaticParams() {
  return shopProducts.map((p) => ({ productId: p.id }))
}

export default async function Page({ params }: Props) {
  const { productId } = await params
  const product = getShopProductById(productId)
  if (!product) notFound()
  return <ProductDetailPage product={product} />
}
