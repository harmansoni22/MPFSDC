import { useEffect } from 'react';
import { companySnapshot } from '../data/siteData';

// Note: we avoid react-helmet and instead update head tags imperatively
// to keep this SPA lightweight and Vercel-safe.


const DEFAULTS = {
	title: `${companySnapshot.name} | Madhya Pradesh Forestry and Forest Development Portal`,
	description:
		'Official portal of Madhya Pradesh Rajya Van Vikas Nigam (MPRVVN) for forestry operations, public information, tenders, e-auctions, and document downloads.',
	canonicalBase: 'https://mpfsdc.vercel.app',
	ogImage: 'https://mpfsdc.vercel.app/logo_no-bg.png',
};

const PAGE_META = {
	'/': {
		title: `${companySnapshot.name} (MPFSDC) | Madhya Pradesh Forestry Operations`,
		description:
			'Official public information portal for MPRVVN (MPFSDC), supporting forestry operations for afforestation, eco-restoration, and related administrative services in Madhya Pradesh.',
	},
	'/about': {
		title: `${companySnapshot.name} | About MPRVVN`,
		description:
			'Company profile and institutional information of Madhya Pradesh Rajya Van Vikas Nigam (MPRVVN), including mandate and governance details.',
	},
	'/projects': {
		title: `${companySnapshot.name} | Projects and Operational Phases`,
		description:
			'Institutional overview of forestry projects and operational phases executed by MPRVVN across divisions in Madhya Pradesh.',
	},
	'/forestry-activities': {
		title: `${companySnapshot.name} | Forestry Activities`,
		description:
			'Public information on nursery, plantation drives, protection mechanisms, and community engagement implemented by MPRVVN for forest development in Madhya Pradesh.',
	},
	'/tenders': {
		title: `${companySnapshot.name} | Tenders & Notices`,
		description:
			'Official information portal section for tender notices and administrative tender-related updates for MPRVVN in Madhya Pradesh.',
	},
	'/downloads': {
		title: `${companySnapshot.name} | Document Center`,
		description:
			'Official document center for reports, circulars, acts/rules, and published materials of MPRVVN (MPFSDC) in Madhya Pradesh.',
	},
	'/contact': {
		title: `${companySnapshot.name} | Contact`,
		description:
			'Contact information and public interface for the Madhya Pradesh forestry corporation portal (MPRVVN / MPFSDC), including address and grievance/RTI support.',
	},
	'/directory': {
		title: `${companySnapshot.name} | Officers Directory`,
		description:
			'Officers directory with official contact information for MPRVVN leadership and regional/divisional administration in Madhya Pradesh.',
	},
	'/gallery': {
		title: `${companySnapshot.name} | Gallery`,
		description:
			'Official photo gallery for forestry operations and institutional activities of MPRVVN in Madhya Pradesh.',
	},
};

function ensureMetaTag(nameOrProperty, content, opts = {}) {
	const { type = 'name' } = opts;
	const selector = type === 'property' ? `meta[property="${nameOrProperty}"]` : `meta[name="${nameOrProperty}"]`;
	let el = document.head.querySelector(selector);
	if (!el) {
		el = document.createElement('meta');
		if (type === 'property') el.setAttribute('property', nameOrProperty);
		else el.setAttribute('name', nameOrProperty);
		document.head.appendChild(el);
	}
	el.setAttribute('content', content);
}

function ensureLink(rel, href) {
	let el = document.head.querySelector(`link[rel="${rel}"]`);
	if (!el) {
		el = document.createElement('link');
		el.setAttribute('rel', rel);
		document.head.appendChild(el);
	}
	el.setAttribute('href', href);
}

export default function SeoMeta() {
	useEffect(() => {
		const pathname = window.location.pathname.endsWith('/') && window.location.pathname !== '/' ? window.location.pathname.slice(0, -1) : window.location.pathname;

		const page = PAGE_META[pathname] || DEFAULTS;

		const title = page.title || DEFAULTS.title;
		const description = page.description || DEFAULTS.description;

		document.title = title;

		ensureMetaTag('description', description, { type: 'name' });
		ensureMetaTag('robots', 'index,follow', { type: 'name' });

		const canonicalUrl = `${DEFAULTS.canonicalBase}${pathname}`;
		ensureLink('canonical', canonicalUrl);

		// Open Graph
		ensureMetaTag('og:title', title, { type: 'property' });
		ensureMetaTag('og:description', description, { type: 'property' });
		ensureMetaTag('og:url', canonicalUrl, { type: 'property' });
		ensureMetaTag('og:type', 'website', { type: 'property' });
		ensureMetaTag('og:site_name', companySnapshot.name, { type: 'property' });
		ensureMetaTag('og:image', DEFAULTS.ogImage, { type: 'property' });

		// Twitter/X
		ensureMetaTag('twitter:card', 'summary_large_image', { type: 'name' });
		ensureMetaTag('twitter:title', title, { type: 'name' });
		ensureMetaTag('twitter:description', description, { type: 'name' });
		ensureMetaTag('twitter:image', DEFAULTS.ogImage, { type: 'name' });

	}, []);

	return null;
}

