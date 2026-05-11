# TODO - Institutional UI/UX credibility pass

## Step 1 (planned)
- Update hero section in `frontend/src/pages/Home.jsx`:
  - reduce whitespace/padding and heading scale (~15%)
  - replace marketing/welcome tone with administrative framing (Govt. of Madhya Pradesh undertaking; forestry operations; afforestation; eco-restoration; sustainable development)
  - keep modern look but reduce dominance

## Step 2 (planned)
- Remove/neutralize startup/SaaS visuals in `Home.jsx`:
  - reduce hover theatrics/transforms/shadows and remove oversized promotional CTA phrasing
  - reduce/replace animated "NEW" pulse badges

## Step 3 (planned)
- Add/repurpose lightweight institutional portal realism modules in `Home.jsx`:
  - compact sections using existing data/links:
    - Latest Circulars (from existing data arrays)
    - Downloadable Reports/Acts & Circulars (link to `/downloads` anchors)
    - Administrative Structure (link to `/about#organisation-chart`)
    - Division Offices (link to `/directory`)
    - Public Notices (relabel tab section)
    - Forestry Statistics (use existing hero stats)

## Step 4 (planned)
- Neutralize “Our Partners” section on `Home.jsx`:
  - rename to “Associated Organizations” / “Institutional Partners”
  - convert to compact restrained grid/list
  - remove oversized icon-centric cards, reduce hover scaling

## Step 5 (planned)
- Update CTA-like blocks on `Home.jsx` to institutional language (no marketing phrasing).

## Step 6 (planned)
- Header cleanup in `frontend/src/components/Header.jsx`:
  - reduce vertical height slightly (logo row padding)
  - update search copy to “Search notices, tenders, circulars...”

## Step 7 (planned)
- Footer cleanup in `frontend/src/components/Footer.jsx`:
  - remove newsletter subscription strip entirely
  - replace with institutional/public-information strip (office timings + grievance/contact + RTI/public information wording + helpline references)
  - increase institutional density in wording

## Step 8 (optional)
- Tone/content cleanup in `frontend/src/data/siteData.js`:
  - remove/neutralize corporate tagline and “Vision 2047… revenue” wording where it undermines institutional tone

## Step 9 (after edits)
- Build/lint check:
  - `npm run build` (and `npm run lint` if configured)
- Manual route smoke check for `/`, `/about`, `/downloads`, `/directory`, `/e-services`, `/tenders`, `/auctions`, `/contact`.

