# TOP SPINE — web stranica

Jednostrana web stranica za **TOP SPINE**, obrt za manualnu terapiju kralježnice (Yumeiho,
kineziterapija i terapijski ultrazvuk), Zagreb. Izrađena u **Angularu (v18, standalone
komponente)** i spremna za hosting na **GitHub Pages**.

## Struktura

Svaka komponenta ima vlastitu mapu s tri datoteke — `*.component.ts` (logika),
`*.component.html` (predložak) i `*.component.scss` (stilovi te komponente).
Zajednički stilovi (dizajn tokeni, reset, `.wrap`, `.code`, `.btn`, `.sec-head`,
`.reveal`) žive u globalnom `src/styles.scss`.

```
src/
  index.html                 # HTML ljuska + Google Fonts
  main.ts                    # bootstrap
  styles.scss                # dizajn tokeni + zajednički (globalni) stilovi
  app/
    app.component.{ts,html,scss}   # slaže sekcije, prati scroll (nav + spine rail)
    directives/
      reveal.directive.ts          # fade-in animacija na scroll
    components/
      nav/        nav.component.{ts,html,scss}
      hero/       hero.component.{ts,html,scss}
      reviews/    reviews.component.{ts,html,scss}
      treatment/  treatment.component.{ts,html,scss}
      conditions/ conditions.component.{ts,html,scss}
      about/      about.component.{ts,html,scss}
      booking/    booking.component.{ts,html,scss}   # kartica cijene + kontakt obrazac
      footer/     footer.component.{ts,html,scss}
public/
  favicon.svg
.github/workflows/deploy.yml   # automatski build + deploy na GitHub Pages
```

## Preduvjeti

- [Node.js](https://nodejs.org) 20 ili noviji (dolazi s npm-om)

## Lokalni razvoj

```bash
npm install        # instalira ovisnosti (samo prvi put)
npm start          # pokreće dev server na http://localhost:4200
```

Build produkcijske verzije:

```bash
npm run build      # rezultat u dist/top-spine/browser
```

## Hosting na GitHub Pages (automatski — preporučeno)

Projekt sadrži GitHub Actions workflow koji automatski gradi i objavljuje stranicu pri
svakom `push`-u na `main`.

1. Napravite novi repozitorij na GitHubu (npr. `top-spine`).
2. Pushajte kod:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<korisnik>/<repo>.git
   git push -u origin main
   ```
3. Na GitHubu otvorite **Settings → Pages** i pod **Build and deployment → Source**
   odaberite **GitHub Actions**.
4. Pričekajte da workflow (kartica **Actions**) završi. Stranica će biti dostupna na:
   ```
   https://<korisnik>.github.io/<repo>/
   ```

Workflow automatski postavlja `--base-href` na ime repozitorija, pa putanje do resursa rade
ispravno.

### Custom domena ili `<korisnik>.github.io` repozitorij

Ako koristite vlastitu domenu ili repozitorij naziva `<korisnik>.github.io`, stranica živi u
korijenu (`/`). U tom slučaju u `.github/workflows/deploy.yml` promijenite build korak u:

```yaml
run: npx ng build --configuration production --base-href "/"
```

Za custom domenu dodajte i datoteku `public/CNAME` sa svojom domenom (npr. `www.top-spine.com`).

## Hosting na GitHub Pages (ručno — alternativa)

```bash
npm install -g angular-cli-ghpages
npm run build -- --base-href "/<repo>/"
npx angular-cli-ghpages --dir=dist/top-spine/browser
```

Zatim u **Settings → Pages** odaberite granu `gh-pages`.

## Napomene

- **Kontakt obrazac** trenutno samo prikazuje poruku zahvale; nije spojen na server. Za slanje
  e-poštom spojite ga na servis poput [Formspree](https://formspree.io) ili
  [EmailJS](https://www.emailjs.com) u `booking.component.ts`.
- **Recenzije** su primjeri — zamijenite ih stvarnim Google recenzijama u `reviews.component.ts`.
- **Rezervacija** vodi na postojeći Wix booking kalendar; promijenite URL u `booking.component.ts`
  po potrebi.
