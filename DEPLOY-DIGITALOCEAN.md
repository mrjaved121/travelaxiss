# Deploy TravelAxis on DigitalOcean (Static Site)

This app is a **static export** (frontend only, no backend). Deploy it as a **Static Site** on DigitalOcean App Platform.

---

## Settings for your Static Site component

In **Settings** for the **travelaxiss** component, use:

| Field | Value |
|--------|--------|
| **Build Command** | `npm ci && npm run build` |
| **Output Directory** | `out` |
| **Routes** | `/` |

- **Source:** GitHub → `mrjaved121/travelaxiss`, branch `main` (keep as is).
- **Environment Variables:** Leave empty unless you add some later.

---

## After pushing code

1. DigitalOcean will run `npm ci && npm run build`, which produces the static files in the `out` folder.
2. It will serve everything inside `out` at your app URL.
3. All routes are pre-built. Direct links use trailing slashes (e.g. `/work-visa/`) so the host can serve the correct HTML. If a link without a trailing slash returns 404, the build copies `index.html` to `404.html` so the app still loads and the client router shows the right page.

---

## Where to check in DigitalOcean

| What to check | Where |
|---------------|--------|
| **Build logs** | App → **Activity** → click a deployment → **Build logs** |
| **Deploy success/failure** | App → **Activity** tab |
| **Domain** | App → **Settings** → **Domains** (add travelaxis.online and set CNAME as shown) |

If the build fails, open that deployment in **Activity** and check **Build logs** for the error.

---

## If direct links still show 404

- **Links use trailing slashes** (e.g. `https://travelaxis.online/work-visa/`). Opening `/work-visa` (no slash) may 404 on some hosts; the build copies the app into `404.html` so that 404 responses still load the app and the correct page.
- On DigitalOcean, in **Settings** → **Custom Pages**, you can set the 404 page to `index.html` so any unknown path serves the app and client-side routing handles the URL.
