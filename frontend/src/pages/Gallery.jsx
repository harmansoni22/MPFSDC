import PageShell from '../components/PageShell';

const Gallery = () => {
    return (
        <PageShell>
            <section className="mx-auto max-w-6xl px-4 py-12">
                <h2 className="text-4xl font-extrabold text-emerald-900">Gallery</h2>
                <p className="mt-2 max-w-3xl text-stone-600">Image-led sections are retained with clearer hierarchy and less decorative clutter. Add real project images to replace placeholders for final launch.</p>
            </section>
            <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-12 md:grid-cols-3">
                {['Plantation blocks', 'Nursery and seed operations', 'Wildlife corridor snapshots', 'Community engagement', 'Field infrastructure', 'Monitoring and restoration'].map((caption) => (
                    <figure key={caption} className="overflow-hidden rounded-xl border border-stone-200 bg-white">
                        <div className="h-44 bg-[linear-gradient(135deg,#1f6f4a,#8ca66c)]" />
                        <figcaption className="px-4 py-3 text-sm text-stone-700">{caption}</figcaption>
                    </figure>
                ))}
            </section>
        </PageShell>
    );
};

export default Gallery;
