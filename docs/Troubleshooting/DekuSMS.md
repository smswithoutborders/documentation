---
sidebar_position: 2
---

## Troubleshooting Deku SMS

If you encounter issues while using Deku SMS, the following troubleshooting steps may help resolve common problems.

### 1. **Installation Issues**

- **Problem**: Unable to install Deku SMS from F-Droid or Google Play Store.
  - **Solution**:
    - Ensure your device meets the minimum system requirements for the app.
    - Check your internet connection and try again.
    - Clear the cache and data of the Play Store/F-Droid app, then attempt the installation again.

### 2. **App Crashes or Freezes**

- **Problem**: The app crashes or becomes unresponsive.
  - **Solution**:
    - Restart your device.
    - Clear the app cache by going to **Settings > Apps > Deku SMS > Storage > Clear Cache**.
    - If the problem persists, consider reinstalling the app.

### 3. **SMS Not Sending or Receiving**

- **Problem**: Unable to send or receive SMS messages.
  - **Solution**:
    - Ensure you have a stable mobile network connection.
    - Check if you have set Deku SMS as your default SMS app.
    - Verify that your phone number is correctly configured in the app settings.
    - Check if your phone's SMS service is active by sending a test message using another SMS app.

### 4. **Issues with End-to-End Encryption**

- **Problem**: Unable to send encrypted messages.
  - **Solution**:
    - Ensure both you and the recipient have Deku SMS set as your default SMS app.
    - Confirm that both devices are online and have internet connectivity during the key exchange.
    - Check for any software updates for Deku SMS and update to the latest version.

### 5. **Forwarding Messages to Cloud Fails**

- **Problem**: Incoming messages are not being forwarded to the configured cloud server.
  - **Solution**:
    - Verify that your device has an active internet connection.
    - Check the cloud forwarding settings in Deku SMS to ensure the correct URL and credentials are entered.
    - Look for any server-side errors or issues in the cloud service that could prevent message receipt.
    - Review logs (if available) to troubleshoot specific errors.

### 6. **SMS Gateway Issues**

- **Problem**: Problems with using your phone as an SMS gateway.
  - **Solution**:
    - Ensure you have correctly configured RabbitMQ or any other messaging queue service.
    - Verify that the gateway settings in Deku SMS are accurate and that the messaging queue server is running.
    - Check if the messages are being sent in the correct JSON format as specified in the documentation.
    - Monitor the callback responses for any error messages indicating what might be wrong.

### 7. **General Connectivity Issues**

- **Problem**: Frequent connectivity issues when using the app.
  - **Solution**:
    - Switch between mobile data and Wi-Fi to see if the problem persists.
    - Restart your device's network connection by toggling airplane mode on and off.
    - Reset your network settings if necessary (note that this will erase saved Wi-Fi networks and Bluetooth connections).

### 8. **Feature Requests or Bugs**

- **Problem**: Missing features or discovering bugs.
  - **Solution**:
    - Check the official [Telegram channel](https://t.me/deku_sms) for updates or ongoing issues.
    - Submit a bug report or feature request on the [Deku SMS GitHub page](https://github.com/deku-messaging/Deku-SMS-Android/issues).
    - Provide as much detail as possible, including steps to reproduce the issue, screenshots, and device specifications.

### 9. **Support and Community Help**

- If you continue to experience issues, consider reaching out to the Deku SMS community on Telegram or GitHub for assistance. Many users and developers may provide insights based on their experiences.

---

If you encounter issues not covered in this section, please provide feedback or ask for support in the Deku SMS community to enhance the app's troubleshooting resources.
