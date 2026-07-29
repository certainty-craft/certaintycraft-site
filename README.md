# certaintycraft.ca

Static site for certaintycraft.ca, deployed via Netlify. No build step.

This repo is the source of truth for the live site. Changes are made on a
branch, reviewed with Dae in chat, and deploy when merged to main.

Note: `support.js` and `_ds/**/_ds_bundle.js` are generated artifacts
(dc-runtime and the design-system bundle); edit their loading attributes in
the HTML, not their contents.
