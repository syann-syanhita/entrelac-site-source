# Entrelac IA inc. — Squelette de site web MVP (Trilingue)

Ce dépôt contient le squelette (MVP « En construction ») du site officiel d'**Entrelac IA inc.**, middleware agnostique reliant des modèles de langage (LLM) à des plateformes robotiques physiques via API, conçu selon les principes de **100 % local** et **Safety by Design**.

Le site est optimisé pour asseoir la crédibilité B2B d'Entrelac en vue de l'admission au **Centech**, du partenariat **Mitacs** avec l'**IntRoLab** (Université de Sherbrooke), et des négociations avec des fabricants robotiques (ex. : **TangibleFuture / LOOI**).

---

## 🌐 Routage Trilingue Standard

Le routage s'appuie sur la convention moderne de **Next.js App Router** avec le paramètre dynamique `[lang]` :
- **`fr`** : Français canadien (inclusif) — Langue par défaut
- **`en`** : International English
- **`ja`** : 日本語（平仮名・敬語表現）

Les textes sont centralisés dans des dictionnaires typés (`src/dictionaries/fr.json`, `en.json`, `ja.json`), ce qui permet d'éditer ou d'enrichir le contenu sans toucher au code des composants.

---

## 📂 Architecture des Dossiers

```text
entrelac-site/
├── package.json                   # Dépendances Next.js, React, Tailwind CSS
├── tsconfig.json                  # Configuration TypeScript
├── next.config.mjs                # Configuration Next.js
├── tailwind.config.ts             # Palette de couleurs et styles Entrelac
├── postcss.config.mjs             # Configuration PostCSS
├── README.md                      # Documentation et guide de déploiement
└── src/
    ├── i18n.ts                    # Configuration et types des langues (FR, EN, JA)
    ├── middleware.ts              # Redirection automatique vers /fr (ou détection EN/JA)
    ├── dictionaries/              # Dictionnaires trilingues
    │   ├── fr.json                # Français canadien (inclusif)
    │   ├── en.json                # Anglais international
    │   ├── ja.json                # Japonais (hiragana et keigo)
    │   └── get-dictionary.ts      # Chargeur dynamique côté serveur
    ├── components/
    │   ├── Navbar.tsx             # Barre de navigation + sélecteur FR / EN / JP
    │   ├── Footer.tsx             # Pied de page + partenaires (Centech, Mitacs, IntRoLab)
    │   ├── NewsletterForm.tsx     # Capture de courriels (Kickstarter & annonces B2B)
    │   └── PlaceholderBadge.tsx   # Badge visuel « À venir / Coming soon / 近日公開 »
    └── app/
        ├── globals.css            # Styles globaux (thème sombre sobre & technologique)
        ├── layout.tsx             # Layout racine Next.js
        └── [lang]/                # Pages trilingues
            ├── layout.tsx         # Structure commune avec Navbar et Footer
            ├── page.tsx           # Page d'accueil (Pitch 4 actes, 3 piliers, infolettre)
            ├── use-cases/
            │   └── page.tsx       # Cas d'utilisation (Compagnonnage, Doublage corporel, Langues)
            ├── safety/
            │   └── page.tsx       # Sécurité & éthique (Filtre anti-miroitement, garde-fous)
            ├── research/
            │   └── page.tsx       # Recherche experte (Hudon & Stip, Mila, LoiZéro)
            ├── b2b-hardware/
            │   └── page.tsx       # B2B Matériel (Specs minimales, exclusions strictes)
            ├── b2b-retail/
            │   └── page.tsx       # B2B Commerces physiques (Robots d'accueil, données locales)
            ├── api-guide/
            │   └── page.tsx       # Guide des API simplifié pour vérifier la compatibilité LLM
            ├── about/
            │   └── page.tsx       # À propos (Histoire, profil fondatrice M.A., partenariats)
            └── contact/
                └── page.tsx       # Formulaire de contact et coordonnées
```

---

## 🚀 Démarrage en local (VS Code / Terminal)

```bash
# 1. Se rendre dans le dossier
cd entrelac-site

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Ouvrir le navigateur
http://localhost:3000
```

---

## 📱 Amorcer ou modifier sur GitHub (y compris via mobile)

Si vous souhaitez créer ou ajuster cette arborescence directement sur l'interface Web de GitHub :

1. Sur votre dépôt GitHub, cliquez sur **Add file > Create new file**.
2. Dans le champ de nom de fichier, tapez par exemple :
   `src/app/[lang]/safety/page.tsx`
   *(Taper un `/` crée automatiquement le dossier sur GitHub !)*.
3. Copiez-collez le contenu du fichier correspondant.
4. Cliquez sur **Commit changes**.
5. Répétez pour chaque section ou éditez directement les dictionnaires `src/dictionaries/fr.json`, `en.json` et `ja.json` pour modifier les textes « À venir » / « Coming soon » / « 近日公開 ».

---

## 🛡️ Piliers et Positionnement B2B

1. **Agnosticisme** : Compatibilité garantie avec n'importe quel LLM via JSON / Tool calling.
2. **100 % Local & Souverain** : Zéro flux vidéo, vocal ou cinématique envoyé dans le cloud pour l'animation physique.
3. **Safety by Design** : Garde-fous algorithmiques prévenant l'effet de miroitement (anti-sycophancy) et protection continue de l'environnement physique.
