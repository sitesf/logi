# Logistik Speed Curier — Site Notes

## Imagini de convertit in WebP (prioritate SEO/performanta)

Converteste urmatoarele imagini din `/images/` in format WebP pentru performanta mai buna:

| Fisier actual | Conversie recomandata | Dimensiune recomandata |
|---|---|---|
| `images/poza35.jpg` | `images/poza35.webp` | 1200×600px |
| `images/pozamiau.jpg` | `images/pozamiau.webp` | 800×600px |
| `images/poza-mecanica.png` | `images/poza-mecanica.webp` | 800×600px |
| `images/poza-diagnoza.png` | `images/poza-diagnoza.webp` | 800×600px |
| `images/poza-ac.png` | `images/poza-ac.webp` | 800×600px |
| `images/poza-tinichigerie.png` | `images/poza-tinichigerie.webp` | 800×600px |
| `images/poza-vopsitorie.png` | `images/poza-vopsitorie.webp` | 800×600px |
| `images/poza-statieitp.png` | `images/poza-statieitp.webp` | 800×600px |
| `images/nealegipenoi.png` | `images/nealegipenoi.webp` | 200×200px |
| `images/tractari1.jpeg` | `images/tractari1.webp` | 800×600px |
| `images/tractari2.jpeg` | `images/tractari2.webp` | 800×600px |
| `images/tractari3.jpeg` | `images/tractari3.webp` | 800×600px |
| `images/tractari4.jpeg` | `images/tractari4.webp` | 800×600px |

### Comanda conversie (cu cwebp sau ImageMagick):
```bash
# Cu cwebp:
cwebp -q 82 images/poza35.jpg -o images/poza35.webp

# Cu ImageMagick:
convert images/poza35.jpg -quality 82 images/poza35.webp

# Batch (toate jpg/png -> webp):
for f in images/*.{jpg,jpeg,png}; do cwebp -q 82 "$f" -o "${f%.*}.webp"; done
```

Dupa conversie, actualizeaza tagurile `<img src="images/X.jpg">` cu `<picture>` pentru fallback:
```html
<picture>
  <source srcset="images/poza35.webp" type="image/webp">
  <img src="images/poza35.jpg" alt="..." loading="lazy">
</picture>
```

## Fonturi Google (self-hosting pentru GDPR strict)

Fonturile folosite: **Inter** (400,500,600,700,800) + **Rajdhani** (600,700)

Descarca de la: https://fonts.google.com/

Dupa descarcare, adauga in `style.css`:
```css
@font-face {
  font-family: 'Inter';
  src: url('fonts/inter-regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
/* ... etc pentru fiecare greutate */
```

Si inlocuieste in toate fisierele HTML:
```html
<!-- Sterge aceste 3 linii: -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?..." rel="stylesheet" />
```

## Google Analytics 4

Un placeholder GA4 a fost adaugat (comentat) in `index.html`. Pentru activare:
1. Creeaza proprietate GA4 la analytics.google.com
2. Copiaza ID-ul (format: G-XXXXXXXXXX)
3. Inlocuieste `G-XXXXXXXX` cu ID-ul real
4. Decomentati blocul `<script>` din `<head>` in `index.html`
5. Actualizeaza `politica-cookies.html` — Google Analytics este deja documentat acolo
