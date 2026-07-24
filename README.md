# 🏨 Pacific Hotel

Site vitrine officiel du **Pacific Hotel**, situé en face de la Mairie d'Obala, Cameroun.
Une expérience d'hôtellerie raffinée, présentée à travers un site moderne, responsive et animé.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?logo=daisyui&logoColor=white)

---

## ✨ Aperçu

Pacific Hotel est un site one-page présentant l'ensemble de l'expérience hôtelière : chambres, restaurant, divertissements locaux, galerie et contact — avec une identité visuelle noir & or (`#D4AF37`), des animations fluides au scroll, et une navigation responsive fonctionnelle sur mobile, tablette et desktop.

## 🧭 Sections du site

| Section | Description |
|---|---|
| **Hero** | Message d'accroche animé à l'arrivée sur le site |
| **À propos** | Présentation de l'hôtel, chiffres clés |
| **Services** | Points forts et prestations incluses |
| **Chambres** | Catalogue filtrable : Suites, Chambres avec Baignoire, Chambres Standard |
| **Restaurant** | Carte des plats et boissons, filtrable par catégorie |
| **Divertissement** | Activités à Obala (Chutes de Nachtigal, artisanat local, Complexe Lafleur, Le BayaMa, Macadam Bikers) |
| **Galerie** | Défilement infini des photos de l'hôtel et de l'équipe |
| **Contact** | Coordonnées, réseaux sociaux et localisation Google Maps |

## 🛠️ Stack technique

- **Framework** : [Next.js 16](https://nextjs.org/) (App Router)
- **Langage** : TypeScript
- **Style** : Tailwind CSS + DaisyUI
- **Icônes** : [lucide-react](https://lucide.dev/)
- **Animations** : CSS natif (`IntersectionObserver`, `@keyframes`, transitions Tailwind) — sans librairie tierce

## 🚀 Installation

```bash
# Cloner le repository
git clone https://github.com/biloa2005/...
cd pacific-hotel

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site est ensuite accessible sur:
##  Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement (Turbopack) |
| `npm run build` | Génère la version de production |
| `npm run start` | Démarre le serveur en mode production |
| `npm run lint` | Vérifie la qualité du code |

## Structure du projet

```
pacific-hotel/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Rooms.tsx
│   ├── Restaurant.tsx
│   ├── Entertainment.tsx
│   ├── Gallery.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
├── next.config.js
├── tailwind.config.js
└── package.json
```

##  Identité visuelle

- **Couleur principale** : Or `#D4AF37`
- **Typographie** : Police serif pour les titres, sans-serif pour le corps de texte
- **Ambiance** : Alternance de fonds clairs (`#FAF8F3`) et sombres (`#0B0B0B`) pour rythmer la lecture entre les sections

##  Responsive

Le site est conçu mobile-first et testé sur les principaux breakpoints :

- Mobile (`< 640px`)
- Tablette (`sm`, `lg`)
- Desktop (`lg+`)

##  Développeur

Site conçu et développé par **Biloa Philemon Armand**, étudiant en Génie Logiciel à l'ENSPD (École Nationale Supérieure Polytechnique de Douala).

- 📧 [biloaphilemon@gmail.com](mailto:biloaphilemon@gmail.com)
- 💻 [github.com/biloa2005](https://github.com/biloa2005)

## 📄 Licence

Ce projet est développé à des fins de démonstration pour le Pacific Hotel. Tous droits réservés.
