---
sidebar_position: 7
---

# SMSWithoutBorders OpenAPI

SMSWithoutBorders OpenAPI integrates a simple queueing system with RabbitMQ, which allows developers managing outgoing SMS messages from their Gateway clients.

:::tip What you'll learn

* How to setup and use OpenAPI

The most recent version of this guide can be found in the [`github reposistory`](https://github.com/smswithoutborders/SMSWithoutBorders-OpenAPI)

The frontend integrates with these services. you may need to set them up depending on what section you are working on.

* [`Gateway Client`](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client)
* [`RabbitMQ`](https://github.com/smswithoutborders/SMSWithoutBorders-Product-deps-RabbitMQ)

:::

## Table of contents

1. [Requirements](#requirements)
2. [Dependencies](#dependencies)
3. [Installation](#installation)
4. [Setup](#setup)

## Requirements

* [Python](https://www.python.org/) (version >= [3.8.10](https://www.python.org/downloads/release/python-3810/))

* [Python Virtual Environments](https://docs.python.org/3/tutorial/venv.html)

## Dependencies

This project contains submodules. To clone all submodules use

```
git submodule update --init --recursive --remote
```

Setup [RabbitMQ Server](https://github.com/smswithoutborders/SMSWithoutBorders-Product-deps-RabbitMQ)

* Move into the RabbitMQ directory in the repo

```
cd RabbitMQ
```

* [Installation](https://github.com/smswithoutborders/SMSWithoutBorders-Product-deps-RabbitMQ#rabbitmq-for-openapi)

On Ubuntu **libmysqlclient-dev** is required

```
sudo apt install python3-dev libmysqlclient-dev
```

## Installation

Create a Virtual Environments **(venv)**

```
python3 -m venv venv
```

Move into Virtual Environments workspace

```
. venv/bin/activate
```

Install all python packages

```
python -m pip install -r requirements.txt
```

## Setup

All configuration files are found in the **[config](https://github.com/smswithoutborders/SMSWithoutBorders-OpenAPI/tree/main/config)** directory.

### Development configurations

**[default.ini](https://github.com/smswithoutborders/SMSWithoutBorders-OpenAPI/tree/main/config/example.default.ini)** is the configuration file.

To set up the API, copy the template files "example.default.ini" and rename to "default.ini"

```
cp config/example.default.ini config/default.ini
```

### Access configurations

**[setup.ini](https://github.com/smswithoutborders/SMSWithoutBorders-OpenAPI/tree/main/example.setup.ini)** is the access file.

To set up access, copy the template files "example.setup.ini" and rename to "setup.ini"

```
cp example.setup.ini setup.ini
```

## How to use

### Start API

```bash
python3 server.py
```

## API SandBox

```
<host>:<PORT>/<VERSION>/api-docs/
```
