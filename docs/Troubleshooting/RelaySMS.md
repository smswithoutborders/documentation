---
sidebar_position: 3
---

# RelaySMS

## Common Issues and Solutions for RelaySMS App

### 1. **Why am I not receiving SMS messages on RelaySMS?**

- **Possible causes:**
  - Ensure your SMS Gateway client is properly configured.
  - Check if your device has sufficient signal for SMS.
  - Verify that RelaySMS has permission to read and send SMS messages.

### 2. **Why are my messages not being sent from RelaySMS?**

- **Possible causes:**
  - Ensure that the OAuth2 tokens for the platform you're sending to are still valid.
  - Verify that your SMS credits are sufficient for sending messages.
  - Check that your default SMS app is functioning and not restricted by battery-saving settings.

### 3. **Why does RelaySMS keep crashing or freezing?**

- **Possible causes:**
  - Make sure you're using the latest version of the app (currently 0.17.0).
  - Clear the app cache and data if the app becomes unresponsive.
  - Restart your phone to clear potential memory or process conflicts.
  - If you're using older Android versions (below 7.0), the app may not function properly.

### 4. **Why is there a delay in sending or receiving messages?**

- **Possible causes:**
  - Ensure that your SMS Gateway client has an active connection.
  - If you're offline, messages will only be sent when the device reconnects to a network.
  - Ensure there’s no high traffic or overload on the Vault servers.

### 5. **Why is my RelaySMS app not syncing with Vault servers?**

- **Possible causes:**
  - Confirm that your Device ID Registration is complete and properly configured.
  - Ensure that your Vault server credentials are correctly stored.
  - Try to refresh the token stored via OAuth2 for the online platform you're connecting with.

### 6. **How do I fix login issues with platforms like Gmail, Twitter, or Telegram in RelaySMS?**

- **Possible causes:**
  - Double-check your OAuth2 token for the platform and ensure it's up to date.
  - Try reauthorizing the platform connection from within the app.
  - Clear the cache of the RelaySMS app and retry.

### 7. **What should I do if RelaySMS displays "Unknown Error" during message transmission?**

- **Possible causes:**
  - Check if your message is properly composed and encrypted before sending.
  - Make sure that your SMS Gateway client is running properly.
  - Verify your OAuth2 tokens and attempt to resend the message.

### 8. **How do I grant SMS permissions for RelaySMS?**

- **Solution:**
  - Go to your phone’s settings.
  - Navigate to "Apps" and select RelaySMS.
  - Tap on "Permissions" and toggle the SMS permission to "Allow."

### 9. **How do I store tokens for platforms like Gmail, Twitter, and Telegram?**

- **Solution:**
  - In the RelaySMS app, use the OAuth2 authorization method to store tokens securely in the Vault.
  - Ensure you follow the prompts to log into each platform and authorize RelaySMS to use them on your behalf.

### 10. **Why am I not receiving notifications for new SMS messages in RelaySMS?**

- **Possible causes:**
  - Ensure that notifications are enabled for RelaySMS in your device's settings.
  - Check if the app is restricted by battery optimization or "Do Not Disturb" mode.
  - Make sure that your device is connected to a network that allows the reception of SMS messages.

### 11. **Why is my device ID registration not working in RelaySMS Vault?**

- **Possible causes:**
  - Verify that you’ve entered the correct Device ID and it matches the one registered in your Vault.
  - Ensure you have a stable network connection when registering the device.
  - Restart the app and try the registration process again.

### 12. **How do I troubleshoot compatibility issues with older Android versions?**

- **Solution:**
  - RelaySMS requires Android 7.0 and above to function correctly. Ensure that your device meets the minimum system requirements.
  - Check if the latest version of RelaySMS (v0.17.0) is installed.

### 13. **How do I resolve issues with OAuth2 token expiration?**

- **Solution:**
  - Go to the platform where the token was issued (e.g., Gmail, Twitter, Telegram) and refresh the authorization.
  - Ensure that RelaySMS has the correct permissions for accessing the token.
  - You can also remove and reauthorize the platform from within the app.

### 14. **Can I send messages to multiple platforms at once?**

- **Answer:**
  - Yes, RelaySMS allows you to send messages to multiple online platforms like Gmail, Twitter, or Telegram simultaneously. However, ensure that OAuth2 tokens are valid for each platform before sending.
  - You can compose a message and select the desired platforms for message delivery.

### 15. **How secure is RelaySMS when sending messages offline?**

- **Answer:**
  - RelaySMS uses advanced encryption protocols like the Signal Double Ratchet algorithm to ensure end-to-end encryption of messages. Your messages remain encrypted from the moment they are composed to when they are received and published on the selected platform.
  - Even when offline, the encrypted messages are transferred securely through your default SMS messaging app.

### 16. **How do I check if my messages are being encrypted properly?**

- **Solution:**
  - RelaySMS automatically encrypts your messages when you send them, but you can verify by ensuring that the app’s encryption protocols (Signal Double Ratchet) are enabled in settings.
  - Messages sent through the app are encoded before being sent via your SMS messaging service, so there is no need for manual encryption.

### 17. **What happens if my device loses connection while sending a message?**

- **Answer:**
  - If your device loses connection, the message will be queued in the app and sent automatically once a connection is re-established.
  - RelaySMS’s offline functionality ensures that the message will still be sent via SMS even if you don’t have an internet connection.

### 18. **How do I manage multiple accounts in RelaySMS?**

- **Solution:**
  - You can easily manage multiple accounts by adding different OAuth2 tokens for each platform (e.g., multiple Gmail, Twitter, or Telegram accounts).
  - Simply go to the account management section in RelaySMS and add or remove accounts as needed.

### 19. **How do I send messages without an authentication phone number?**

- **Solution:**
  - In RelaySMS, you can choose to send messages without requiring your phone number. To do this, ensure that the "Send without phone number" option is enabled in the app's settings.
  - This allows the app to use the stored tokens for authentication rather than your phone number.

### 20. **How do I check the status of messages sent via RelaySMS?**

- **Solution:**
  - You can track message status within the app by viewing the "Sent Messages" tab, which shows whether a message was successfully delivered or still pending.
  - For any messages sent to online platforms, you can also check the respective platform for message delivery status.

---

# RelaySMS Multi-Platform FAQ

## General Questions

### 1. **What platforms is RelaySMS available on?**

- **Answer:**
  - RelaySMS is available on multiple platforms, including:
    - **Android**: Available on Google Play and other app stores.
    - **iOS**: Available on the App Store for iPhone, iPod touch, and Mac devices.
    - **Linux**: Open source and can be installed from source or through package managers.

### 2. **How do I install RelaySMS on iOS?**

- **Steps:**
  1. Open the App Store on your iPhone or iPod touch.
  2. Search for "RelaySMS" by Wisdom Nji.
  3. Tap "Get" to download and install the app.
  4. Once installed, open the app and grant it the necessary permissions to access SMS.

### 3. **What features does the iOS version of RelaySMS offer?**

- **Answer:**
  - The iOS version of RelaySMS includes:
    - Secure online messaging via SMS without needing an internet connection.
    - Storage of OAuth2 tokens for services like Gmail, Twitter, and Telegram.
    - Support for managing multiple accounts seamlessly.
    - Free and open source, allowing for community contributions and transparency.

### 4. **Does RelaySMS on iOS support end-to-end encryption?**

- **Answer:**
  - Yes, the iOS version supports end-to-end encryption, similar to the Android and Linux versions. Users can exchange messages securely without the risk of interception.

### 5. **What are the system requirements for RelaySMS on iOS?**

- **Answer:**
  - The iOS version requires:
    - **iOS 15.0 or later** for iPhone and iPod touch.
    - **macOS 12.0 or later** and an Apple M1 chip or later for Mac.
    - **visionOS 1.0 or later** for Apple Vision.

### 6. **Are there any known issues with the iOS version of RelaySMS?**

- **Answer:**
  - The latest update (version 1.0.9) fixed several issues, including:
    - Problems with switching phone numbers and device IDs.
    - Issues with account creation and country code selection.
    - Bugs causing the app to close unexpectedly after adding new platforms.

### 7. **How do I report issues with the iOS version of RelaySMS?**

- **Answer:**
  - You can report issues by visiting the developer's support page or submitting issues on the RelaySMS GitHub repository. Include details about the problem, device model, and version of iOS you are using.
    s
