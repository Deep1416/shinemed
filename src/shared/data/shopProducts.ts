import ziscovit from "../../assets/shop/ziscovit.jpeg";
import shinewash from "../../assets/shop/shinewash.jpeg";
import etococshine from "../../assets/shop/etococshine.jpeg";
import rabmed from "../../assets/shop/rabmed.jpeg";
import shineclav from "../../assets/shop/shineclav.jpeg";
import dyshingest from "../../assets/shop/dyshingest.jpeg";
import ferosin from "../../assets/shop/ferosin.jpeg";
import itramiz from "../../assets/shop/itramiz.jpeg";
import shincal from "../../assets/shop/shincal.jpeg";
import thioshine from "../../assets/shop/thioshine.jpeg";

export type ShopProduct = {
	id: string;
	name: string;
	tagline: string;
	description: string;
	composition: string;
	indications: string[];
	keyBenefits: string[];
	image: string;
};

export const shopProducts: ShopProduct[] = [
	{
		id: "ziscovit-5g",
		name: "Ziscovit-5G",
		tagline: "Nature's Blend for Healthy Life",
		description: "Ziscovit-5G is a revolutionary multivitamin & antioxidant supplement that helps optimize everyday energy levels. The 5G stands for Ginseng, Grape Seed Extract, Green Coffee Seed Extract, Garcinia Cambogia & Garlic Extract — five powerful antioxidants working together for your vital health.",
		composition: "Grape Seed Extract, Green Coffee Seed Extract, Ginseng Extract, Garcinia Cambogia, Garlic Extract, Lycopene, Citrus Bioflavonoids, Amino Acid, Vitamins, Minerals & Trace Elements Tablets",
		indications: [
			"Emotional Stress & Mental Disturbance",
			"Diabetes & Cardiovascular Disorders",
			"Weakened Immunity",
			"Fatigue & Weakness",
			"Age-Related Macular Degeneration",
			"Antioxidant Deficiency",
			"Vision Loss",
			"Osteoporosis",
			"Effective in Hepatitis",
		],
		keyBenefits: [
			"Provides Essential Nutrients for everyday vitality",
			"Powerful 5G Anti-Oxidant Capsule formula",
			"Supports cardiovascular and immune health",
			"Minimizes digestive complaints",
			"A Revolutionary Approach in Vital Healthcare",
		],
		image: ziscovit,
	},
	{
		id: "shinewash",
		name: "Shinewash",
		tagline: "Be Happy & Feel Confident",
		description: "Shinewash is a vaginal wash gel enriched with Sea Buckthorn & Tea Tree Oil, specially designed to meet the unique cleansing needs of a woman's intimate area. Its soap-free, pH-balanced formula refreshes, deodorises, and keeps you feeling fresh and confident all day.",
		composition: "Vaginal Wash Gel enriched with Sea Buckthorn & Tea Tree Oil",
		indications: [
			"Unpleasant Vaginal Odour",
			"Vaginal Itching & Irritation",
			"Vaginal Infection",
			"Dryness & Discomfort",
			"Imbalanced Vaginal pH",
		],
		keyBenefits: [
			"Soap-free natural formula refreshes and deodorises",
			"Balanced at pH 3.5 to preserve friendly bacteria",
			"Natural Moisturising factors prevent dryness",
			"Soothing plant extracts relieve discomfort",
			"Maintains Vaginal Flora and natural pH balance",
		],
		image: shinewash,
	},
	{
		id: "etococshine",
		name: "Etococshine",
		tagline: "Relaxes Muscles, Ensures Top Class Relief",
		description: "Etococshine (Etoricoxib 90 mg Tablets) delivers rapid and powerful relief from severe pain and inflammation, with anti-inflammatory power similar to indomethacin in acute gouty arthritis. It significantly relieves symptoms of chronic low back pain, improving physical functioning and quality of life.",
		composition: "Etoricoxib 90 mg Tablets",
		indications: [
			"Chronic Low Back Pain",
			"Acute Gouty Arthritis",
			"Sprains & Muscles Spasm",
			"Skeletal Muscles Spasm",
			"Acute / Chronic Lumbar & Sciatic Pain",
			"Post-traumatic and Postoperative Spasm",
		],
		keyBenefits: [
			"Beats Pain & Inflammation fast",
			"Anti-inflammatory power comparable to indomethacin",
			"Significantly reduces chronic back pain disability",
			"Improves physical functioning and quality of life",
		],
		image: etococshine,
	},
	{
		id: "rabmed-d",
		name: "Rabmed-D",
		tagline: "Easing Chronic Acid Reflux within No Time",
		description: "Rabmed-D combines Esomeprazole Magnesium 40 mg (EC) and Domperidone 30 mg (SR) in a dual-action formula that suppresses acid and promotes gastric emptying, providing lasting relief from chronic acid reflux, GERD, and peptic disorders.",
		composition: "Esomeprazole Magnesium 40 mg (EC) & Domperidone 30 mg (SR) Capsules",
		indications: [
			"GERD (Gastroesophageal Reflux Disease)",
			"Gastric & Duodenal Ulcer",
			"Esophagitis",
			"Dyspepsia",
			"Hyperacidity",
			"Peptic Ulcer",
		],
		keyBenefits: [
			"Maintains gastric pH above 4 for 14+ hours",
			"Heals erosive oesophagitis more effectively than Pantoprazole",
			"Domperidone prevents excessive duodenogastric bile reflux",
			"Reduces nocturnal dyspeptic syndrome",
			"Dual action: acid suppression + promotes gastric emptying",
		],
		image: rabmed,
	},
	{
		id: "shineclav-cv-625",
		name: "Shineclav-CV 625",
		tagline: "Your All Time Winning Combination",
		description: "Shineclav-CV 625 combines Amoxycillin 500 mg and Potassium Clavulanate 125 mg into a broad-spectrum antibiotic with virtually complete absorption. The beta-lactamase inhibitor clavulanate restores efficacy against resistant bacteria, delivering winning results across a wide range of infections.",
		composition: "Amoxycillin 500 mg + Potassium Clavulanate 125 mg Tablets",
		indications: [
			"ENT Infections",
			"Dental Infections",
			"Post-Operative Care",
			"Urinary Tract Infection",
			"Gynaecological Infections",
			"Respiratory Tract Infection",
			"Skin & Soft Tissue Infections",
		],
		keyBenefits: [
			"Otitis Media success rate: 98%",
			"LRTI success rate: 99%",
			"URTI success rate: 94%",
			"UTI success rate: 97%",
			"Broad-spectrum coverage of gram +ve and -ve organisms",
		],
		image: shineclav,
	},
	{
		id: "dyshingest-10",
		name: "Dyshingest-10",
		tagline: "Safe Journey to Motherhood",
		description: "Dyshingest-10 (Dydrogesterone 10 mg Tablets) supports healthy pregnancy by addressing insufficient endometrial decidualization — the key cause of recurrent pregnancy loss and threatened abortion. It regulates cycles, supports high-risk pregnancies, and provides luteal phase support in IVF.",
		composition: "Dydrogesterone 10 mg Tablets",
		indications: [
			"Threatened Miscarriage",
			"Recurrent Pregnancy Loss",
			"Luteal Phase Support in IVF",
			"Endometriosis",
			"Secondary Amenorrhea",
			"Pre-menstrual Syndrome & Irregular Cycle",
			"AUB (Abnormal Uterine Bleeding)",
		],
		keyBenefits: [
			"Upregulates endothelial Nitric Oxide synthase in uterine arteries",
			"Improves endometrial blood flow, decidualization & thickness",
			"Prevents pregnancy loss by supporting the luteal phase",
			"Supports cycle regulation and high-risk pregnancies",
		],
		image: dyshingest,
	},
	{
		id: "ferosin-xt",
		name: "Ferosin-XT",
		tagline: "Progress Towards Healthy Life",
		description: "Ferosin-XT combines Ferrous Ascorbate 100 mg, Folic Acid 1.5 mg, and Zinc Sulphate 22.5 mg into a comprehensive iron supplement. Ferrous Ascorbate offers 2× higher bioavailability than Ferric forms, making it the ideal choice for managing iron deficiency during pregnancy, lactation, and periods of rapid growth.",
		composition: "Ferrous Ascorbate 100 mg + Folic Acid 1.5 mg + Zinc Sulphate 22.5 mg Tablets",
		indications: [
			"Iron Deficiency Anemia",
			"Pregnancy & Lactation",
			"Heavy Menstruation",
			"Chronic / Acute Blood Loss",
			"Rapid Growth & Development",
			"Pernicious Anemia",
			"Dietary Insufficiency",
			"Postpartum Haemorrhage",
		],
		keyBenefits: [
			"2× higher bioavailability than Ferric iron forms",
			"Significantly raises Hemoglobin levels in Iron Deficiency Anemia",
			"Folic Acid prevents Anemia and supports erythropoiesis",
			"Zinc Sulphate supports immune function and wound healing",
			"Gentle absorption with minimal GI side effects",
		],
		image: ferosin,
	},
	{
		id: "itramiz-200",
		name: "Itramiz-200",
		tagline: "Complete Eradication of Tough Fungal Infections",
		description: "Itramiz-200 (Itraconazole 200 mg Capsules) provides broad-spectrum antifungal therapy with a potent fungistatic action effective even in immunocompromised patients. It is tolerated significantly better than conventional Amphotericin B and covers a wide spectrum including Aspergillosis, Candidiasis, and Onychomycosis.",
		composition: "Itraconazole 200 mg Capsules",
		indications: [
			"Aspergillosis",
			"Candidiasis",
			"Sporotrichosis",
			"Cryptococcosis",
			"Mycosis",
			"Toe Nail & Onychomycosis (Fungal Nail Infection)",
			"Hostoplasmosis",
		],
		keyBenefits: [
			"Useful and safe in empirical antifungal therapy",
			"Better tolerated than conventional Amphotericin B",
			"Broad spectrum including Aspergillosis and Candidiasis",
			"Potent fungistatic effective in immunocompromised patients",
		],
		image: itramiz,
	},
	{
		id: "shincal-xt",
		name: "Shincal-XT",
		tagline: "Calcium Care for Every Stage of Womanhood",
		description: "Shincal-XT delivers a complete combination of Calcium Carbonate 1250 mg, Vitamin D3 2000 IU, Methylcobalamin 1500 mcg, L-Methyl Folate 1 mg, and Pyridoxal-5-Phosphate 20 mg — supporting bone health, neural development, and maternal wellbeing across every stage of a woman's life.",
		composition: "Calcium Carbonate 1250 mg, Vitamin D3 2000 IU, Methylcobalamin 1500 mcg, Calcium L-5-Methyltetrahydrofolate 1 mg (L-Methyl Folate), Pyridoxal-5-Phosphate 20 mg Tablets",
		indications: [
			"Spontaneous Miscarriage & Recurrent Abortion",
			"IUGR (Intrauterine Growth Restriction)",
			"Pre-Eclampsia",
			"Placental Abruption",
			"Pre-term Labor",
			"Pregnancy & Lactation",
			"Calcium & Vitamin D Deficiency",
		],
		keyBenefits: [
			"Calcium Carbonate improves blood calcium levels in pregnancy",
			"Vitamin D3 reduces risk of pre-eclampsia and low birthweight",
			"L-Methyl Folate is essential for foetal development",
			"Methylcobalamin vital for maintaining normal baby size",
			"Pyridoxal-5-Phosphate supports developing baby's neurotransmitters",
		],
		image: shincal,
	},
	{
		id: "thioshine-a",
		name: "Thioshine A",
		tagline: "Relaxation wiTHout Sedation",
		description: "Thioshine A combines Aceclofenac 100 mg and Thiocolchicoside 4 mg to treat muscle spasms and pain together in a single tablet. Aceclofenac, one of the most popular analgesic and anti-inflammatory drugs, works with Thiocolchicoside — a potent muscle relaxant — to restore mobility and relieve back pain without causing sedation.",
		composition: "Aceclofenac 100 mg & Thiocolchicoside 4 mg Tablets",
		indications: [
			"Sprain and Strain",
			"Sport Injuries",
			"Skeletal Muscle Spasm",
			"Acute Pain Associated with Muscle Spasms",
			"Spondylosis",
			"Rheumatoid Arthritis",
			"Osteoarthritis",
		],
		keyBenefits: [
			"Dual action: analgesic + muscle relaxant in one tablet",
			"Relaxes Back Pain and Restores Mobility",
			"No sedation — you stay alert while pain is relieved",
			"Effective for both acute and chronic musculoskeletal conditions",
		],
		image: thioshine,
	},
];

export function getShopProductById(id: string) {
	return shopProducts.find((p) => p.id === id);
}
