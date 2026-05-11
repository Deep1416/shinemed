import { shopProducts } from "../shared/data/shopProducts";
import Link from "next/link";

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
						{shopProducts.map((product) => (
							<Link className="shop-card" key={product.id} href={`/shop/${product.id}`}>
								<div className="shop-card__media">
									<img
										className="shop-card__image"
										src={product.image}
										alt={product.name}
									/>
								</div>
								<h3 className="shop-card__name">{product.name}</h3>
							</Link>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
