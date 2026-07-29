# certaintycraft.ca

Static site for certaintycraft.ca, deployed via Netlify. No build step.

Source of truth: `portfolio/site/` in the private portfolio-archive repo.
Edits happen there, on a branch, reviewed with Dae in chat. Publishing is
`python3 tools/publish_site.py` (in portfolio-archive), which syncs this
directory into a checkout of the public certaintycraft-site repo; merging
that repo's main is what deploys. The public repo is a publish target,
not an editing surface.

Note: `support.js` and `_ds/**/_ds_bundle.js` are generated artifacts
(dc-runtime and the design-system bundle); edit their loading attributes
in the HTML, not their contents.
