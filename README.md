# Documentation du projet Next.js

## Introduction

Bienvenue dans la documentation du site "Un Pour Cent" ! Ce projet est basé sur Next.js. Ce site a été créé dans le but de représenter des associations pour les mettre en avant et présenter leurs différents projets afin de récolter des dons.

## Installation du projet Next.js

Suivez les étapes ci-dessous pour installer le projet Next.js sur votre machine :

1. Clonez le dépôt : Tout d'abord, clonez le dépôt du projet Next.js depuis le référentiel distant vers votre machine locale en utilisant la commande suivante :

```bash
git clone <url_du_depot> mon_projet_next
```

2. Accédez au répertoire : Naviguez vers le répertoire fraîchement créé pour le projet Next.js :
   bash

```bash
cd mon_projet_next
```

3. Installation des dépendances : Utilisez npm pour installer les dépendances requises du projet. Exécutez la commande suivante :

```bash
npm install
```

4. Variable d'environnement dans le fichier :

Créer le fichier de variable :

```bash
.env.local
```

Remplir le fichier avec les variables suivantes :

```bash
NEXT_PUBLIC_AIRTABLE_API_KEY
NEXT_PUBLIC_AIRTABLE_BASE_ID
NEXT_PUBLIC_AIRTABLE_TABLE_NAME_CONTACT
NEXT_PUBLIC_AIRTABLE_TABLE_NAME_NEWSLETTER
```

3. Lancer l'application :

```bash
npm run dev
```

## Développement

### Bonnes pratiques

Branche "develop" pour les nouvelles features à merge

Branche "main" pour le déploiement Vercel

### Création de branche

```bash
prénom/nomfeature
```

### Commit :

```bash
[nombranche][fix-design-feature]:description de la tache
```

#### Exemple :

Je dois crée une branche pour une feature de login :

Nom de la branche :

```bash
axel/login
```

Exemple de commit :

```bash
[axel/login][feature]:Ajout de systeme de connexion par token
```
