import Link from "next/link";
import { shopProducts } from "../data/shopProducts";
import { ActionButton } from "../ui/ActionButton";

export function FeaturedProducts() {
	const featured = shopProducts.slice(0, 6);

	return (
		<section className="shop-section" id="products" aria-labelledby="products-heading">
			<div className="shop-section__inner">
				<div className="services-section__header">
					<div className="section-kicker section-kicker--center">
						<span aria-hidden="true" />
						OUR PRODUCTS
					</div>
					<h2 id="products-heading">Trusted Formulations for Better Health</h2>
				</div>

				<div className="shop-grid">
					{featured.map((product) => (
						<Link className="shop-card" key={product.id} href={`/shop/${product.id}`}>
							<div className="shop-card__media">
								<img className="shop-card__image" src={product.image} alt={product.name} />
							</div>
							<h3 className="shop-card__name">{product.name}</h3>
						</Link>
					))}
				</div>

				<div style={{ textAlign: "center", marginTop: "clamp(32px, 4vw, 56px)" }}>
					<ActionButton to="/shop">View All Products</ActionButton>
				</div>
			</div>
		</section>
	);
}
