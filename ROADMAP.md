# CareConnect MVP - RoadMap:

## Set-up Environnement:

### GitHub

- Créer le dépôt GitHub. :ballot_box_with_check: - **10.04.2025**
- Ajouter `.gitignore` pour ignorer les fichiers sensibles ou inutiles (node_modules/, .env, etc). :ballot_box_with_check: - **10.04.2025** (à MAJ régulièrement)
- Créer un `README.md` avec une description claire du projet.

### NodeJS / tRPC

- Installer NodeJS en version stable recommandée : `echo "v22.14.0" > .nvmrc`. :ballot_box_with_check: - **10.04.2025**
- Utiliser `pnpm` comme gestionnaire de paquets : `npm install -g pnpm`. :ballot_box_with_check: - **10.04.2025**
-

## PostgreSQL

- Installation et initialisation d'une DB Postgre :ballot_box_with_check: - **11.04.2025**

### Docker

- Créer un `Dockerfile` basé sur l'image `node:23-slim` pour définir l'image de l'app. :ballot_box_with_check: - **10.04.2025**
- Créer un `docker-compose.yml` avec les services suivants :
  - server (app Node.js) :ballot_box_with_check: - **10.04.2025**
  - db (PostgreSQL) :ballot_box_with_check: - **11.04.2025**
  - web (front React)
  - redis (cache)
  - volume optionnel pour coffre-fort numérique.

### Typescript-Eslint :ballot_box_with_check: - **10.04.2025**

- Installer TypeScript, ESLint, Prettier et leur configuration. :ballot_box_with_check: - **10.04.2025**
- Ajouter `.editorconfig` et `.prettierrc` pour homogéniser le code. :ballot_box_with_check: - **10.04.2025**

## Gestion User:

### Prisma

Quelques difficultés avec la prise en main de Prisma, cet ORM change drastiquement de ce que j'avais pu voir ! Je n'ai pas pu la tester encore, mais tout semble okay avec ce que j'ai vu de la doc.
J'ai eu l'obligation d'accepter du .js (et donc de modif tsconfig), la manière pour Prisma de rester en full TS est expérimentale et ne voulait pas fonctionné sur le projet. **A check régulièrement**

#### model User de base: :ballot_box_with_check: **11.04.2025**

#### model Client (User) — renommage souhaité : :ballot_box_with_check: **11.04.2025**

A été rename en CareSeeker, les personnes en situation de handicap ne sont pas des clients dans le sens où je l'entends. Ce sont des personnes en situation de fragilité qui cherche un accompagnement difficile à trouver.

#### model Professional (User) :ballot_box_with_check: **11.04.2025**

### Gestion Admin

- stocker une ADMIN_KEY dans le .env
- ajouter une logique de comparaison avec dans la route

### Zod

- installer Zod :ballot_box_with_check: **11.04.2025**
- déclarer des schémas en lien avec l'ORM :ballot_box_with_check: **11.04.2025**

### tRPC (routers CRUD User) :heavy_multiplication_x: **12.04.2025**

- Créer les routers avec `query`/`mutation` : create, list, update, delete.

=> Après 1/2 semaine à lire régulièrement de la docs, à regarder des tutos, j'ai compris l'intérêt de tRPC et l'outil a l'air **puissant**. Le sentiment de rajouter une très grosse couche d'abstraction me dérangeait et des difficultés en chaîne dans le setup m'ont fait abandonner l'idée. Enfin, c'est encore un package niche, j'y reviendrais!

En remplacement:

### Express pour designer l'API REST (CRUD)

- Changement de l'entry point du server : `apps/server/src/index.ts` devient `apps/server/src/server.ts`. :ballot_box_with_check: **11.04.2025**
- Création d'un dossier `/apps/server/routes` et de `routes/index.ts` qui indexera toutes les _routes_.
- Créer un premier endpoint `GET:/health` pour obtenir l'état de la DB (enlever connectToDB() de server.ts) et donc tester Prisma. :ballot_box_with_check: **12.04.2025**
- Créer les endpoints utilisateurs suivants:

1. POST:/careseeker :ballot_box_with_check: **12.04.2025**
2. POST:/professionals :ballot_box_with_check: **12.04.2025**
3. GET:/careseeker:id
4. GET:/professionals:id
5. PUT:/careseeker:id
6. PUT/professionals:id
7. DELETE:/careseeker:id
8. DELETE:/professionals:id
   Les login/logout:
9. post:/Login
10. post:/logout
    Et les endpoints admin only:
11. post /admin
12. GET/users :ballot_box_with_check: **12.04.2025**

### Validators

- Ajouter des validators pour emails, numéros de téléphone, mots de passe, etc.

### Authentication

- OAuth 2.0 (Google + 2 autres à définir) + login via email/password.
- JWT avec stockage dans cookies `HttpOnly`, `Secure` (en prod), `SameSite`. -> installer cookie-parser & jsonwebtoken & create /server/jwtHandler :ballot_box_with_check: **14.04.2025**

### Roles

- Protéger les routes tRPC selon le `role` de l'utilisateur.
- Récupérer les infos du `role` dans le middleware via JWT ou session.

## Front-end part 1:

### Pages à faire :

- HomePage (présentation de l'app + CTA inscription/login)
- Dashboard Client (vue utilisateur avec calendrier, infos, messages)
- Dashboard Professionel (vue gestion rendez-vous, dispos, services)
- Panel Admin (gestion utilisateurs, vérifications, etc)

### Forms & Queries

- Zod pour validation des inputs.
- tRPC + TanStack Query pour requêtes vers le back (mutation, query).
- Modals pour inscription (client / pro) et connexion.

## Redis

Une fois que j'ai un site 'fonctionnel' avec un back et un front, je vais rajoute Redis ppur de la mise en cache.

### LogOut avancé

- Gérer une blacklist des JWToken expirés/déconnectés grâce à Redis

## Availability:

### model Prisma (adapté depuis Django):

```prisma
model Availability {
  id                       String   @id @default(uuid())
  professionalId           String
  professional             Professional @relation(fields: [professionalId], references: [id])
  availabilityStart        DateTime
  availabilityEnd          DateTime
  title                    String
  minimumDurationMinutes   Int
  maximumDurationMinutes   Int?
}
```

## Appointments:

### model Prisma (adapté depuis Django):

```prisma
model AppointmentLink {
  id             String         @id @default(uuid())
  clientId       String
  professionalId String
  client         Client         @relation(fields: [clientId], references: [userId])
  professional   Professional   @relation(fields: [professionalId], references: [userId])
  appointment    Appointment?
}

model Appointment {
  id                   String   @id @default(uuid())
  appntmntLinkId       String  @unique
  appntmntLink         AppointmentLink @relation(fields: [appntmntLinkId], references: [id])
  start                DateTime
  end                  DateTime
  title                String
  description          String?
  status               String
  location             String
  customLocation       String?
  clientAddressId      String?
  professionalAddressId String?
}
```

### Front-End Calendar:

- Intégration React Big Calendar.
- Logique de disponibilité / rendez-vous / récurrence.

## Front-end part 2:

### React Big Calendar:

- Chaque Pro/Client a un calendrier sur son Dashboard.
- Les Pro peuvent publier des créneaux.
- Les Clients peuvent réserver sur le profil du Pro.
- Actions possibles : valider / annuler / modifier un RDV.

## Qualifications et Services:

### model Qualification (Prisma):

```prisma
model Qualification {
  id                String   @id @default(uuid())
  degree            String
  institution       String
  yearObtention     Int
  documentUrl       String?
  isVerified        String
  professionalId    String
  professional      Professional @relation(fields: [professionalId], references: [userId])
}
```

### model Service (Prisma):

```prisma
model Service {
  id                   String   @id @default(uuid())
  serviceName          String
  customServiceName    String?
  serviceCategory      String
  customServiceCategory String?
  isVerified           Boolean
  professionals        Professional[] @relation("ProfessionalServices")
}
```

## Front-end part 3:

### Dashboard Pro:

- Affichage qualifications, services, documents, calendrier.
- Gestion vérification diplômes / ajout de services.

### Fonctionnalité de recherche:

- Moteur de recherche entre pros/clients selon besoins + localité.
- Adaptation du moteur Python existant à TypeScript.

## Messagerie:

- Validation de l'email (via service tiers ou maison).
- Mise en place d'une messagerie directe entre Client & Pro si RDV existant.

## Autres à prévoir:

- Coffre-fort numérique (stockage de docs sensibles).
- Paiement sécurisé (Stripe / MangoPay / autre).
- RGPD / Vie privée / CGU / Accessibilité approfondie.

## Fil rouge:

- Testing /Logging !

### Test unitaires avec Mocha/Chai

### Logging avec Winston
