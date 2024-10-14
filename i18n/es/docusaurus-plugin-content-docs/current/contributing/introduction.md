---
sidebar_position: 1
---

## Definitions

**RelaySMS:** - RelaySMS

This document describes the data flow of RelaySMS.

This document does not contain information about the inner working of each of the modules; information about the inner working of each module can be found in their respective repositories.

This document is aimed at the following audiences:

- Software Engineers
- Program managers

## Overview

#### Summary of data flow

<img alt="Figure: swob merge flow" src="https://github.com/smswithoutborders/SMSWithoutBorders-Resources/raw/master/multimedia/img/developers/swob_merge_flow.png" />

### Storing account access

RelaySMS works on the principles of [OAuth 2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2).

> OAuth 2 is an authorization framework that enables applications — such as Facebook, GitHub, and DigitalOcean — to obtain limited access to user accounts on an HTTP service. It works by delegating user authentication to the service that hosts a user account and authorizing third-party applications to access that user account. OAuth 2 provides authorization flows for web and desktop applications, as well as mobile devices.

<img width="350" height="400" src="https://github.com/smswithoutborders/SMSWithoutBorders-Resources/raw/master/multimedia/img/developers/swob_auth.png" />

User tokens are securely stored and access on user request to:

- publish a request to an online platform from the app
- revoke tokens
- delete accounts (this action revokes tokens as well).

##### Related repositories

- [User access storage database](https://github.com/smswithoutborders/SMSwithoutborders-BE)
- [User management User interfaces](https://github.com/smswithoutborders/smswithoutborders.com)

### Making request using SMS messages

#### Synchronization

The synchronization process utilizes RSA-based communications to perform a secure handshake between the mobile app users and the Gateway servers.

<img width="750" height="600" src="https://github.com/smswithoutborders/SMSWithoutBorders-Resources/raw/master/multimedia/img/developers/swob_sync.png" />

The handshake ends with the app and the Gateway server securely sharing secret keys that will be used to encrypt the SMS messages from the app.

Multiple secret keys are not supported at this time, therefore users are tied to the latest shared secret key; this devalues any previously stored key.

The secret keys are stored on the app and cannot be requested for from the server after the synchronization is completed. This means once a user changes their device or uninstalls the app, they would be required to resynchronize.

##### Related repositories\*\*

- [Gateway server](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server)
- [Android App](https://github.com/smswithoutborders/SMSwithoutBorders-App-Android)

#### Requesting and publishing

Users choose which platform they want intend to publish (send) their messages to from the mobile app. The user is then provided one of many [Gateway Clients](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client) which can forward their messages to Gateway servers. Default Gateway servers are chosen and provided to the user after synchronization happens, but this can be manually changed by the user.

<img width="750" height="600" src="https://github.com/smswithoutborders/SMSWithoutBorders-Resources/raw/master/multimedia/img/developers/swob_request_and_publish.png" />

Messages reaching the Gateway Clients are sent to the Gateway server or as many Gateway servers or routes as required.
The messages remain encrypted through this forwarding process.

Gateway servers receive the forwarded request from the Gateway clients, authenticate the existence of the requester then decrypt the messages and sends to the [Publisher](https://github.com/smswithoutborders/SMSWithoutBorders-Publisher).

Publisher talk with the [User management publisher](https://github.com/smswithoutborders/SMSwithoutborders-BE) which authenticates the request and sends a decrypted copy of the user's stored token information (for the requested platform). The publisher goes ahead to make the request for publisher directly to the requested platforms supported API or via their SDK.

##### Related repositories

- [Gateway clients](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client)
- [Gateway server](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server)
- [Publisher](https://github.com/smswithoutborders/SMSWithoutBorders-Publisher)
