---
sidebar_position: 1
---

# راهنمای میزبانی و اجرای کلاینت‌های دروازه

با استفاده از این راهنمای ساده، می‌توانید کلاینت دروازه پیامکی دکو را روی دستگاه اندروید خود تنظیم و پیکربندی کنید.

## نیازمندی‌ها برای تنظیم یک کلاینت دروازه:

### دستگاه اندروید:

- دستگاه شما باید بتواند به اینترنت متصل شود.
- باید یک سیم کارت داشته باشد که قادر به دریافت پیامک باشد.

### اتصال اینترنت:

- شما به یک اتصال اینترنت پایدار (وای‌فای یا داده موبایل) نیاز دارید.
- دکو پیامک از حجم داده کمی استفاده می‌کند، بنابراین داده موبایل کافی است.

## مراحل پیکربندی دکو پیامک بر روی دستگاه اندروید:

### مرحله ۱: دانلود برنامه دکو پیامک

می‌توانید برنامه دکو پیامک را از یکی از منابع زیر دانلود کنید:

- [فروشگاه گوگل پلی](https://play.google.com/store/apps/details?id=com.afkanerd.deku)
- [F-Droid](https://f-droid.org/packages/com.afkanerd.deku/)
- [گیت‌هاب Releases](https://github.com/deku-messaging/Deku-SMS-Android/releases)

### مرحله ۲: تنظیم دکو پیامک به عنوان برنامه پیش‌فرض پیامک

پس از نصب برنامه، آن را به عنوان برنامه پیش‌فرض پیامک در دستگاه اندروید خود تنظیم کنید.

### مرحله ۳: پیکربندی ارسال پیام

<img src="/GatewayHosting/1-messageForwarding.png" alt="برنامه دکو پیامک" style={{ width: '50%', maxWidth: '300px', display: 'block', margin: '0 auto' }} />

1. برنامه دکو پیامک را باز کنید.

2. روی سه نقطه در گوشه بالای سمت راست برنامه کلیک کنید.

3. از منوی کشویی، گزینه **ارسال پیام** را انتخاب کنید.

### مرحله ۴: افزودن یک سرور دروازه

<div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px' }}>
  <img src="/GatewayHosting/2-forwarding.png" alt="برنامه دکو پیامک" style={{ width: '48%', maxWidth: '300px' }} />
  <img src="/GatewayHosting/3-viewGatewayServers.png" alt="برنامه دکو پیامک" style={{ width: '48%', maxWidth: '300px' }} /> 
</div>

1. دوباره روی سه نقطه در گوشه بالای سمت راست کلیک کنید.

2. از منوی کشویی، گزینه **مشاهده سرورهای دروازه** را انتخاب کنید.

<div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px' }}>
  <img src="/GatewayHosting/4-sms-routing-gateway.png" alt="برنامه دکو پیامک" style={{ width: '48%', maxWidth: '300px' }} />
  <img src="/GatewayHosting/5-selectHTTPS.png" alt="برنامه دکو پیامک" style={{ width: '48%', maxWidth: '300px' }} />
</div>

3. یک بار دیگر روی سه نقطه ضربه بزنید و گزینه **افزودن سرور دروازه HTTPS** را انتخاب کنید.

4. برای اینکه کاربران اندروید و iOS برنامه RelaySMS بتوانند از کلاینت دروازه برای ارسال پیام‌های خود به صورت آنلاین استفاده کنند، باید دو سرور دروازه اضافه شود.

### مرحله ۵: تکمیل اطلاعات مورد نیاز

<img src="/GatewayHosting/6-FillRequirement.png" alt="برنامه دکو پیامک" style={{ width: '50%', maxWidth: '300px', display: 'block', margin: '0 auto' }} />

- **URL 1**: آدرس زیر را وارد کنید:  
  `https://gatewayserver.smswithoutborders.com/v3/publish`

- **برچسب**: نامی برای سرور دروازه خود وارد کنید.

- **انتخاب گزینه "همه"**: اطمینان حاصل کنید که گزینه "همه" علامت‌گذاری شده است تا تمام پیامک‌ها از طریق سرور هدایت شوند.

### مرحله ۶: تکمیل پیکربندی

<img src="/GatewayHosting/7-addhttps.png" alt="برنامه دکو پیامک" style={{ width: '50%', maxWidth: '300px', display: 'block', margin: '0 auto' }} />

1. روی **افزودن** کلیک کنید تا پیکربندی سرور دروازه خود ذخیره شود.

2. این مراحل را تکرار کرده و سرور دوم را با **URL 2** اضافه کنید:  
   `https://gatewayserver.smswithoutborders.com/sms/platform/android`

<img src="/GatewayHosting/8-smsroutinggate.png" alt="برنامه دکو پیامک" style={{ width: '50%', maxWidth: '300px', display: 'block', margin: '0 auto' }} />

## کلاینت دروازه شما آماده است!

اکنون می‌توانید شماره خود را با کاربران RelaySMS به اشتراک بگذارید. دستگاه اندروید شما به عنوان یک کلاینت دروازه عمل کرده و به هدایت پیام‌ها از طریق برنامه دکو پیامک کمک می‌کند.
