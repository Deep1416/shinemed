import { Navigate, useParams } from "react-router-dom";
import { getShopProductById } from "../shared/data/shopProducts";

export function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? getShopProductById(productId) : undefined;

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const Icon = product.Icon;

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
              <Icon
                className="product-detail-media__icon"
                size={120}
                strokeWidth={1.2}
                aria-hidden="true"
              />
            </div>

            <div className="product-detail-copy">
              <h2 className="product-detail-title">{product.name}</h2>
              <p className="product-detail-desc">{product.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
