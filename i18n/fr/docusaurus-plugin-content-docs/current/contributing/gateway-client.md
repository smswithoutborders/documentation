---
sidebar_position: 4
---

# Clients de la passerelle SMSWithoutBorders

Gateway Client est une passerelle de gestion de SMS sous Linux. Elle peut à la fois recevoir et envoyer des messages SMS en utilisant les utilitaires Linux ModemManager. Il a pour but d'être un ensemble d'outils complet pour tout ce qui concerne les SMS sous linux. Il fonctionne au mieux avec les modems USB 2G/3G.

:::conseil Ce que vous apprendrez

* Comment configurer et utiliser les clients de la passerelle

La version la plus récente de ce guide se trouve dans le [`github reposistory`] (https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client).

:::

## Installation et configuration

### Installation

#### Installation des dépendances requises

- python3

#### Dépendances

##### Ubuntu

`sudo apt install build-essential libpython3-dev libdbus-1-dev`

`sudo apt install python3-gi python3-gi-cairo gir1.2-gtk-3.0`

`sudo apt install libgirepository1.0-dev gcc libcairo2-dev pkg-config python3-dev python3-venv`

##### Arche

`sudo pacman -S python-gobject gtk3`

`sudo pacman -S python cairo pkgconf gobject-introspection gtk3`

#### Construire et installer

<p>Cloner le dépôt</p>

```bash
git clone https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client.git
```
```bash
cd SMSWithoutBorders-Gateway-Client
```

<p>Créez vos fichiers de configuration</p>

```bash
make
```

<p>Installer d'autres dépendances</p>

```bash
make install
```

#### Configuration

<p>
Vos clusters ont besoin d'un serveur avec lequel ils communiquent, et vous devrez le désigner dans vos fichiers de configuration.</p>

- Modifier `.configs/config.ini` ref :[lien vers un exemple de fichier de configuration](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client/tree/master/.configs/example.config.ini)

- Suivez [ces étapes](https://smswithoutborders.github.io/docs/developers/getting-started) afin d'obtenir votre identifiant et votre clé d'authentification

```ini
[OPENAPI]
API_ID=<insert your server username here (same as an Afkanerd developer Auth ID)>
API_KEY=<insert your server password here (same as an Afkanerd develper Auth Key)>
```

- Veillez à ce que l'URL de connexion pointe vers le [serveur RabbitMQ](https://developers.smswithoutborders.com:15671).

```ini
CONNECTION_URL=developers.smswithoutborders.com
```

#### Fonctionnement en tant que service système.

##### Linux.

```bash
make start
```
- Pour démarrer automatiquement au démarrage.

```bash
make enable
```

<b>Pour afficher tous les journaux en cours d'exécution</b>

```bash
tail -f src/services/logs/service.log
```

#### Exécution manuelle.

##### Linux

- Pour exécuter l'envoi (envoyer des messages SMS).
   - Branchez votre modem USB.
   - Activez votre environnement virtuel.

    ```bash
    source venv/bin/activate
    ```
   - Pour les messages OpenAPI sortants :

    ```bash
    python3 src/main.py --log=DEBUG --module=outbound
    ```
   - Pour exécuter le programme de réception (recevoir et traiter les messages entrants),

    ```bash
    python3 src/main.py --log=DEBUG --module=inbound
    ```

<b>Logs - </b>

**system**

<small>Inbound</small>
```bash
journalctl -af -u swob_inbound.service
```

<small>Outbound</small>
```bash
journalctl -af -u swob_outbound.service
```

### Envoi de messages SMS à l'aide d'OpenAPI.

Avec [OpenAPI](https://smswithoutborders-openapi.readthedocs.io/en/latest/overview.html), vous pouvez envoyer des SMS individuels ou en masse par l'intermédiaire du client de la passerelle. Après avoir activé le client passerelle en tant que service système ou manuellement, vous pouvez commencer à envoyer des SMS.

### Installation sur Raspberry pi (testé sur 4B).

#### Ubuntu Server.
_Refs_
> https://ubuntu.com/tutorials/how-to-install-ubuntu-on-your-raspberry-pi#4-boot-ubuntu-server<br />
> https://itsfoss.com/connect-wifi-terminal-ubuntu/