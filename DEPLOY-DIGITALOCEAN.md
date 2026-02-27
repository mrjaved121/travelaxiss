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
3. All routes (`/`, `/work-visa`, `/europe-work-permit`, `/privacy-policy`, `/terms-conditions`, `/disclaimer`) are pre-built and will work.

---

## Where to check in DigitalOcean

| What to check | Where |
|---------------|--------|
| **Build logs** | App → **Activity** → click a deployment → **Build logs** |
| **Deploy success/failure** | App → **Activity** tab |
| **Domain** | App → **Settings** → **Domains** (add travelaxis.online and set CNAME as shown) |

If the build fails, open that deployment in **Activity** and check **Build logs** for the error.
