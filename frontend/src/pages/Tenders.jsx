import PageShell from '../components/PageShell';

const Tenders = () => {
    return (
        <PageShell>
            <section className="mx-auto max-w-6xl px-4 py-12">
                <h2 className="text-4xl font-extrabold text-emerald-900">Tenders</h2>
                <p className="mt-2 max-w-3xl text-stone-600">Tender presentation style follows government forestry portals: current notice snapshot, category clarity, and procedural progression.</p>
            </section>
            <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-12 md:grid-cols-3">
                {[
                    ['Works', 'Plantation, protection, fencing, and site development packages.'],
                    ['Procurement', 'Vehicles, forestry tools, nursery and office systems.'],
                    ['Services', 'Consultancy, audit, technical support, and capacity building.'],
                ].map(([title, desc]) => (
                    <article key={title} className="rounded-xl border border-stone-200 bg-white p-5">
                        <h3 className="font-bold text-emerald-800">{title}</h3>
                        <p className="mt-2 text-sm text-stone-700">{desc}</p>
                    </article>
                ))}
            </section>
            <section className="mx-auto max-w-6xl px-4 pb-12">
                <article className="rounded-xl border border-stone-200 bg-white p-5">
                    <h3 className="font-bold text-emerald-800">Tender Notice Style (Public Sector Pattern)</h3>
                    <p className="mt-2 text-sm text-stone-700">
                        Notices should list tender number, division, scope, due date, and bidder instructions. This structure is modeled from state forest corporation portals where tenders, careers, and employee updates remain visible and regularly refreshed.
                    </p>
                </article>
            </section>
        </PageShell>
    );
};

export default Tenders;
