# CareConnect MVP - RoadMap:

## Set-up Environnement:

### GitHub

- Créer le dépôt GitHub. :ballot_box_with_check: - **10.04.2025**
- Ajouter `.gitignore` pour ignorer les fichiers sensibles ou inutiles (node_modules/, .env, etc). :ballot_box_with_check: - **10.04.2025** (à MAJ régulièrement)
- Créer un `README.md` avec une description claire du projet.

### NodeJS

- Installer NodeJS en version stable recommandée : `echo "v22.14.0" > .nvmrc`. :ballot_box_with_check: - **10.04.2025**
- Utiliser `pnpm` comme gestionnaire de paquets : `npm install -g pnpm`. :ballot_box_with_check: - **10.04.2025**

### Docker

- Créer un `Dockerfile` basé sur l'image `node:23-slim` pour définir l'image de l'app. :ballot_box_with_check: - **10.04.2025**
- Créer un `docker-compose.yml` avec les services suivants :
  - web (app Node.js) :ballot_box_with_check: - **10.04.2025**
  - db (PostgreSQL)
  - redis (cache)
  - volume optionnel pour coffre-fort numérique.

### Typescript-Eslint :ballot_box_with_check: - **10.04.2025**

- Installer TypeScript, ESLint, Prettier et leur configuration. :ballot_box_with_check: - **10.04.2025**
- Ajouter `.editorconfig` et `.prettierrc` pour homogéniser le code. :ballot_box_with_check: - **10.04.2025**

## Gestion User:

### Prisma

#### model User de base:

```prisma
model User {
  id                String      @id @default(uuid())
  email             String      @unique
  password          String
  firstName         String
  lastName          String
  phoneNumber       String?
  role              String      // CLIENT, PROFESSIONAL, ADMIN
  createdAt         DateTime    @default(now())
  updatedAt         DateTime    @updatedAt
  emailVerified     Boolean     @default(false)
  clients           Client[]    @relation("UserClients")
  professionals     Professional[] @relation("UserProfessionals")
}
```

#### model Client (User) — renommage souhaité :

```prisma
model Client {
  userId    String @id
  user      User   @relation(fields: [userId], references: [id])
  isHelper  Boolean
}
```

#### model Professional (User)

### tRPC (routers CRUD User)

- Créer les routers avec `query`/`mutation` : create, list, update, delete.
- Utiliser Zod pour valider les schémas d'entrée.

### Validators

- Ajouter des validators pour emails, numéros de téléphone, mots de passe, etc.

### Authentication

- OAuth 2.0 (Google + 2 autres à définir) + login via email/password.
- JWT avec stockage dans cookies `HttpOnly`, `Secure`, `SameSite`.

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
