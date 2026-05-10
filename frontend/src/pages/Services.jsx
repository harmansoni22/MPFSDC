import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';

const forestryActivities = [
    {
        title: 'Nursery',
        body: 'Self-sustaining nursery model with teak root-shoots, bamboo seedlings, RET and NTFP species. Includes polyhouse support, mist chambers, and seed bank integration.',
    },
    {
        title: 'Plantation',
        body: 'Site-specific plantation planning across divisions, including rain-fed teak, bamboo, mixed species, and regeneration-driven models aligned with working plans.',
    },
    {
        title: 'Forest Protection',
        body: 'Protection planning through fencing, organic inputs, fire lines, watchers, Van Suraksha/JFM participation, and surveillance support in sensitive zones.',
    },
    {
        title: 'Depo Management',
        body: 'Division-level lot management, grading, transit readiness, and transparent material movement for auction and timber value-chain operations.',
    },
    {
        title: 'Wild Life Conservation',
        body: 'Corridor-sensitive forestry with waterhole support, fruit-bearing native species, and habitat continuity in tiger reserve and buffer landscapes.',
    },
    {
        title: 'Community',
        body: 'People-centric livelihood activities through nursery work, plantation jobs, women and tribal inclusion, training, and development-linked eco-enterprise support.',
    },
];

const turnkeyPlantation = [
    {
        title: 'Eco Restoration in Mine Area',
        body: 'Restoration of degraded mine and overburden land through soil preparation, site-specific species mix, and monitored survival-based plantation packages.',
    },
    {
        title: 'Miyawaki Forest',
        body: 'Dense, rapid-canopy urban and institutional forestry blocks using native species clustering for biodiversity and carbon benefits on compact land parcels.',
    },
    {
        title: 'Avenue Plantation',
        body: 'Roadside and corridor plantations with species zoning, long-term maintenance, and survival tracking for public infrastructure greening.',
    },
    {
        title: 'CSR Plantations',
        body: 'Corporate partnership plantations with milestone reporting, geo-tagged progress, and division-wise implementation support under agreed social and ecological goals.',
    },
];

const Services = () => {
    const [activeTab, setActiveTab] = useState('forestry');

    return (
        <PageShell>
            <section className="mx-auto max-w-6xl px-4 py-12">
                <h2 className="text-4xl font-extrabold text-emerald-900">Services</h2>
                <p className="mt-2 max-w-4xl text-stone-600">
                    This page now follows your brochure and public-portal pattern: activity-first sections, turnkey work categories, and clearly readable implementation scope.
                </p>
            </section>

            <section className="mx-auto max-w-6xl px-4 pb-6">
                <div className="inline-flex rounded-xl border border-stone-200 bg-white p-1">
                    <button onClick={() => setActiveTab('forestry')} className={`rounded-lg px-4 py-2 text-sm font-semibold ${activeTab === 'forestry' ? 'bg-emerald-700 text-white' : 'text-stone-700'}`}>
                        Forestry Activities
                    </button>
                    <button onClick={() => setActiveTab('turnkey')} className={`rounded-lg px-4 py-2 text-sm font-semibold ${activeTab === 'turnkey' ? 'bg-emerald-700 text-white' : 'text-stone-700'}`}>
                        Turn Key Plantation
                    </button>
                </div>
            </section>

            <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-12 md:grid-cols-2">
                {(activeTab === 'forestry' ? forestryActivities : turnkeyPlantation).map((item) => (
                    <article key={item.title} className="rounded-xl border border-stone-200 bg-white p-5">
                        <h3 className="text-lg font-bold text-emerald-800">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-stone-700">{item.body}</p>
                    </article>
                ))}
            </section>

            <section className="mx-auto max-w-6xl px-4 pb-12">
                <article className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
                    <h3 className="text-xl font-bold text-emerald-900">Brochure-aligned execution model</h3>
                    <p className="mt-2 text-sm leading-relaxed text-emerald-950/90">
                        We execute scientific plantation and restoration programs through phase-wise planning, species-specific protocols, and on-ground protection.
                        The brochure highlights our transition from clear-felling-era models to conservation-oriented forestry, integration of biodiversity targets,
                        and next-gen priorities like sandal strategy, nursery self-reliance, and strategic alliances.
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-emerald-950/90">
                        For each turnkey project category (mine eco-restoration, Miyawaki, avenue, CSR), we can attach photos, partner agencies, and division-wise implementation records as you requested.
                    </p>
                </article>
            </section>

            <section className="mx-auto max-w-6xl px-4 pb-12">
                <div className="rounded-2xl bg-emerald-900 px-6 py-8 text-center text-white">
                    <h3 className="text-2xl font-bold">Need service-level details?</h3>
                    <p className="mt-2 text-emerald-100">Contact the relevant department or proceed to tenders and auctions for active opportunities.</p>
                    <div className="mt-4 flex justify-center gap-3">
                        <Link to="/contact" className="rounded-lg bg-white px-4 py-2 font-semibold text-emerald-800">Contact</Link>
                        <Link to="/tenders" className="rounded-lg border border-white/40 px-4 py-2 font-semibold text-white">Tenders</Link>
                    </div>
                </div>
            </section>
        </PageShell>
    );
};

export default Services;
