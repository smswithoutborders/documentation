---
sidebar_position: 3
---

# SMSWithoutBorders Backend

c'est une API cloud et Service de gestion des utilisateurs.
Il est directement configurable avec les bases de données MySQL pour la gestion des utilisateurs. Il fournit également des intégrations prêtes à l'emploi de Google OAuth-2.0, Twitter OAuth, des points de terminaison Telegram et de l'authentification de compte.

:::astuce Ce que vous apprendrez

* Comment configurer le Backend
* Comment tester et déployer avec docker

Le Backend s'intègre à ces services. vous devrez peut-être les configurer en fonction de la section sur laquelle vous travaillez.

* [`Website`](https://github.com/smswithoutborders/smswithoutborders.com)
* [`Third party platforms`](https://github.com/smswithoutborders?q=custom&type=all&language=&sort=)

:::

## Table des matières

- [SMSWithoutBorders Backend](#smswithoutborders-backend)
 - [Table des matières](#table-of-contents)
 - [Exigences](#requirements)
 - [Installation](#installation)
   - [Dépanner](#troubleshoot)
 - [Setup](#setup)
   - [Configurations d'environnement de développement](#development-environment-configurations)
   - [Configurations de l'environnement de production](#production-environment-configurations)
   - [Options de configuration](#configuration-options)
     - [SEVER](#sever)
     - [RÉFÉRENCES](#credentials)
     - [RECAPTCHA](#recaptcha)
     - [DÉVELOPPEUR](#developer)
 - [Comment utiliser](#how-to-use)
   - [Démarrer l'API de gestion des utilisateurs backend](#start-backend-user-management-api)
     - [Environnement de développement de la gestion des utilisateurs](#user-management-development-environment)
     - [Environnement de production de gestion des utilisateurs](#user-management-production-environment)
   - [Démarrer l'API Backend Publisher](#start-backend-publisher-api)
  - [Environnement de développement de l'éditeur](#publisher-development-environment)
    - [Environnement de production de l'éditeur](#publisher-production-environment)
   - [Démarrer à la fois l'API de gestion des utilisateurs backend et l'API de l'éditeur backend](#start-both-backend-user-management-api-and-backend-publisher-api)
     - [Environnement de développement](#development-environment)
     - [Environnement de production](#production-environment)
 - [API SandBox](#api-sandbox)
 - [Journaux API](#api-logs)

## Exigences

- [MySQL](https://www.mysql.com/) (version >= 8.0.28) ([MariaDB](https://mariadb.org/))
- [nodejs](https://nodejs.org) (version >= [16.14.0](https://nodejs.org/dist/v16.14.0/node-v16.14.0-linux-x64.tar.xz))
- [npm](https://www.npmjs.com/) (version >= [8.3.1](https://nodejs.org/dist/v16.14.0/node-v16.14.0-linux-x64.tar.xz))

## Installation

Toutes les dépendances d'exécution sont installées à l'aide de npm

```bash
npm install
```

### Dépanner

Pour plusieurs raisons, les utilisateurs peuvent parfois rencontrer des difficultés lors de l'installation. Voici quelques conseils de dépannage

- Supprimez le répertoire `node_modules` et le fichier `package-lock.json`. Réessayez l'installation.

```bash
rm -rf node_modules package-lock.json
```

## Setup

Tous les fichiers de configuration se trouvent dans le
**[config](https://github.com/smswithoutborders/SMSwithoutborders-BE/blob/main/config)** annuaire.

Les fichiers de configuration sont nommés en fonction de leur **[environment variables](https://github.com/lorenwest/node-config/wiki/Environment-Variables)**.

### Configurations de l'environnement de développement

**[default.json](https://github.com/smswithoutborders/SMSwithoutborders-BE/blob/main/config/example.default.json)**est le fichier de configuration d'un environnement de développement.

Pour configurer les informations d'identification de la base de données, de l'API et de la plate-forme pour un environnement de développement, copiez les fichiers de modèle "example.default.json" et renommez-les en "default.json"

```bash
cp config/example.default.json config/default.json
```

### Configurations de l'environnement de production

**[production.json](https://github.com/smswithoutborders/SMSwithoutborders-BE/blob/main/config/example.production.json)** est le fichier de configuration pour un environnement de production.

Pour configurer les informations d'identification de la base de données, de l'API et de la plate-forme pour un environnement de production, copiez les fichiers de modèle "example.production.json" et renommez-les en "production.jso


```bash
cp config/example.production.json config/production.json
```

### Options de configuration

Ce sont les options pour chaque  **[configuration](https://github.com/smswithoutborders/SMSwithoutborders-BE/blob/main/config)** file

#### serveur

Gère l'accès au Smswithoutborders pour centraliser les ressources et les services.

**Base de données**

1. **HOST** : le nom d'hôte de la base de données à laquelle vous vous connectez. (Par défaut : hôte local)
2. **USER** : l'utilisateur MySQL avec lequel s'authentifier. (Par défaut : racine)
3. **MOT DE PASSE** : Le mot de passe de cet utilisateur MySQL.
4. **DATABASE** : nom de la base de données à utiliser pour cette connexion (par défaut : Smswithoutborders)

**API**

1. **PORT DE L'API DE GESTION DES UTILISATEURS** : le numéro de port auquel se connecter. (Par défaut : 9000).

2. **PUBLISHER API PORT** : numéro de port auquel se connecter. (Par défaut : 10000).

3. **KEY** : La clé utilisée pour crypter les données d'un utilisateur. (Par défaut : "de4053831a43d62d9e68fc11319270a9").

4. **SALT** : le sel utilisé pour hacher les données d'un utilisateur. (Par défaut : "acaad78fd9dadcb056840c09073190a8").

5. **SECURE SESSIONS** : spécifie la valeur booléenne pour
 [Secure Set-Cookie attribute](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie). Lorsque truey, l'attribut Secure est défini, sinon, il ne l'est pas. Par défaut, l'attribut Secure sessions est défini sur truthy.

6. **SESSION MAXAGE** : Spécifie le nombre (en millisecondes) à utiliser lors du calcul de la [Expires Set-Cookie attribute](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie). Cela se fait en prenant l'heure actuelle du serveur et en ajoutant maxAge millisecondes à la valeur pour calculer une date/heure d'expiration. Par défaut, l'âge maximum est fixé à deux heures (7200000 ms).

7. **ENABLE BLOCKING** : spécifie la valeur booléenne pour l'échec du suivi de l'utilisateur [authentication](https://github.com/smswithoutborders/SMSwithoutborders-BE/blob/main/docs/FEATURES_v2.md#2-authenticate-an-account) tentatives.

8. **TENTATIVES DE BLOCAGE COURT** : spécifie le nombre de tentatives [authentication](https://github.com/smswithoutborders/SMSwithoutborders-BE/blob/main/docs/FEATURES_v2.md#2-authenticate-an-account) tentatives avant un bloc court. Plusieurs blocs courts donnent un bloc long.

9. **LONG BLOCK ATTEMPTS** : Spécifie le nombre de tentatives de blocage court infructueuses avant un blocage long.

10. **DURÉE BLOC COURT** : Spécifie la durée (en minutes) d'un bloc court.

11. **DURÉE DE BLOC LONG** : Spécifie la durée (en minutes) d'un bloc long.


**OTP**

Un utilisateur a quatre tentatives quotidiennes pour demander un code OTP

1. **ENABLE_OTP_BLOCKING** : Spécifie la valeur booléenne pour activer/désactiver le suivi des demandes de code OTP.
2. **DURÉE PREMIÈRE RENVOI** : spécifie la durée (en millisecondes) de la première requête OTP.
3. **SECOND RESEND DURATION** : spécifie la durée (en millisecondes) de la deuxième requête OTP.
4. **THIRD RESEND DURATION** : spécifie la durée (en millisecondes) de la troisième requête OTP.
5. **FOURTH RESEND DURATION** : spécifie la durée (en millisecondes) de la quatrième requête OTP.

**GATEWAY SERVER**

c'est un cas d'utilisation du [SMSWithoutBorders-Gateway-Server](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server) project.

1. **URL** : L'URL du serveur de passerelle auquel vous vous connectez. (Par défaut : hôte local)
2. **PORT** : le numéro de port auquel se connecter. (Par défaut : 6969)

**ORIGINE**

Configure l'en-tête Access-Control-Allow-Origin CORS. Valeurs possibles:

Array - définit origin sur un tableau d'origines valides. Chaque origine peut être une chaîne ou une RegExp. Par exemple ["http://example1.com", /\.example2\.com$/] acceptera toute demande de "http://example1.com" ou d'un sous-domaine de "example2.com". (Default: "localhost:18000")

**SSL API**

1. **API PORT** : le numéro de port auquel se connecter.
2. **CERTIFICATE** : Chemin d'accès à votre certificat SSL.
3. **KEY** : Chemin d'accès à votre clé SSL.
4. **PEM** : Chemin d'accès à votre PEM SSL.

#### CRÉDITS

**GOOGLE**

Obtenir des identifiants depuis
 [Google Cloud Platform Console](https://console.cloud.google.com/)

1. **ID CLIENT GOOGLE** : Votre ID client Google.
2. **GOOGLE CLIENT SECRET** : Votre secret client Google.

**TWITTER**

Obtenir des informations d'identification depuis [Twitter Developers Portal](https://developer.twitter.com/en/docs/developer-portal/overview)

1. **CLÉ API TWITTER** : Votre clé API Twitter
2. **TWITTER API KEY SECRET** : votre clé API Twitter secrète

**TELEGRAM**
Il s'agit d'un cas d'utilisation du projet [SMSWithoutBorders-customplatform-Telegram](https://github.com/smswithoutborders/SMSWithoutBorders-customplatform-Telegram).

1. ** HÔTE DE DEMANDE DE TÉLÉGRAMME ** : L'URL du serveur de plate-forme personnalisée de télégramme auquel vous vous connectez.

#### RECAPTCHA


Acquérir la CLÉ de 
[Google reCAPTCHA](https://developers.google.com/recaptcha)

1. **ENABLE RECAPTCHA** : Spécifie la valeur booléenne pour activer/désactiver recaptcha.
2. **CLÉ SECRÈTE** : Votre clé secrète Google reCAPTCHA

#### DÉVELOPPEUR

Gère l'accès aux ressources du développeur SMSsansfrontières.

1. **HOST** : L'URL du serveur de développeurs auquel vous vous connectez. (Par défaut : hôte local)
2. **PORT** : le numéro de port auquel se connecter. (Par défaut : 12000)

## Comment utiliser

### Démarrer l'API de gestion des utilisateurs backend

#### Gestion des utilisateurs Environnement de développement

- Avec le NPM

```bash
npm run start_main
```

- Avec Node

```bash
node controllers/sync_platforms.js && node server.js
```

#### Gestion des utilisateurs Environnement de production

- Avec le NPM

```bash
NODE_ENV=production npm run start_main
```

-  Avec Node

```bash
NODE_ENV=production node controllers/sync_platforms.js && node server.js
```

### Start Backend Publisher API

#### Publisher Development Environment

-  Avec le NPM

```bash
npm run start_pub
```

-  Avec Node

```bash
node controllers/sync_platforms.js && node server_pub.js
```

#### Publisher Production Environment

-  Avec le NPM

```bash
NODE_ENV=production npm run start_pub
```

-  Avec Node

```bash
NODE_ENV=production node controllers/sync_platforms.js && node server_pub.js
```

### Start both Backend User management API and Backend Publisher API

#### Environnement de développement

-  Avec NPM

```bash
npm run start
```

#### Environnement de production

-  Avec le NPM

```bash
NODE_ENV=production npm start
```

## API SandBox

```
http://localhost:{PORT}/v1/api-docs

http://localhost:{PORT}/v2/api-docs
```

## Journaux d'API

Par défaut, les [log levels](https://github.com/smswithoutborders/SMSwithoutborders-BE/tree/main/logs#log-levels)  sont définis sur "info". Vous pouvez modifier les [log levels](https://github.com/smswithoutborders/SMSwithoutborders-BE/tree/main/logs#log-levels).  Par exemple, [Start both Backend User management API and Backend Publisher API](#Start-both-Backend-User-management-API-and-Backend-Publisher-API) with [log levels](https://github.com/smswithoutborders/SMSwithoutborders-BE/tree/main/logs#log-levels) défini sur "debug"

```
LOG_LEVEL=debug npm start
```

Tous les fichiers journaux se trouvent dans le répertoire des journaux. [Read more](https://github.com/smswithoutborders/SMSwithoutborders-BE/tree/main/logs) ...