import { ShoppingBag } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'
import { getShopProductById } from '../shared/data/shopProducts'

export function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>()
  const product = productId ? getShopProductById(productId) : undefined

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const Icon = product.Icon

  return (
    <>
      <section className="page-hero" aria-labelledby="product-detail-heading">
        <div className="page-hero__inner">
          <div className="section-kicker section-kicker--center">
            <span aria-hidden="true" />
            PRODUCT
          </div>
          <h1 id="product-detail-heading">Product Details</h1>
        </div>
      </section>

      <section className="product-detail-section" aria-label={product.name}>
        <div className="product-detail-section__inner">
          <div className="product-detail-layout">
            <div className="product-detail-media">
              <Icon className="product-detail-media__icon" size={120} strokeWidth={1.2} aria-hidden="true" />
            </div>

            <div className="product-detail-copy">
              <h2 className="product-detail-title">{product.name}</h2>
              <p className="product-detail-desc">{product.description}</p>

              <div className="product-detail-actions" aria-label="Purchase options">
                <label className="product-detail-qty">
                  <span className="product-detail-qty__label">Qty</span>
                  <input className="product-detail-qty__input" type="number" min={1} defaultValue={1} />
                </label>
                <button className="product-detail-add" type="button">
                  Add to cart
                  <span className="product-detail-add__icon" aria-hidden="true">
                    <ShoppingBag size={18} strokeWidth={2.4} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

