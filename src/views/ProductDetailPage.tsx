import type { ShopProduct } from "../shared/data/shopProducts";

interface Props {
	product: ShopProduct;
}

export function ProductDetailPage({ product }: Props) {
	return (
		<>
			<section className="page-hero" aria-labelledby="product-detail-heading">
				<div className="page-hero__inner">
					<div className="section-kicker section-kicker--center">
						<span aria-hidden="true" />
						PRODUCT
					</div>
					<h1 id="product-detail-heading">{product.name}</h1>
					<p className="page-hero__tagline">{product.tagline}</p>
				</div>
			</section>

			<section className="product-detail-section" aria-label={product.name}>
				<div className="product-detail-section__inner">

					<div className="product-detail-layout">
						<div className="product-detail-media">
							<img
								className="product-detail-media__image"
								src={product.image}
								alt={product.name}
							/>
						</div>

						<div className="product-detail-copy">
							<h2 className="product-detail-title">{product.name}</h2>
							<p className="product-detail-tagline">{product.tagline}</p>
							<p className="product-detail-desc">{product.description}</p>

							<div className="product-detail-composition">
								<span className="product-detail-composition__label">Composition</span>
								<p className="product-detail-composition__text">{product.composition}</p>
							</div>
						</div>
					</div>

					<div className="product-detail-cards">
						<div className="product-info-card">
							<h3 className="product-info-card__title">Indications</h3>
							<ul className="product-info-list">
								{product.indications.map((item) => (
									<li key={item} className="product-info-list__item">
										<span className="product-info-list__dot" aria-hidden="true" />
										{item}
									</li>
								))}
							</ul>
						</div>

						<div className="product-info-card product-info-card--accent">
							<h3 className="product-info-card__title">Key Benefits</h3>
							<ul className="product-info-list">
								{product.keyBenefits.map((item) => (
									<li key={item} className="product-info-list__item">
										<span className="product-info-list__dot" aria-hidden="true" />
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>

				</div>
			</section>
		</>
	);
}
