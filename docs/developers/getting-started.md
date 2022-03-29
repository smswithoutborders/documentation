---
sidebar_position: 2
---

# Getting Started

## About

SWOB is a platform which enables users with a smartphone to communicate with online third-party platforms using SMS messages. A typical use-case of the platform is sending out emails from platforms such as Gmail accounts. This becomes a useful tool in cases where access to the internet is limited or completely unavailable. Usage of SWOB intales having a proactive approach to maintaining your communications; the features that SWOB supports require the users to take delebrate actions prior to usage.

Our goal is not to replace the internet; for the most part, the internet is an already efficient method of communication with many abilities that surpass what's possible with simple SMS. Unfortunately, we still have a good portion of telecom users in the world who will have to rely on SMS for task built for the internet. Based on value, internet based communications are cheaper than SMS based communications. We are using SWOB on the bases of accessibility to a communication medium.

## Functionalities

### Security

SWOB provides the users with secure means of data transmissions from the SMS to the third-party platforms. The first stage of security begins with users synchronizing by performing a key exchange with the router - this is usually hosted on a cloud server.

Once the key-exchange is successful, users are prompted for their password in other to access the App. The exchanged key (shared key) is used to encrypt every message the user sends via SMS to the Gateway.

Since the key is exchanged (securely) only between the App and the Router, only the router located at the point of synchronization is able to decrypt any incoming message for that App user.

Every time the user re-syncs the App they will be required to re-enter their passwords.

### Accessibility

SWOB is accessible to all 

### Open source

SWOB is Open Source view the code on [Github](https://github.com/smswithoutborders)


## How it works

![How it works](/img/deku_swob_arch.png)

## Component DescriptionSW\0B

<div class="table-responsive">
					<table class="table">
						<thead class="table-dark">
							<tr>
							<th scope="col">Component</th>
							<th scope="col">Name</th>
							<th scope="col">Description</th>
							<th scope="col">Repository</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>User</td>
								<td>Users are those who have saved access to their accounts to be accessed and used later. We use both the API and the Front-End to enable users save their tokens to be used later.
</td> 
								<td>
									<ul>
										<li><a href="https://github.com/smswithoutborders/SMSwithoutBorders_Users">Store Tokens Front End</a></li>
										<li><a href="https://github.com/smswithoutborders/SMSwithoutborders_API_services">Cloud API</a></li>
									</ul>
								</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Mobile</td>
								<td>The mobile app is required to provide secure communication with the cloud servers where tokens are stored. Using QR codes users synchronize their apps with their online accounts; this initiates the necessary handshakes to exchange the necessary security keys.
</td>
								<td>
									<ul>
										<li><a href="https://github.com/smswithoutborders/SMSwithoutBorders-Android">Android App</a></li>
									</ul>
								</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>SMS</td>
								<td>The contents to be delivered to the third-party apps are transmitted through SMS. The SMS messages are encrypted using a shared key obtained from during the synchronization handshake. Due to the encryption of the base64 format of transmitting the data, the SMS length grows by approximately 33%. Example, if the length is 100 characters, it becomes 133 characters.
</td>
								<td>N/A</td>
							</tr>
							<tr>
								<th scope="row">4</th>
								<td>Local Relay-point/Gateways</td>
								<td>Relay-points (Gateways) are set up to receive SMS’ and transmit them further via SMS or an active internet connection to the cloud server. An example of Gateway in use is Deku, a Linux based SMS management tool which enables both sending and receiving SMS messages using 2G/3G USB modems. The relay-point acts as a middleware transmitter either while online or completely offline; online it communicates directly with the cloud via HTTP connections or offline via further SMS messaging.
</td>
								<td>
									<ul>
										<li><a href="https://github.com/smswithoutborders/Deku">Deku</a></li>
									</ul>
								</td>
							</tr>
							<tr>
								<th scope="row">5</th>
								<td>Local Router</td>
								<td>Routers authenticate users and their online saved wallets, while online relay-points send information directly to the routers through HTTP connections. Routers on receiving request for transmission perform various forms of authentication after which decryption is done on the data and it’s further passed to a third-party platform. Synced users are accessed and stored at the level of the router, so it is efficient to host the router at the same location as the cloud API</td>
								<td>
									<ul>
										<li><a href="https://github.com/smswithoutborders/Deku-Router">Deku-router</a></li>
									</ul>
								</td>
							</tr>
							<tr>
								<th scope="row">6</th>
								<td>Twilio (Remote Relay-points/Gateways)</td>
								<td>In cases of lack of internet connections communication with the online cloud server can be achieved by messaging remote relay-points. An example of such relay-points are Twilio, an online messaging service with the ability to use webhooks to communicate with online cloud servers. Certains users have the ability to directly message remote relay-points; this is to reduce the cost of sending SMS messages by messaging the closest relay-points. </td>
								<td>
									<ul>
										<li><a href="https://github.com/smswithoutborders/Deku-Router">Deku-router</a></li>
									</ul>
								</td>
							</tr>
							<tr>
								<th scope="row">7</th>
								<td>Remote Router</td>
								<td><small>Exactly like the <b>Local Router</b> but completely located on the cloud. This enables remote relay-point to maintain communications</small></td>
								<td>
									<ul>
										<li><a href="https://github.com/smswithoutborders/Deku-Router">Deku-router</a></li>
									</ul>
								</td>
							</tr>
							<tr>
								<th scope="row">8</th>
								<td>Cloud Database</td>
								<td>The API acts as the central communication module for transmission between the Front End, the routers and the user’s information stored securely on the databases. Its documented use can be accessed from the developers section. It is good practice for developers setting up their own routers to enable data replication with other databases; this helps in the case of central points of failures.
</td>
								<td>
									<ul>
										<li><a href="https://github.com/smswithoutborders/Deku-Router">Cloud API Framework</a></li>
									</ul>
								</td>
							</tr>
							<tr>
								<th scope="row">9</th>
								<td>Third-Party Platforms</td>
								<td>Third-party platforms are the intended platforms / services which the user aims to communicate with. These platforms in most cases would be online and would be inaccessible to the user at the time (though not necessarily the case). Platforms like Gmail are directly supported at this time by the app and sending emails can be achieved with them by default
</td>
								<td>
									<ul>
										<li><a href="https://github.com/smswithoutborders/SMSwithoutBorders-customplatform-Gmail">Customized Gmail API</a></li>
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
				</div>