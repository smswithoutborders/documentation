---
sidebar_position: 2
---

# SMSWithoutBorders.com

Le site officiel de SMSWithoutBorders.

Voici l'interface par laquelle les utilisateurs peuvent gérer leurs comptes et enregistrer leurs informations d'identification.

:::conseil Ce que vous apprendrez
- Comment configurer le site web
- Comment tester et déployer le site web avec Apache et Docker

The most recent version of this guide can be found in the [`websites github reposistory`](https://github.com/smswithoutborders/smswithoutborders.com)

Le frontend s'intègre à ces services. Il se peut que vous deviez les configurer en fonction de la section sur laquelle vous travaillez.
- [`Backend API`](https://github.com/smswithoutborders/smswithoutborders.com)
- [`Gateway Server`](https://github.com/smswithoutborders/smswithoutborders.com)

:::

## Guide d'installation

Veuillez suivre les instructions ci-dessous pour mettre en place ce projet

## Exigences.

- [Node.js LTS](https://nodejs.org/en/download/) >= v14
- [Yarn](https://classic.yarnpkg.com/en/docs/install)
- [GNU make](https://www.gnu.org/software/make/)
- [Docker](https://www.docker.com/)

## Installer les dépendances.

```bash
yarn install
```


## Configurer les variables d'environnement

Créer des fichiers de configuration .env de développement et de production avec des valeurs par défaut.

```bash
make config
```

Les variables de configuration globales de SMSWithoutBorders peuvent également être transmises pour remplacer la configuration par défaut.

```bash
SWOB_BE_HOST=http://localhost:9000 SWOB_RECAPTCHA_ENABLE=true SWOB_RECAPTCHA_SITE_KEY=skfhk123 <command>
```

Où la commande peut être n'importe laquelle définie sous scripts dans package.json ou Makefile target, par exemple `yarn start`, `make build`

**.env.development.local**est utilisé dans les environnements de développement et**.env.production.local** est utilisé lors de la création de versions de production.

Ce projet a démarré avec [Create React App](https://github.com/facebook/create-react-app),qui spécifie les conventions de dénomination des variables

Les valeurs par défaut sont indiquées ci-dessous. une référence est également conservée dans [env.example](https://github.com/smswithoutborders/smswithoutborders.com/blob/main/env.example)

| Variable                         | Description                                                                                                 | Default value                                                                                           | Override                |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------- |
| PORT                             | development port                                                                                            | 18000                                                                                                   | PORT                    |
| GENERATE_SOURCEMAP               | Generate or ignore sourcemaps                                                                               | false                                                                                                   | N/A                     |
| REACT_APP_API_URL                | Backend API URL                                                                                             | http://localhost:9000                                                                                 | SWOB_BE_HOST            |
| REACT_APP_API_VERSION            | Backend API version                                                                                         | v2                                                                                                      | SWOB_BE_VERSION         |
| REACT_APP_GATEWAY_SERVER         | Gateway server API URL                                                                                      | http://localhost:15000                                                                                | SWOB_GS_HOST            |
| REACT_APP_GATEWAY_SERVER_VERSION | Gateway server version                                                                                      | v2                                                                                                      | SWOB_GS_VERSION         |
| REACT_APP_RECAPTCHA_ENABLE       | Enable or disable recaptcha, make sure this setting is also toggled on the API                              | false                                                                                                   | SWOB_RECAPTCHA_ENABLE   |
| REACT_APP_RECAPTCHA_SITE_KEY     | reCAPTCHAv2 site key obtained from [google](https://www.google.com/recaptcha/admin)                         | N/A                                                                                                     | SWOB_RECAPTCHA_SITE_KEY |
| REACT_APP_RECAPTCHA_API_URL      | API script src from reCaptchav2 setup [documentation](https://developers.google.com/recaptcha/docs/display) | https://www.google.com/recaptcha/api.js                                                               | N/A                     |
| REACT_APP_TUTORIAL_URL           | Link to the getting started tutorial                                                                        | https://smswithoutborders.github.io/docs/tutorials/getting-started                                    | N/A                     |
| REACT_APP_GATEWAY_TUTORIAL_URL   | Link to gateway client setup tutorial                                                                       | https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client/blob/alpha_stable/src/README.md | N/A                     |
| REACT_APP_PRIVACY_POLICY_URL     | Link to hosted privacy policy markdown file(s)                                                              | https://raw.githubusercontent.com/smswithoutborders/smswithoutborders.com/dev/docs/privacy-policy     | N/A                     |
| HTTPS                            | Enable or disable https                                                                                     | false                                                                                                   | SWOB_SSL_ENABLE         |
| SSL_CRT_FILE                     | Location of SSL CRT file                                                                                    | N/A                                                                                                     | SWOB_SSL_CRT_FILE       |
| SSL_KEY_FILE                     | Location of SSL Key file                                                                                    | N/A                                                                                                     | SWOB_SSL_KEY_FILE       |

## Démarrer le serveur de développement

```bash
yarn start
```

**Note** les configurations sont vérifiées et régénérées à chaque fois que yarn start est exécuté. .env.development ne sera pas écrasé s'il existe déjà, mais .env.production le sera.

Ouvrez [http://localhost:18000](http://localhost:18000) pour l'afficher dans le navigateur.

La page sera rechargée si vous effectuez des modifications..

Vous verrez également les éventuelles erreurs de lint dans la console.

## Créer une version de production
Pour docker, voir la section docker ci-dessous. 

Créez une version de production optimisée pouvant être hébergée sur des serveurs. Cette étape utilise les variables dans **.env.production.local**

```bash
yarn build or make build
```

Vérifier la`build` dossier pour les fichiers déployables une fois terminé.

## Déploiement

### Déploiement standard avec apache

Pour un serveur Linux/Ubuntu exécutant le serveur Web apache2, suivez ces étapes pour déployer le site

- Activer le module de réécriture

```bash
sudo a2enmod rewrite
```
- Ouvrez le fichier de configuration apache dans /etc/apache2/apache2.conf
- Modifiez l'autorisation AllowOverride de none à all

```bash
<Directory /var/www/>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
</Directory>
```

- Copiez le contenu du dossier de construction à la racine du serveur normalement situé à /var/www/html. Assurez-vous que le fichier .htaccess est copié. Le fichier .htaccess est assez important comme spécifié[here](https://create-react-app.dev/docs/deployment/#static-server).


```bash
sudo cp -r build/. /var/www/html
```

- redémarrer apache2.

```bash
sudo systemctl restart apache2
```

### Docker

L'image docker SWOB est conçue pour s'exécuter dans un environnement de production, par conséquent, des clés SSL sont requises
Commencez par créer l'image docker. Il existe un script make que vous pouvez exécuter. De plus, les remplacements d'env SWOB peuvent être passés directement à cette commande. Voir la configuration des variables d'environnement ci-dessus.

```bash
SWOB_SSL_ENABLE=true SWOB_SSL_CRT_FILE=/path/to/server.crt SWOB_SSL_KEY_FILE=/path/to/server.key make image
```

Vous pouvez également passer une autre variable d'environnement SWOB à utiliser à la place des valeurs par défaut.

```bash
SWOB_RECAPTCHA_ENABLE=true SWOB_RECAPTCHA_SITE_KEY=somekeyhere make image
```

Une liste complète de toutes les variables d'environnement peut être trouvée sous `configure env variables` section ci-dessus

Une fois la construction terminée, un `swob-fe:latest` l'image est créée. L'image expose les ports "80" et "443" qui peuvent être mappés selon les besoins

Vous pouvez tester l'image en exécutant `fabriquer un contenant` et visitez `http://localhost:18000`and `https://localhost:18001` dans le navigateur ou déploiement avec vos propres options de configuration docker


# Backend SMSWithoutborders

c'est une API cloud et Service de gestion des utilisateurs.
Il est directement configurable avec les bases de données MySQL pour la gestion des utilisateurs. Il fournit également des intégrations prêtes à l'emploi de Google OAuth-2.0, Twitter OAuth, des points de terminaison Telegram et de l'authentification de compte.


:::astuce Ce que vous apprendrez

* Comment configurer le Backend
* Comment tester et déployer avec docker

La version la plus récente de ce guide se trouve dans le [`github reposistory`](https://github.com/smswithoutborders/SMSwithoutborders-BE)