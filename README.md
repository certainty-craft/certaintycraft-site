# certaintycraft.ca

Static site for certaintycraft.ca, deployed via Netlify. No build step on
Netlify's side: it serves this directory as committed.

COPY IS NOT EDITED HERE. Every word of site copy lives in
`portfolio/content/` (YAML), edited there or through the CMS at
certaintycraft.ca/admin, and written into these HTML sources by
`tools/inject_copy.mjs`; `tools/prerender.mjs` then regenerates the
prerender snapshots, the nine case-study pages, head tags, JSON-LD and
sitemap.xml. The publish-site workflow runs that chain on every content
change and mirrors the result into the public certaintycraft-site repo
with `tools/publish_site.py`; pushing that repo's main is what deploys.
The public repo remains a publish target, not an editing surface. See
`portfolio/content/README.md` for the full model and runbooks.

Layout/structure edits (as opposed to copy) still happen in these files,
on a branch, reviewed with Dae in chat, but must respect the `data-copy`
anchors the copy layer depends on: run `node tools/extract_copy.mjs
--check` after structural changes.

Note: `support.js` and `_ds/**/_ds_bundle.js` are generated artifacts
(dc-runtime and the design-system bundle); edit their loading attributes
in the HTML, not their contents.
