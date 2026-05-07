import { shopProducts } from '../shared/data/shopProducts'
import { Link } from 'react-router-dom'

export function ShopPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="shop-heading">
        <div className="page-hero__inner">
          <div className="section-kicker section-kicker--center">
            <span aria-hidden="true" />
            SHOP
          </div>
          <h1 className="page-hero__title-lines" id="shop-heading">
            <span className="page-hero__title-line">Explore Shinemed</span>
            <span className="page-hero__title-line">Featured Products</span>
          </h1>
        </div>
      </section>

      <section className="shop-section" aria-label="Featured products">
        <div className="shop-section__inner">
          <div className="shop-grid">
            {shopProducts.map((product) => {
              const Icon = product.Icon
              return (
                <Link className="shop-card" key={product.id} to={`/shop/${product.id}`}>
                  <div className="shop-card__media">
                    <Icon className="shop-card__icon" size={88} strokeWidth={1.35} aria-hidden="true" />
                  </div>
                  <h3 className="shop-card__name">{product.name}</h3>
                  <div className="shop-card__footer">
                    <span className="shop-card__price">
                      $ {product.price} {product.currency}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

