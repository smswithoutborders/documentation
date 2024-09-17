---
sidebar_position: 1
---

# Hosting and Running Gateway Clients Guide

Follow this simple guide to set up and configure a Deku SMS Gateway Client on your Android device.

## Requirements for Setting Up a Gateway Client:

### Android Device:
- Your device must be able to connect to the internet.
- It should have a SIM card capable of receiving SMS messages.

### Internet Connection:
- You will need a reliable internet connection (Wi-Fi or mobile data).
- Deku SMS uses very little data, so mobile data is sufficient.

## Steps to Configure Deku SMS on an Android Device:

### Step 1: Download the Deku SMS App
You can download the Deku SMS app from one of the following sources:
- Google Play Store
- F-Droid
- GitHub Releases

### Step 2: Set Deku SMS as Your Default SMS App
Once the app is installed, set it as the default SMS app on your Android device.

### Step 3: Configure Message Forwarding

<img src="/GatewayClients1.png" alt="Deku SMS App" style={{ width: '50%', maxWidth: '300px', display: 'block', margin: '0 auto' }} />

1. Open the Deku SMS app.

2. Tap on the three dots in the top right corner of the app.

3. From the dropdown menu, select **Message Forwarding**.

### Step 4: Add a Gateway Server

<div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px' }}>
  <img src="/GatewayClients2.png" alt="Deku SMS App" style={{ width: '48%', maxWidth: '300px' }} />
  <img src="/GatewayClients2a.png" alt="Deku SMS App" style={{ width: '48%', maxWidth: '300px' }} /> 
</div>

1. Tap on the three dots in the top right corner again.

2. Select **View Gateway Servers** from the dropdown.

<div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px' }}>
  <img src="/GatewayClients3.png" alt="Deku SMS App" style={{ width: '48%', maxWidth: '300px' }} />
  <img src="/GatewayClients3a.png" alt="Deku SMS App" style={{ width: '48%', maxWidth: '300px' }} />
</div>

3. Tap the three dots once more and choose **Add HTTPS Gateway Server**.

4. Two gateway servers need to be added in order for both Android and iOS users of the RelaySMS app to use the gateway client to publish their messages online.

### Step 5: Fill in the Required Information

<img src="/GatewayClients4.png" alt="Deku SMS App" style={{ width: '50%', maxWidth: '300px', display: 'block', margin: '0 auto' }} />

- **URL 1**: Enter the following URL:  
  `https://gatewayserver.smswithoutborders.com/v3/publish`

- **Tag**: Enter a name for your gateway server.

- **Check "All"**: Ensure the "All" checkbox is checked to route all SMS messages through the server.

### Step 6: Finalize the Setup

<img src="/GatewayClients5.png" alt="Deku SMS App"style={{ width: '50%', maxWidth: '300px', display: 'block', margin: '0 auto' }} />

1. Tap **Add** to save your gateway server configuration.

2. Repeat the process and add the second gateway server with **URL 2**:  
   `https://gatewayserver.smswithoutborders.com/sms/platform/android`

<img src="/GatewayClients6.png" alt="Deku SMS App" style={{ width: '50%', maxWidth: '300px', display: 'block', margin: '0 auto' }} />

## Your Gateway Client is Now Ready!

You can now share your number with RelaySMS users. Your Android device will act as a gateway client, helping route messages through the Deku SMS app.
