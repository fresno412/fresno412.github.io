# Dragonfly Ranch – Static Site

A lightweight, accessible, and performant redesign that preserves the original content areas (Home, Gallery, Story, Visit) while strengthening calls to action and SEO.

## How to run
Open `index.html` in a browser, or serve the folder with any static server (e.g., `npx serve`).

## Deploy
Upload the folder to your hosting or connect a repo to Netlify/Vercel. The order form is set with `data-netlify="true"` for simple form handling on Netlify; remove if not needed.

## Replace content
- **Images:** Put real photos into `assets/images/` using the same names, or update the `<img>` `src` attributes.
- **Copy:** Edit headings and paragraphs right in the HTML files.
- **Meta:** Update titles/descriptions in `<head>`.

## Notes
- Phone and location are based on the current live site details.
- Structured data (`LocalBusiness`) helps search engines display phone and locality.
- Accessibility: skip link, nav toggle ARIA, focus styles, color contrast.

hero.jpg comes from https://www.agdaily.com/livestock/facts-about-black-angus-cattle/
pasture.jpg comes from https://texasfarmbureau.org/pasture-rangeland-conditions-vary-across-the-state/
cattle-1.jpg and cattle-2.jpg comes from https://www.cattlemax.com/articles/angus-breed-guide
beef-1.jpg comes from https://www.agrohandlers.com/product-details.php?pr=PR878
t-bone-steak.jpg comes from https://normanhotel.com.au/thick-cut-t-bone-steak-recipe/
brisket.jpg comes from https://www.allrecipes.com/thmb/rccFeVcai2aDEMkEkBME3tYFgQc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sous-vide-brisket-mfs-193-4x3-1-24930daf16854a9091eaff1503aac157.jpg
lean-ground-beef.jpg comes from https://pavaotogo.com/product/lean-ground-beef/