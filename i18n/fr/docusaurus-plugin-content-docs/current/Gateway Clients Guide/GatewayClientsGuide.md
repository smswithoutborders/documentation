---
sidebar_position: 1
---

# Guide d'Hébergement et d'Exécution des Clients Passerelle

Suivez ce guide simple pour configurer et configurer un client passerelle Deku SMS sur votre appareil Android.

## Exigences pour Configurer un Client Passerelle :

### Appareil Android :

- Votre appareil doit pouvoir se connecter à Internet.
- Il doit avoir une carte SIM capable de recevoir des messages SMS.

### Connexion Internet :

- Vous aurez besoin d'une connexion Internet fiable (Wi-Fi ou données mobiles).
- Deku SMS utilise très peu de données, donc les données mobiles suffisent.

## Étapes pour Configurer Deku SMS sur un Appareil Android :

### Étape 1 : Télécharger l'Application Deku SMS

Vous pouvez télécharger l'application Deku SMS depuis l'une des sources suivantes :

- [Google Play Store](https://play.google.com/store/apps/details?id=com.afkanerd.deku)
- [F-Droid](https://f-droid.org/packages/com.afkanerd.deku/)
- [GitHub Releases](https://github.com/deku-messaging/Deku-SMS-Android/releases)

### Étape 2 : Définir Deku SMS comme Votre Application SMS par Défaut

Une fois l'application installée, définissez-la comme l'application SMS par défaut sur votre appareil Android.

### Étape 3 : Configurer le Transfert de Messages

<img src="/GatewayHosting/1-messageForwarding.png" alt="Application Deku SMS" style={{ width: '50%', maxWidth: '300px', display: 'block', margin: '0 auto' }} />

1. Ouvrez l'application Deku SMS.

2. Appuyez sur les trois points dans le coin supérieur droit de l'application.

3. Dans le menu déroulant, sélectionnez **Transfert de Messages**.

### Étape 4 : Ajouter un Serveur Passerelle

<div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px' }}>
  <img src="/GatewayHosting/2-forwarding.png" alt="Application Deku SMS" style={{ width: '48%', maxWidth: '300px' }} />
  <img src="/GatewayHosting/3-viewGatewayServers.png" alt="Application Deku SMS" style={{ width: '48%', maxWidth: '300px' }} /> 
</div>

1. Appuyez à nouveau sur les trois points dans le coin supérieur droit.

2. Sélectionnez **Voir les Serveurs Passerelle** dans le menu déroulant.

<div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px' }}>
  <img src="/GatewayHosting/4-sms-routing-gateway.png" alt="Application Deku SMS" style={{ width: '48%', maxWidth: '300px' }} />
  <img src="/GatewayHosting/5-selectHTTPS.png" alt="Application Deku SMS" style={{ width: '48%', maxWidth: '300px' }} />
</div>

3. Appuyez sur les trois points encore une fois et choisissez **Ajouter un Serveur Passerelle HTTPS**.

4. Deux serveurs passerelle doivent être ajoutés afin que les utilisateurs Android et iOS de l'application RelaySMS puissent utiliser le client passerelle pour publier leurs messages en ligne.

### Étape 5 : Remplir les Informations Requises

<img src="/GatewayHosting/6-FillRequirement.png" alt="Application Deku SMS" style={{ width: '50%', maxWidth: '300px', display: 'block', margin: '0 auto' }} />

- **URL 1** : Entrez l'URL suivante :  
  `https://gatewayserver.smswithoutborders.com/v3/publish`

- **Tag** : Entrez un nom pour votre serveur passerelle.

- **Cocher "Tout"** : Assurez-vous que la case "Tout" est cochée pour acheminer tous les messages SMS via le serveur.

### Étape 6 : Finaliser la Configuration

<img src="/GatewayHosting/7-addhttps.png" alt="Application Deku SMS" style={{ width: '50%', maxWidth: '300px', display: 'block', margin: '0 auto' }} />

1. Appuyez sur **Ajouter** pour enregistrer la configuration de votre serveur passerelle.

2. Répétez le processus et ajoutez le deuxième serveur passerelle avec **URL 2** :  
   `https://gatewayserver.smswithoutborders.com/sms/platform/android`

<img src="/GatewayHosting/8-smsroutinggate.png" alt="Application Deku SMS" style={{ width: '50%', maxWidth: '300px', display: 'block', margin: '0 auto' }} />

## Votre Client Passerelle est Maintenant Prêt !

Vous pouvez maintenant partager votre numéro avec les utilisateurs de RelaySMS. Votre appareil Android agira comme un client passerelle, aidant à acheminer les messages via l'application Deku SMS.
