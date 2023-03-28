---
sidebar_position: 6
---

# SMSWithoutBorders Gateway Server

Gateway-servers enables the users to synchronize and communicate with the publisher module

:::tip What you'll learn

* How to setup and use Gateway Server

The most recent version of this guide can be found in the [`github reposistory`](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server)

The frontend integrates with these services. you may need to set them up depending on what section you are working on.

* [`Android App`](https://github.com/smswithoutborders/SMSWithoutBorders-App-Android)

* [`Gateway Client`](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client)

:::

### Requirements

* python3

### Features

* Message broker server for [Gateway-Client](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client) (_see [SMSWithoutBorders-OpenAPI](https://github.com/smswithoutborders/SMSWithoutBorders-OpenAPI)_ )

* [SMSWithoutBorders-App](https://github.com/smswithoutborders/SMSWithoutBorders-App-Android) synchronization for communication with [Publisher](https://github.com/smswithoutborders/SMSWithoutBorders-Publisher)

 > This should should be hosted in the same place as [Publisher](https://github.com/smswithoutborders/SMSWithoutBorders-Publisher), because Publisher is not _directly_ exposed to the web.

* Forwards publishing request from [Gateway-Client](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client) to [Publisher](https://github.com/smswithoutborders/SMSWithoutBorders-Publisher)
* Authenticates [Gateway-Client's](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client) request to join [Publisher](https://github.com/smswithoutborders/SMSWithoutBorders-Publisher)

### Installation

```bash
https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server.git
git submodule update --force --recursive --init --remote
cd SMSWithoutBorders-Gateway-Server
python3 -m virtualenv venv
. venv/bin/activate
pip3 install -r requirements.txt
```

Optionally, run `make` to install git hooks

### Directory structure

_/gateway_server_ \
Contains the Gateway [server websocket](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server/tree/main/gateway_server/sessions_websocket.py) sessions which is required to synchronize users.

### Configuration

#### Configuring gateway's API

* Copy the config files and edit the

```bash
cp confs/example.conf.ini confs/conf.ini
```

#### Configuring gateway server

* Copy the config files and edit the

```bash
cp gateway_server/confs/example.conf.ini gateway_server/confs/conf.ini
```

#### Usage

<a name="synchronization" ></a>

#### Gateway API

##### Manually start Gateway API

```bash
. venv/bin/activate
python3 main.py
```

* Get List of available Nodes
`/seeds
`

For example

```bash
curl localhost:6969/seeds -H "Content-Type: application/json"
```

Returns

```json
[
  {
    "IMSI": "sample_IMSI", 
    "LPS": 1648206122.81431, 
    "MSISDN": "sample_MSISDN", 
    "seed_type": "seed"
  }
]
```

* Add Gateway to active Gateways
`/ping
`

For example

```bash
curl -X POST \
 localhost:6969/seeds/ping \
 -d '{"IMSI":"sample_IMSI", "MSISDN":"sample_MSISDN", "seed_type":"seed"}' \
 -H "Content-Type: application/json"
```

Returns the LPS of current session. LPS = Last ping session

#### Synchronization

Synchronization is required to enable the users acquire security keys, platforms and available gateways.

##### Manually setup sessions websocket

```bash
. venv/bin/activate
python3 gateway_server/sessions_websocket.py
```

##### Configurations

All configurations for websockets can be done in the `conf.ini` file in `gateway_server` \
`session_change_limit` : Number of times client websocket will receive session change urls \
`session_sleep_timeout` : Number of seconds to sleep after sending a session change url to the client \
`session_paused_timeout` : Number of seconds to remain in paused state before closing connection

##### Synchronization flow

1. Begin by requesting for a new session. \
`GET /<api-version>/sync/users/<user-id>` \
\
This returns a string url, which can be connected to by websocket clients. The users can begin communicating with this \
returned URL or scan them through the QR scan function in the app. The frequency of change of the synchronization urls depends
on the configuration settings `[sync] session_sleep_timeout` (defaults = 15 seconds). \
\
The total number of changes per frequency can be changed in `[sync] session_change_limit` (defaults = 3 times) \

`''`, `200` session created

`''`, `500` some error occured, check debug logs

2. Once a sync url is connected and begins processing, the websocket sends a pause text `201- pause`. \
The user begins authentictating themselves and adding their security policies to their record on the server.

3. Once the user has performed the necessary handshake and the information exchange has begun, the websocket sends an \
acknowledgment text `200- ack`.

<a name="testing" />

#### Testing

* Testing [Users model](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server/tree/main/gateway_server/users.py)

```bash
python -m unittest gateway_server/test/UTestUsers.py
```

* Testing [WebSockets](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server/tree/main/gateway_server/sessions_websocket.py)

[https://github.com/vi/websocat](https://github.com/vi/websocat)

_Manjaro_

```bash
sudo pacman -S websocat jq
```

_Testing websocket_

```bash
websocat ws://localhost:6996/v2/sync/init/111/000
```

* Testing [RSA Encryption/Decryption](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server/tree/main/test/security_rsa.py)
This will require pem files. Copy them into the test/ dir to allow test run

```bash
python -m unittest test/security_rsa.py
```

* Testing [Entire Handshake process](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server/tree/main/test/handshake.py)
This will require pem files. Copy them into the test/ dir to allow test run

```bash
./test/handshake.sh
```
