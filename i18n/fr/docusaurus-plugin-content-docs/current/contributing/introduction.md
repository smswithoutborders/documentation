---
sidebar_position: 1
---

## Définitions

**SWOB:** - SMSWithoutBorders

Ce document décrit le flux de données du SWOB.

Ce document ne contient pas d'informations sur le fonctionnement interne de chacun des modules ; des informations sur le fonctionnement interne de chaque module peuvent être trouvées dans leurs référentiels respectifs.

Ce document s'adresse aux publics suivants :
- Ingénieurs en logiciel
- Responsables de programme

##Vue d'ensemble


#### Résumé du flux de données.

<img alt="Figure: swob merge flow" src="https://github.com/smswithoutborders/SMSWithoutBorders-Resources/raw/master/multimedia/img/developers/swob_merge_flow.png" />

### Stockage des accès aux comptes

SWOB travaille selon les principes suivants [OAuth 2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2).

> OAuth 2 est un cadre d'autorisation qui permet aux applications - telles que Facebook, GitHub et DigitalOcean - d'obtenir un accès limité aux comptes d'utilisateurs sur un service HTTP. Il fonctionne en déléguant l'authentification de l'utilisateur au service qui héberge un compte d'utilisateur et en autorisant des applications tierces à accéder à ce compte d'utilisateur. OAuth 2 fournit des flux d'autorisation pour les applications web et de bureau, ainsi que pour les appareils mobiles.

<img width="350" height="400" src="https://github.com/smswithoutborders/SMSWithoutBorders-Resources/raw/master/multimedia/img/developers/swob_auth.png" />

Les jetons d'utilisateur sont stockés en toute sécurité et sont accessibles à la demande de l'utilisateur :
- publier une demande sur une plateforme en ligne à partir de l'application
- révoquer les jetons
- supprimer des comptes (cette action révoque également les jetons).

##### Dépôts connexes

- [Accès de l'utilisateur à la base de données de stockage](https://github.com/smswithoutborders/SMSwithoutborders-BE)
- [User management User interfaces](https://github.com/smswithoutborders/smswithoutborders.com)


### Faire une demande par SMS

#### Synchronisation.

Le processus de synchronisation utilise des communications basées sur RSA pour effectuer un échange sécurisé entre les utilisateurs de l'application mobile et les serveurs de la passerelle.

<img width="750" height="600" src="https://github.com/smswithoutborders/SMSWithoutBorders-Resources/raw/master/multimedia/img/developers/swob_sync.png" />

La poignée de main se termine par le partage sécurisé entre l'application et le serveur de la passerelle des clés secrètes qui seront utilisées pour crypter les messages SMS de l'application.
Les utilisateurs sont donc liés à la dernière clé secrète partagée, ce qui dévalue toute clé stockée précédemment.

Les clés secrètes sont stockées dans l'application et ne peuvent pas être demandées au serveur une fois la synchronisation terminée. Cela signifie que lorsqu'un utilisateur change d'appareil ou désinstalle l'application, il doit procéder à une nouvelle synchronisation.

##### Dépôts connexes**

- [Gateway server](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server)
- [Android App](https://github.com/smswithoutborders/SMSwithoutBorders-App-Android)

#### Demande et publication

Les utilisateurs choisissent la plateforme sur laquelle ils souhaitent publier (envoyer) leurs messages à partir de l'application mobile. L'utilisateur se voit alors proposer l'un des nombreux [clients de passerelle](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client) qui peuvent transmettre leurs messages aux serveurs de la passerelle. Les serveurs de passerelle par défaut sont choisis et fournis à l'utilisateur après la synchronisation, mais ils peuvent être modifiés manuellement par l'utilisateur.

<img width="750" height="600" src="https://github.com/smswithoutborders/SMSWithoutBorders-Resources/raw/master/multimedia/img/developers/swob_request_and_publish.png" />

#### Demande et publication


Les utilisateurs choisissent la plateforme sur laquelle ils souhaitent publier (envoyer) leurs messages à partir de l'application mobile. L'utilisateur se voit alors proposer l'un des nombreux [clients de passerelle](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client) qui peuvent transmettre leurs messages aux serveurs de la passerelle. Les serveurs de passerelle par défaut sont choisis et fournis à l'utilisateur après la synchronisation, mais ils peuvent être modifiés manuellement par l'utilisateur.

##### Related repositories.

##### Référentiels associés.

- [Clients de la passerelle](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client).
- [Serveur de passerelle](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server).
- [Publisher](https://github.com/smswithoutborders/SMSWithoutBorders-Publisher).