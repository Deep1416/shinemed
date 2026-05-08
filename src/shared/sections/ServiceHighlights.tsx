import { Check } from "lucide-react";
import { services } from "../data/services";

export function ServiceHighlights() {
	return (
		<section className="service-highlights" aria-label="Service highlights">
			<div className="service-highlights__inner">
				{services.map((service) => (
					<article className="service-highlight-card" key={service.id}>
						<div className="service-highlight-card__copy">
							<span className="service-highlight-card__num">[{service.id}]</span>
							<h2 className="service-highlight-card__title">{service.title}</h2>
							<p className="service-highlight-card__desc">{service.description}</p>

							<ul className="service-highlight-card__list" aria-label={`${service.title} benefits`}>
								{service.highlights?.map((item) => (
									<li className="service-highlight-card__item" key={item}>
										<span className="service-highlight-card__check" aria-hidden="true">
											<Check size={16} strokeWidth={3} />
										</span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>

						<figure className="service-highlight-card__media">
							<img src={service.image} alt={service.imageAlt} />
						</figure>
					</article>
				))}
			</div>
		</section>
	);
}
