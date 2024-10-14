## sidebar_position: 1

# Guía para Alojar y Ejecutar Clientes de Gateway

Sigue esta sencilla guía para configurar y configurar un Cliente de Gateway Deku SMS en tu dispositivo Android.

## Requisitos para Configurar un Cliente de Gateway:

### Dispositivo Android:

- Tu dispositivo debe poder conectarse a Internet.
- Debe tener una tarjeta SIM capaz de recibir mensajes SMS.

### Conexión a Internet:

- Necesitarás una conexión a Internet confiable (Wi-Fi o datos móviles).
- Deku SMS utiliza muy pocos datos, por lo que los datos móviles son suficientes.

## Pasos para Configurar Deku SMS en un Dispositivo Android:

### Paso 1: Descarga la App Deku SMS

Puedes descargar la app Deku SMS desde una de las siguientes fuentes:

- [Google Play Store](https://play.google.com/store/apps/details?id=com.afkanerd.deku)
- [F-Droid](https://f-droid.org/packages/com.afkanerd.deku/)
- [GitHub Releases](https://github.com/deku-messaging/Deku-SMS-Android/releases)

### Paso 2: Configura Deku SMS como tu App de SMS Predeterminada

Una vez que la aplicación esté instalada, configúrala como la app de SMS predeterminada en tu dispositivo Android.

### Paso 3: Configura el Reenvío de Mensajes

<img src="/GatewayHosting/1-messageForwarding.png" alt="App Deku SMS" style={{ width: '50%', maxWidth: '300px', display: 'block', margin: '0 auto' }} />

1. Abre la app Deku SMS.

2. Toca los tres puntos en la esquina superior derecha de la aplicación.

3. En el menú desplegable, selecciona **Reenvío de Mensajes**.

### Paso 4: Agregar un Servidor Gateway

<div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px' }}>
  <img src="/GatewayHosting/2-forwarding.png" alt="App Deku SMS" style={{ width: '48%', maxWidth: '300px' }} />
  <img src="/GatewayHosting/3-viewGatewayServers.png" alt="App Deku SMS" style={{ width: '48%', maxWidth: '300px' }} /> 
</div>

1. Vuelve a tocar los tres puntos en la esquina superior derecha.

2. Selecciona **Ver Servidores Gateway** en el menú desplegable.

<div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px' }}>
  <img src="/GatewayHosting/4-sms-routing-gateway.png" alt="App Deku SMS" style={{ width: '48%', maxWidth: '300px' }} />
  <img src="/GatewayHosting/5-selectHTTPS.png" alt="App Deku SMS" style={{ width: '48%', maxWidth: '300px' }} />
</div>

3. Toca los tres puntos nuevamente y elige **Agregar Servidor HTTPS Gateway**.

4. Deben añadirse dos servidores gateway para que los usuarios de Android e iOS de la app RelaySMS puedan usar el cliente gateway para publicar sus mensajes en línea.

### Paso 5: Completa la Información Requerida

<img src="/GatewayHosting/6-FillRequirement.png" alt="App Deku SMS" style={{ width: '50%', maxWidth: '300px', display: 'block', margin: '0 auto' }} />

- **URL 1**: Introduce la siguiente URL:  
  `https://gatewayserver.smswithoutborders.com/v3/publish`

- **Etiqueta**: Introduce un nombre para tu servidor gateway.

- **Marcar "Todo"**: Asegúrate de marcar la casilla de "Todo" para enrutar todos los mensajes SMS a través del servidor.

### Paso 6: Finaliza la Configuración

<img src="/GatewayHosting/7-addhttps.png" alt="App Deku SMS"style={{ width: '50%', maxWidth: '300px', display: 'block', margin: '0 auto' }} />

1. Toca **Agregar** para guardar la configuración de tu servidor gateway.

2. Repite el proceso y añade el segundo servidor gateway con **URL 2**:  
   `https://gatewayserver.smswithoutborders.com/sms/platform/android`

<img src="/GatewayHosting/8-smsroutinggate.png" alt="App Deku SMS" style={{ width: '50%', maxWidth: '300px', display: 'block', margin: '0 auto' }} />

## ¡Tu Cliente de Gateway Ahora Está Listo!

Ahora puedes compartir tu número con los usuarios de RelaySMS. Tu dispositivo Android actuará como un cliente gateway, ayudando a enrutar mensajes a través de la app Deku SMS.
