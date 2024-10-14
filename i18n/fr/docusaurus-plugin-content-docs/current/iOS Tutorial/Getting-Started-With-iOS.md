---
sidebar_position: 1
---

# Application RelaySMS pour iOS

## Démarrer avec iOS

RelaySMS permet aux utilisateurs de rester connectés à leurs plateformes en ligne même lorsque l'accès Internet est indisponible. En utilisant la messagerie SMS, les utilisateurs peuvent continuer à communiquer sans interruption : leurs contacts reçoivent des messages comme ils le feraient normalement.

## Introduction

Les étapes ci-dessous vous aideront à configurer votre compte et à commencer à utiliser RelaySMS.

### Étape 1. Télécharger l'application

![App Store](/img/ios2.jpeg)

- Téléchargez depuis [App_Store](https://apps.apple.com/us/app/relaysms/id6630382970)

- [Github](https://github.com/smswithoutborders/SMSwithoutBorders-Android/releases/tag/v1.0) ou

- Construisez depuis [la source](https://github.com/smswithoutborders/SMSwithoutBorders-Android)

#### Exigences Techniques

- Smartphone Android avec capacité SMS

- Android 6.0 et supérieur

### Étape 2. Créer un compte

#### Onboarding / Utiliser l'application

<img src="/iOS/1-welcome.png" alt="onboarding1" class="resized-image"/>
<img src="/iOS/2a-skip.png" alt="onboarding1" class="resized-image"/>
<img src="/iOS/2b-TutorialFinish.png" alt="onboarding1" class="resized-image"/>

- Inscrivez-vous pour un compte gratuit ou connectez-vous à votre compte dans l'application en cliquant sur le bouton « ajouter un compte », sélectionnez « créer un nouveau » et remplissez les informations requises, puis cliquez sur « s'inscrire ».

<img src="/iOS/2-step2creatandlog.png" alt="onboarding1" class="resized-image"/>
<img src="/iOS/3-CreateAccount.png" alt="onboarding1" class="resized-image"/>

**Remarque** : Un code PIN d'authentification sera envoyé à un téléphone valide par SMS.

### Étape 3 : Vérifiez votre numéro de téléphone

Un numéro de vérification sera envoyé à votre numéro de téléphone. Saisissez-le et vérifiez.

<img src="/iOS/3a-verificationCode.png" alt="onboarding1" class="resized-image"/>

### Étape 4 : Connexion

Si vous avez déjà un compte, cliquez sur « se connecter » et remplissez votre numéro de téléphone et votre mot de passe pour accéder à votre compte RelaySMS.

<img src="/iOS/login.png" alt="onboarding1" class="resized-image"/>

### Étape 5. Sauvegarder l'accès aux plateformes

L'une des fonctionnalités clés de RelaySMS est de pouvoir sauvegarder l'accès aux plateformes en ligne pendant que vous avez un Internet actif, puis d'utiliser l'application pour faire des demandes à ces plateformes sans connexion Internet active. Une fois connecté et en cliquant sur **Sauvegarder les comptes**, vous aurez une liste des plateformes que nous supportons actuellement. Vous pouvez sauvegarder vos identifiants pour autant de plateformes que vous pouvez prévoir d'utiliser dans une situation hors ligne.

**Remarque : Vous devez avoir la plateforme que vous souhaitez sauvegarder installée sur votre téléphone avant de pouvoir la sauvegarder sur la plateforme RelaySMS.**

<img src="/iOS/addPlatforms.png" alt="onboarding1" class="resized-image"/>

### Étape 6. Configurez votre application et commencez à l'utiliser

Une fois que vous avez lié vos applications à votre compte RelaySMS, vous devrez ajouter votre numéro de client passerelle ou en sélectionner un dans la liste des clients passerelle disponibles. Un paramètre important à configurer est la sélection du numéro de passerelle pour la communication. Il est moins cher d'opter pour un numéro de passerelle du même fournisseur de services que le vôtre ou situé dans votre pays.

<img src="/iOS/landing.png" alt="onboarding1" class="resized-image"/>
<img src="/iOS/security.png" alt="onboarding1" class="resized-image"/>

### Étape 7. Clients de Passerelle

**Clients Disponibles :**

- Une liste de clients passerelle préconfigurés est affichée.
- Faire glisser vers le bas sur la liste la mettra à jour, garantissant que vous avez les dernières options disponibles.

**Ajout de Clients Personnalisés :**

Si votre passerelle préférée n'est pas répertoriée, vous pouvez configurer votre propre client personnalisé. Les instructions pour configurer un client passerelle personnalisé sont les suivantes :

<img src="/iOS/gateway.png" alt="onboarding1" class="resized-image"/>

### Pour définir un numéro de passerelle, suivez ces étapes ci-dessous

1. Enregistrez le numéro de passerelle prévu dans vos contacts.
2. Allez dans **Paramètres** et sélectionnez Clients de Passerelle.
3. Appuyez sur les _3 points_ dans le coin supérieur droit et appuyez sur _ajouter_.
4. Cliquez sur l'**icône de contact** pour accéder à vos contacts.
5. Trouvez et sélectionnez le numéro de passerelle enregistré.
6. Confirmez la sélection et ajoutez le numéro de passerelle avec succès.

   <img src="/iOS/gatewaynumbers.png" alt="onboarding1" class="resized-image"/>
   <img src="/iOS/makeDefault.png" alt="onboarding1" class="resized-image"/>

# Communiquer en utilisant l'application

Découvrons comment communiquer sans connexion Internet en utilisant RelaySMS.

### Étape 1 : Cliquez sur le bouton de composition

<img src="/iOS/landing.png" alt="image de composition" class="resized-image"/>

Après avoir complété la première étape qui consiste à sauvegarder l'accès aux plateformes sur lesquelles vous souhaitez communiquer, synchronisez et ajoutez un numéro de passerelle.

Ouvrez l'application RelaySMS après l'avoir téléchargée depuis le [Google Play Store](https://play.google.com/store/apps/details?id=com.afkanerd.sw0b), [Github](https://github.com/smswithoutborders/SMSwithoutBorders-Android/releases/tag/v1.0) ou construisez depuis [la source](https://github.com/smswithoutborders/SMSwithoutBorders-Android) et cliquez sur l'« icône de crayon » pour composer un message.

### Étape 2. Sélectionnez une plateforme pour composer un message

Choisissez une plateforme pour commencer à composer votre message.

<img src="/iOS/composes.png" alt="ajouter-message" class="resized-image"/>

### Étape 3. Composez votre message et envoyez-le par SMS

Après avoir composé votre message sur n'importe quelle plateforme, procédez à son envoi comme d'habitude. Vous serez ensuite dirigé vers votre page SMS standard, où vous pourrez envoyer le message au numéro de passerelle pré-enregistré en tant que SMS. Notez que le message apparaîtra comme crypté lors de son envoi en tant que SMS. Cette couche supplémentaire de sécurité garantit que seul vous et le destinataire pouvez accéder au message, préservant la confidentialité.

<img src="/iOS/ComposeGmail.png" alt="ajouter-message" class="resized-image"/>
<img src="/iOS/ComposeTelegram.png" alt="ajouter-message" class="resized-image"/>
<img src="/iOS/ComposeTwitter.png" alt="ajouter-message" class="resized-image"/>

#### Exigences

- E-mail du destinataire pour Gmail
- Numéro de téléphone des contacts pour Telegram
- Corps du tweet pour Twitter

Pour l'une des plateformes sélectionnées, remplissez les champs requis avec précision et envoyez le SMS.

### Étape 4 : SMS Envoyé

Félicitations ! Vous avez réussi à envoyer le SMS. Le destinataire recevra maintenant le message original dans un format lisible. Veuillez noter que le temps de réception du message peut varier en fonction du réseau mobile et de la fonctionnalité de l'appareil client passerelle.

### Révoquer les Plateformes Enregistrées

Révoquer les plateformes enregistrées supprime votre accès à celles-ci via RelaySMS. Cela signifie que vous ne pouvez plus envoyer de messages à cette plateforme en ligne en utilisant l'application RelaySMS. Pour ce faire :

- Cliquez sur Paramètres
- Allez dans Sécurité et confidentialité
- Appuyez sur « révoquer les plateformes » et choisissez la plateforme que vous souhaitez supprimer

<img src="/iOS/landing.png" alt="Google" class="resized-image"/>
<img src="/iOS/revokePlatforms.png" alt="Google" class="resized-image"/>
<img src="/iOS/selectrevoke.png" alt="Google" class="resized-image"/>

### Supprimer et se déconnecter du compte

Supprimer votre compte signifie supprimer tous vos comptes enregistrés en ligne. Vous pouvez toujours recréer votre compte si nécessaire.

Se déconnecter signifie que tous vos messages actuels seront supprimés et que vous pourrez toujours vous reconnecter si besoin.

- Cliquez sur Paramètres
- Allez dans Sécurité et confidentialité
- Appuyez sur « Déconnexion » pour vous déconnecter de votre compte et sur « Supprimer » pour supprimer votre compte

<img src="/iOS/delete.png" alt="Google" class="resized-image"/>
<img src="/iOS/logout.png" alt="Google" class="resized-image"/>
