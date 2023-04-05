---
sidebar_position: 7
---

# SMSWithoutBorders OpenAPI

SMSWithoutBorders OpenAPI intègre un système de file d'attente simple avec RabbitMQ, qui permet aux développeurs de gérer les messages SMS sortants à partir de leurs clients Gateway.

:::conseil Ce que vous apprendrez

* Comment configurer et utiliser OpenAPI

La version la plus récente de ce guide se trouve dans le [`github reposistory`].](https://github.com/smswithoutborders/SMSWithoutBorders-OpenAPI)

Le frontend s'intègre à ces services. Il se peut que vous deviez les configurer en fonction de la section sur laquelle vous travaillez.

* [`Gateway Client`](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client)
* [`RabbitMQ`](https://github.com/smswithoutborders/SMSWithoutBorders-Product-deps-RabbitMQ)

:::

## Table des matières

1. [Exigences](#Exigences)
2. [Dépendances](#Dépendances)
3. [Installation](#installation)
4. [Mise en place](#Mise en place)

## Exigences

* [Python](https://www.python.org/) (version >= [3.8.10](https://www.python.org/downloads/release/python-3810/))

* [Python Virtual Environments](https://docs.python.org/3/tutorial/venv.html)

## Dépendances

Ce projet contient des sous-modules. Pour cloner tous les sous-modules, utilisez

```
git submodule update --init --recursive --remote
```

Mise en place [RabbitMQ Server](https://github.com/smswithoutborders/SMSWithoutBorders-Product-deps-RabbitMQ)

* Déplacer dans le répertoire RabbitMQ dans le repo

```
cd RabbitMQ
```

* [Installation](https://github.com/smswithoutborders/SMSWithoutBorders-Product-deps-RabbitMQ#rabbitmq-for-openapi)

Sur Ubuntu **libmysqlclient-dev** est nécessaire.

```
sudo apt install python3-dev libmysqlclient-dev
```

## Installation

Créer un environnement virtuel **(venv)**.

```
python3 -m venv venv
```

Se déplacer dans l'espace de travail des environnements virtuels.

```
. venv/bin/activate
```

Installer tous les paquets python.

```
python -m pip install -r requirements.txt
```

## Mise en place

Tous les fichiers de configuration se trouvent dans le répertoire**[config](https://github.com/smswithoutborders/SMSWithoutBorders-OpenAPI/tree/main/config)** répertoire.
### Development configurations

**[default.ini](https://github.com/smswithoutborders/SMSWithoutBorders-OpenAPI/tree/main/config/example.default.ini)** est le fichier de configuration.

Pour configurer l'API, copiez les fichiers modèles "example.default.ini" et renommez-les en "default.ini".

```
cp config/example.default.ini config/default.ini
```

### Configurations d'accès


**[setup.ini](https://github.com/smswithoutborders/SMSWithoutBorders-OpenAPI/tree/main/example.setup.ini)** est le fichier d'accès.
Pour configurer l'accès, copiez les fichiers modèles "example.setup.ini" et renommez-les en "setup.ini".

```
cp example.setup.ini setup.ini
```

## Comment l'utiliser

### Démarrer l'API

```bash
python3 server.py
```

## API SandBox

```
<host>:<PORT>/<VERSION>/api-docs/
```
