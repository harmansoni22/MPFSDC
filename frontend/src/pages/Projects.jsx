import PageShell from '../components/PageShell';

const Projects = () => {
    return (
        <PageShell>
            <section className="mx-auto max-w-6xl px-4 py-12">
                <h2 className="text-4xl font-extrabold text-emerald-900">Projects and phases</h2>
                <p className="mt-2 max-w-3xl text-stone-600">Project design reflects phased forestry evolution from concentrated regeneration to site-specific, rain-fed and biodiversity-aware execution models.</p>
            </section>
            <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-12 md:grid-cols-2">
                {[
                    ['Phases I-III (1976-1987)', 'Large-area teak, bamboo and mixed plantations with rapid base creation.'],
                    ['Post-1988 transition', 'Supplementary regeneration introduced with conservation-oriented emphasis.'],
                    ['Phases VII-X (2000-2025)', 'Site-specific rain-fed plantations and zonation-guided treatment planning.'],
                    ['Phase XI', 'Ecology + revenue model with nurseries, RET/NTFP, and plantation protection systems.'],
                ].map(([title, desc]) => (
                    <article key={title} className="rounded-xl border border-stone-200 bg-white p-5">
                        <h3 className="font-bold text-emerald-800">{title}</h3>
                        <p className="mt-2 text-sm text-stone-700">{desc}</p>
                    </article>
                ))}
            </section>
        </PageShell>
    );
};

export default Projects;
